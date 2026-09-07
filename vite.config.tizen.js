import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import hexColorTransform from "@lightningtv/vite-hex-transform";
import path from "path";

/**
 * Injects an inline queueMicrotask polyfill as the very first <script> in
 * <head>. Chrome 69 (Tizen 5/6) doesn't have queueMicrotask (landed in
 * Chrome 71), so this must execute before any app code.
 */
function queueMicrotaskPolyfillPlugin() {
  const polyfill = `if(typeof queueMicrotask!=='function'){self.queueMicrotask=function(fn){Promise.resolve().then(fn).catch(function(e){setTimeout(function(){throw e},0);});};}`;
  return {
    name: "queue-microtask-polyfill",
    transformIndexHtml(html) {
      return html.replace("<head>", `<head>\n  <script>${polyfill}</script>`);
    }
  };
}

/**
 * Rewrites the entry `<script type="module">` into a classic script.
 *
 * The bundle is already a single IIFE (see `rollupOptions.output.format`) with
 * no top-level import/export, but Vite still tags the entry as a module. A
 * widget runs from `file://`, where the response carries no MIME type, and
 * Chromium 69 (Tizen 5.5) enforces strict MIME checking for module scripts
 * only — so the tag fails with "non-JavaScript MIME type of ''", no app code
 * ever runs, and the TV sits on the splash screen with nothing in the log but
 * that one line. Dropping to a classic script is equivalent for an IIFE.
 */
function classicEntryScriptPlugin() {
  return {
    name: "classic-entry-script",
    transformIndexHtml(html) {
      return html.replace(/<script\b[^>]*>/g, (tag) =>
        tag.includes('type="module"') ? tag.replace(' type="module"', "").replace(" crossorigin", "") : tag
      );
    }
  };
}

export default defineConfig(({ mode }) => ({
  define: {
    __DEV__: mode !== "production",
    __RTT__: false,
    __renderTextBatching__: true,
    __enableCompressedTextures__: false,
    __calculateFps__: true,
    LIGHTNING_DOM_RENDERING: false
  },
  plugins: [
    queueMicrotaskPolyfillPlugin(),
    classicEntryScriptPlugin(),
    hexColorTransform({
      include: ["src/**/*.{ts,tsx,js,jsx}"]
    }),
    solidPlugin({
      solid: {
        moduleName: "@solidtv/solid",
        generate: "universal",
        builtIns: []
      }
    })
  ],
  build: {
    // Tizen 5/6 runs Chromium 69 — target it explicitly so esbuild
    // downlevels optional chaining, nullish coalescing, etc.
    target: "chrome69",
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "iife"
      }
    },
    minify: false,
    sourcemap: false
  },
  resolve: {
    alias: {
      theme: path.resolve(__dirname, "src/theme.ts")
    },
    conditions: ["@solidtv/source"],
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
    exclude: ["@solidtv/solid", "@solidtv/renderer"]
  }
}));
