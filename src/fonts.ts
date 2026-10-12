import type { FontLoadOptions } from "@solidtv/solid";

const basePath = import.meta.env.BASE_URL;

// SDF fonts draw on the WebGL renderer (2.x renders SDF text only); the
// fontUrl web fonts are for the DOM renderer and are skipped otherwise.
const fonts: FontLoadOptions[] = [
  {
    type: "msdf",
    fontFamily: "Roboto",
    atlasDataUrl: basePath + "fonts/Roboto-Regular.msdf.json",
    atlasUrl: basePath + "fonts/Roboto-Regular.msdf.png",
    metrics: {
      ascender: 1000,
      descender: 100,
      lineGap: 0,
      unitsPerEm: 1000
    }
  },
  {
    type: "msdf",
    fontFamily: "Roboto700",
    atlasDataUrl: basePath + "fonts/Roboto-Bold.msdf.json",
    atlasUrl: basePath + "fonts/Roboto-Bold.msdf.png",
    metrics: {
      ascender: 1000,
      descender: 100,
      lineGap: 0,
      unitsPerEm: 1000
    }
  },
  {
    type: "msdf",
    fontFamily: "Arial",
    atlasDataUrl: basePath + "fonts/Roboto-Regular.msdf.json",
    atlasUrl: basePath + "fonts/Roboto-Regular.msdf.png"
  },
  {
    type: "msdf",
    fontFamily: "Raleway",
    atlasDataUrl: basePath + "fonts/Raleway-ExtraBold.msdf.json",
    atlasUrl: basePath + "fonts/Raleway-ExtraBold.msdf.png"
  },
  {
    fontFamily: "Roboto",
    fontUrl: basePath + "fonts/Roboto-Regular.ttf"
  },
  {
    fontFamily: "Roboto700",
    fontUrl: basePath + "fonts/Roboto-Bold.ttf"
  }
];

export default fonts;
