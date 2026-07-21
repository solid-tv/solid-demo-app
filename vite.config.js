import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import legacy from "@vitejs/plugin-legacy";
// import devtools from "solid-devtools/vite";
import hexColorTransform from "@lightningtv/vite-hex-transform";
import { configDefaults } from "vitest/config";
import path from "path";
import { transformSync } from "@babel/core";

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

export default defineConfig(({ mode }) => ({
  define: {
    __DEV__: mode !== "production",
    __RTT__: true,
    __renderTextBatching__: true,
    __enableCompressedTextures__: true,
    __calculateFps__: true,
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
      // polyfills: ["es.promise.finally", "es/map", "es/set"],
      // modernPolyfills: true,
      additionalLegacyPolyfills: ["whatwg-fetch"],
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
        constantSuper: true, // drop _get/_superPropGet helpers on super calls
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
    terserOptions: {
      compress: false,
      mangle: false,
      format: {
        comments: false,
        beautify: true
      }
    },
    sourcemap: false
  },
  resolve: {
    alias: {
      theme: path.resolve(__dirname, "src/theme.ts")
    },
    conditions: ["@solidtv/source", "browser", ...(mode !== "production" ? ["development"] : [])],
    dedupe: [
      "solid-js",
      "solid-js/universal",
      "@solidjs/router",
      "@solidtv/renderer",
      "@solidtv/solid",
      "@solidtv/solid/primitives"
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
