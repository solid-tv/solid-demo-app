import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import legacy from "@vitejs/plugin-legacy";
// import devtools from "solid-devtools/vite";
import hexColorTransform from "@lightningtv/vite-hex-transform";
import { configDefaults } from "vitest/config";
import path from "path";
import fs from "fs";
import { transformSync } from "@babel/core";

/**
 * SOLIDTV_RENDERER_DIR / SOLIDTV_SOLID_DIR point @solidtv/renderer (its built
 * dist/) and @solidtv/solid (its source) at local checkouts, so one install
 * builds against either the npm packages or a checkout. Each export subpath
 * of the package becomes an exact-match alias.
 */
function linkPackage(name, dir) {
  if (!dir) return [];
  const { exports } = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf8"));
  return Object.entries(exports)
    .map(([sub, target]) => {
      const file =
        typeof target === "string" ? target : target["@solidtv/source"] || target.import?.default || target.default;
      const spec = name + sub.slice(1);
      return { find: new RegExp("^" + spec.replace(/[/.]/g, "\\$&") + "$"), replacement: path.resolve(dir, file) };
    })
    .sort((a, b) => b.find.source.length - a.find.source.length);
}

/**
 * plugin-legacy 8 builds the polyfills-legacy chunk at ES2015 (rolldown emits
 * arrow-function interop helpers and the plugin's "es2015" minify target is
 * hardcoded), and Babel never touches that chunk — Chrome 38 can't parse it.
 * Down-level it to ES5 here; the other -legacy chunks are already transpiled
 * by plugin-legacy itself per its `targets`.
 */
function es5PolyfillsChunkPlugin() {
  return {
    name: "es5-polyfills-legacy-chunk",
    enforce: "post",
    apply: "build",
    generateBundle(_, bundle) {
      for (const fileName of Object.keys(bundle)) {
        const chunk = bundle[fileName];
        if (chunk.type !== "chunk" || !fileName.includes("polyfills-legacy")) continue;
        const result = transformSync(chunk.code, {
          configFile: false,
          babelrc: false,
          browserslistConfigFile: false,
          compact: true,
          targets: { chrome: "38" },
          presets: [["@babel/preset-env", { modules: false, useBuiltIns: false }]]
        });
        chunk.code = result.code;
      }
    }
  };
}

// The legacy bundle's minification and polyfill set, switchable per build.
// Measured on LGWhite (webOS 3, Chrome 38): see the PR that added them.
//
// LEGACY_MINIFY: unset keeps the beautified, unmangled output; "names" drops
// whitespace and mangles local names but keeps function and class names, so
// on-device stack traces stay readable; "full" mangles everything.
const LEGACY_MINIFY = process.env.LEGACY_MINIFY || "";
const TERSER_OPTIONS = {
  "": { mangle: false, format: { comments: false, beautify: true } },
  names: { keep_fnames: true, keep_classnames: true, format: { comments: false } },
  full: { format: { comments: false } }
}[LEGACY_MINIFY];
if (TERSER_OPTIONS === undefined) throw new Error(`LEGACY_MINIFY=${LEGACY_MINIFY}: expected names or full`);

// LEGACY_POLYFILLS: unset lets plugin-legacy pick core-js modules by usage,
// 153 of them for chrome>=38, many replacing natives Chrome 38 has. Worst is
// JSON.parse: core-js 3.49 returns to the native parser only when it trusts
// the engine's Symbol, which it never does on V8 < 41, so every parse runs in
// JavaScript. Others: Array push/splice/map, typed array constructors,
// RegExp, String replace/split, and Reflect.construct, which Babel's class
// helpers then route every subclass construction through. "narrow" is the
// list below: what Chrome 38 lacks and this app uses, plus the core-js base
// the rest stands on.
const LEGACY_POLYFILLS = process.env.LEGACY_POLYFILLS || "";
const NARROW_LEGACY_POLYFILLS = [
  // core-js treats V8 < 41's Symbol as broken and installs its own, so the
  // iterators and collections built on it come along: for-of, spread,
  // Array.from and new Map(iterable) have to agree on Symbol.iterator.
  "es.symbol",
  "es.symbol.iterator",
  "es.symbol.to-string-tag",
  "es.array.iterator",
  "es.string.iterator",
  "web.dom-collections.iterator",
  "es.map",
  "es.set",
  "es.promise",
  // missing on Chrome 38
  "es.array.fill",
  "es.array.find",
  "es.array.find-index",
  "es.array.flat",
  "es.array.unscopables.flat",
  "es.array.from",
  "es.array.includes",
  "es.object.assign",
  "es.object.entries",
  "es.object.values",
  "es.object.get-own-property-descriptors",
  "es.string.includes",
  "es.string.starts-with",
  "es.string.ends-with",
  "es.string.repeat",
  "es.string.from-code-point",
  "es.promise.finally",
  "es.reflect.own-keys",
  "es.global-this",
  "web.queue-microtask",
  "web.dom-collections.for-each",
  // the router reads URL#searchParams (Chrome 51); the app reads ?query
  // switches with URLSearchParams (Chrome 49)
  "web.url",
  "web.url.to-json",
  "web.url-search-params",
  // V8 < 7.0 quicksorts arrays over 10 items; the router ranks its routes
  // with sort, so keep it stable
  "es.array.sort"
];
// "native" drops core-js altogether for src/legacyPolyfills.js, which
// builds on Chrome 38's own Symbol, iterators, Map, Set and Promise.
const LEGACY_POLYFILL_OPTIONS = {
  "": { additionalLegacyPolyfills: ["whatwg-fetch"] },
  narrow: { polyfills: NARROW_LEGACY_POLYFILLS, additionalLegacyPolyfills: ["whatwg-fetch"] },
  native: {
    polyfills: false,
    additionalLegacyPolyfills: [path.resolve(__dirname, "src/legacyPolyfills.js"), "whatwg-fetch"]
  }
}[LEGACY_POLYFILLS];
if (LEGACY_POLYFILL_OPTIONS === undefined)
  throw new Error(`LEGACY_POLYFILLS=${LEGACY_POLYFILLS}: expected narrow or native`);

