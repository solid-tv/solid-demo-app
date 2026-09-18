const path = require("path");
const webpack = require("@nativescript/webpack");
const { chainSolidTV } = require("@solidtv/nativescript/webpack");

// The app is ../src, the web build's source, untouched; this project only
// bundles it for the runtime and adds what the bundle needs around it.
const SRC = path.resolve(__dirname, "../src");
const PUBLIC = path.resolve(__dirname, "../public");
const EMPTY = path.resolve(__dirname, "stubs/empty.cjs");

module.exports = (env) => {
  webpack.init(env);
  webpack.chainWebpack((config) => {
    // Solid JSX for @solidtv/solid, browser export conditions, vite's
    // import.meta.env, the hex-colour transform vite applies to src/, and the
    // theme alias from vite.config.js.
    chainSolidTV(config, {
      hexColors: { include: [SRC] },
      alias: {
        theme: path.resolve(SRC, "theme.ts"),
        // Pages outside the tvOS scope, whose chunks must still bundle: the
        // player drives shaka over a DOM video element, and Firebolt needs a
        // Firebolt transport. Neither page is opened here.
        "shaka-player": EMPTY,
        "@firebolt-js/sdk": EMPTY
      }
    });
    // No type check of the bundle: the web build does none either (vite only
    // transpiles), and the demo's source is written against its own tsconfig.
    // `pnpm tsc` in the demo stays the type check.
    config.plugins.delete("ForkTsCheckerWebpackPlugin");
    // The stubs above export nothing, which webpack points out per import.
    config.set("ignoreWarnings", [{ message: /not found in '(@firebolt-js\/sdk|shaka-player)'/ }]);
    // The fonts and assets the web build serves from public/, at the paths
    // its BASE_URL of './' names, which the shims resolve into the app
    // folder. The KTX textures belong to the compression page, out of scope.
    config.plugin("CopyWebpackPlugin").tap((args) => {
      args[0].patterns.push(
        { from: path.join(PUBLIC, "fonts"), to: "fonts", noErrorOnMissing: true },
        {
          from: path.join(PUBLIC, "assets"),
          to: "assets",
          noErrorOnMissing: true,
          globOptions: { ignore: ["**/ktx/**"] }
        }
      );
      return args;
    });
  });
  return webpack.resolveConfig();
};
