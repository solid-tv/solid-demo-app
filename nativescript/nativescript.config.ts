import { NativeScriptConfig } from "@nativescript/core";

export default {
  id: "dev.solidtv.demo",
  projectName: "SolidTVDemo",
  appPath: "app",
  appResourcesPath: "App_Resources",
  bundler: "webpack",
  cli: {
    packageManager: "pnpm"
  }
} as NativeScriptConfig;