export default defineConfig(({ mode }) => ({
  define: {
    __DEV__: mode !== "production",
    __enableCompressedTextures__: true,
    LIGHTNING_DOM_RENDERING: true
  },
  plugins: [
    hexColorTransform({
      include: ["src/**/*.{ts,tsx,js,jsx}"]
    }),
    // devtools({
    //   /* features options - all disabled by default */
    //   autoname: true,
    //   locator: {
    //     jsxLocation: true,
    //     componentLocation: true,
    //     targetIDE: "agy"
    //   }
    // }),
    solidPlugin({
      babel: {
        plugins: [mode !== "production" ? "@solidtv/solid/devtools/jsx-locator" : null].filter(Boolean)
      },
      solid: {
        moduleName: "@solidtv/solid",
        generate: "universal",
        builtIns: []
      }
    }),
    es5PolyfillsChunkPlugin(),
    legacy({
      targets: ["chrome>=38", "not IE 11"],
      // plugin-legacy 8 raised the default modernTargets to chrome>=105 with
      // an es2020 floor, which leaves ?. / ?? in the modern bundle. TVs like
      // webOS 5/6 (Chrome 68/79) pass the modern-browser check but can't
      // parse that — keep the v7-era chrome>=64 floor so they stay working.
      modernTargets: ["chrome>=64"],
      ...LEGACY_POLYFILL_OPTIONS,
      modernPolyfills: [
        // Safari 11 has modules, but throws > ReferenceError: Can't find variable: globalThis
        "es.global-this"
      ],
      // The renderer is class-field heavy (ElementNode alone has ~70 fields, one
      // node per on-screen element). Forwarded to @babel/preset-env, these make
      // public/private fields compile to plain assignment instead of
      // Object.defineProperty / WeakMap, cutting per-node construction cost.
      assumptions: {
        setPublicClassFields: true, // public fields -> assignment, no Object.defineProperty
        privateFieldsAsProperties: true, // #private -> plain prop, no WeakMap
        constantSuper: false, // drop _get/_superPropGet helpers on super calls
        noClassCalls: true, // drop _classCallCheck
        noDocumentAll: true // ?. / ?? compile to != null, not the document.all helper
      }
    })
  ],
  build: {
    // No build.target: plugin-legacy overrides it from modernTargets (and
    // warns if one is set). With Vite 8 (rolldown), the -legacy chunks must
    // be minified by terser — the native oxc minifier cannot emit ES5 and
    // reintroduces template literals after Babel has transpiled.
    minify: "terser",
    rolldownOptions: {
      transform: {
        // Class-field lowering happens here (oxc, per the plugin-legacy
        // derived build.target) BEFORE plugin-legacy's Babel pass runs, so
        // the `assumptions` passed to legacy() below never see class fields.
        // Set them at the rolldown level too: fields compile to plain
        // assignment instead of Object.defineProperty.
        assumptions: {
          setPublicClassFields: true,
          noDocumentAll: true
        }
      }
    },
    // compress stays on so build-time defines actually fold: with it off the
    // renderer's `if (__define__)` branches survive as `if (!false || ...)`
    // and both paths ship. By default mangle stays off so on-device stack
    // traces keep real names (LEGACY_MINIFY above).
    terserOptions: TERSER_OPTIONS,
    sourcemap: false
  },
  resolve: {
    alias: [
      { find: "theme", replacement: path.resolve(__dirname, "src/theme.ts") },
      ...linkPackage("@solidtv/renderer", process.env.SOLIDTV_RENDERER_DIR),
      ...linkPackage("@solidtv/solid", process.env.SOLIDTV_SOLID_DIR)
    ],
    conditions: ["@solidtv/source", "browser", ...(mode !== "production" ? ["development"] : [])],
    dedupe: [
      "solid-js",
      "solid-js/universal",
      "@solidjs/router",
      "@solidtv/renderer",
      "@solidtv/solid",
      "@solidtv/solid/primitives",
      // with a linked @solidtv/solid, also the demo's own deps: the checkout
      // would otherwise bring its own copies and split chunks differently
      ...(process.env.SOLIDTV_SOLID_DIR ? ["@solid-primitives/list", "@solid-primitives/scheduled"] : [])
    ]
  },
  optimizeDeps: {
    exclude: ["@solidtv/solid", "@solidtv/renderer", "solid-devtools"]
  },
  server: {
    port: 5174,
    hmr: true,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp"
    }
  },
  test: {
    exclude: [...configDefaults.exclude, "packages/template/*"],
    globals: true
  }
}));
