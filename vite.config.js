import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import legacy from "@vitejs/plugin-legacy";
// import devtools from "solid-devtools/vite";
import hexColorTransform from "@lightningtv/vite-hex-transform";
import { configDefaults } from "vitest/config";
import path from "path";

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
    legacy({
      targets: ["chrome>=38", "not IE 11"],
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
    target: "chrome>=69",
    minify: "terser",
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
