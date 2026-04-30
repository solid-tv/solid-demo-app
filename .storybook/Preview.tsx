// @ts-nocheck
import { Config, createRenderer, For, loadFonts, Text, View } from "@solidtv/solid";
import type { Preview } from "storybook-solidjs-vite";
import { Inspector } from "@solidtv/renderer/inspector";
import { SdfTextRenderer, WebGlCoreRenderer } from "@solidtv/renderer/webgl";
import fonts from "../src/fonts";
import { useMouse } from "@solidtv/solid/primitives";
import "dayjs/locale/fr";

import { createSignal, Show } from "solid-js";
import {
  HolePunch,
  LinearGradient,
  RadialGradient,
  Rounded,
  RoundedWithBorder,
  RoundedWithBorderAndShadow,
  RoundedWithShadow
} from "@solidtv/renderer/webgl/shaders";

Config.rendererOptions = {
  appWidth: 1920,
  appHeight: 1080,
  deviceLogicalPixelRatio: 2 / 3,
  inspector: Inspector,
  devicePhysicalPixelRatio: 1,
  fontEngines: [SdfTextRenderer],
  renderEngine: WebGlCoreRenderer
};
Config.animationSettings = {
  duration: 0,
  delay: 0
};

// TODO Should be removed with themes
Config.fontSettings.fontFamily = "Roboto";
Config.fontSettings.fontSize = 32;
Config.animationsEnabled = false;
Config.focusDebug = false;

const [currentStory, setCurrentStory] = createSignal<any>(null);
const [currentBffInfo, setCurrentBffInfo] = createSignal<any>(undefined);

let startRenderer = true;
const solidRoot = typeof document !== "undefined" ? document.createElement("div") : null;

if (solidRoot) {
  solidRoot.style.width = "100%";
  solidRoot.style.height = "100%";
  solidRoot.style.minHeight = "500px";
  solidRoot.style.position = "relative";
}

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    chromatic: { viewports: [1080], delay: 1500 },
    backgrounds: { default: "dark" },
    controls: {
      expanded: true
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: "500px"
      },
      source: {
        type: "code",
        language: "tsx"
      }
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Getting Started", "Design System", "Components", "*"]
      }
    }
  },
  decorators: [
    (Story: any, context: any) => {
      if (!solidRoot) {
        return Story();
      }

      const checkIsDocs = () => {
        const parentUrl = window.parent.location.href;
        return parentUrl.includes("--docs");
      };

      setCurrentStory(Story());
      setCurrentBffInfo(checkIsDocs() ? context.parameters.bff : undefined);

      if (startRenderer) {
        startRenderer = false;
        const { render, renderer } = createRenderer(Config.rendererOptions as any, solidRoot);
        loadFonts(fonts);

        useMouse();

        render(() => {
          const shManager = renderer.stage.shManager;
          shManager.registerShaderType("rounded", Rounded);
          shManager.registerShaderType("roundedWithBorder", RoundedWithBorder);
          shManager.registerShaderType("roundedWithShadow", RoundedWithShadow);
          shManager.registerShaderType("roundedWithBorderWithShadow", RoundedWithBorderAndShadow);
          shManager.registerShaderType("radialGradient", RadialGradient);
          shManager.registerShaderType("linearGradient", LinearGradient);
          shManager.registerShaderType("holePunch", HolePunch);

          return (
            <Show when={currentStory()}>
              <View x={25} y={25} display="flex" flexDirection="column" gap={24}>
                {currentStory()}
              </View>
            </Show>
          ) as any;
        });
      }
      return solidRoot;
    }
  ]
};

export default preview;
