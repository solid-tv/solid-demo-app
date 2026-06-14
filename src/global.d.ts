declare global {
  interface Window {
    APP: string;
    /** Which Vite bundle this device loaded — "MODERN (module)" or "LEGACY (nomodule)". Set at startup in src/index.tsx. */
    bundleType: string;
  }
}

export {};
