import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import process from "process";

const args = process.argv.slice(2);
let versionPath = "";
const pathIndex = args.indexOf("--path");

if (pathIndex !== -1 && args.length > pathIndex + 1) {
  versionPath = args[pathIndex + 1];
}

// Find the renderer version from node_modules or relative path
let rendererVersion = "";
const possibleRendererPkgPaths = [
  path.resolve("node_modules/@solidtv/renderer/package.json"),
  path.resolve("../solid-renderer/package.json")
];

for (const pkgPath of possibleRendererPkgPaths) {
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
      if (pkg.version) {
        rendererVersion = pkg.version;
        break;
      }
    } catch (e) {
      // ignore
    }
  }
}

const displayVersion = versionPath || rendererVersion || "unknown";

const baseUrl = versionPath ? `/solid-demo-app/${versionPath}/` : "/solid-demo-app/";
const outDir = versionPath ? `dist/${versionPath}` : "dist";

console.log(`Building for ${versionPath ? "version: " + versionPath : "root"} (Renderer version: ${rendererVersion})...`);
console.log(`Base URL: ${baseUrl}`);
console.log(`Output Directory: ${outDir}`);

// Construct the Vite command
// We use --emptyOutDir true to ensure the target directory is clean.
// Using npx vite to ensure we use the local dependency if not in PATH, though scripts usually have it.
const cmd = `npx vite build --sourcemap=false --base=${baseUrl} --outDir ${outDir} --emptyOutDir false`;

const benchmarkPath = "src/pages/Benchmark.tsx";
let originalBenchmarkContent = "";
let modifiedBenchmark = false;

if (displayVersion && fs.existsSync(benchmarkPath)) {
  console.log(`Injecting version "${displayVersion}" into ${benchmarkPath}...`);
  originalBenchmarkContent = fs.readFileSync(benchmarkPath, "utf8");
  const newContent = originalBenchmarkContent.replace("###", displayVersion);
  fs.writeFileSync(benchmarkPath, newContent);
  modifiedBenchmark = true;
}

console.log(`Running: ${cmd}`);

try {
  execSync(cmd, { stdio: "inherit" });
} catch (error) {
  console.error("Build failed.");
  process.exit(1);
} finally {
  if (modifiedBenchmark) {
    console.log(`Reverting ${benchmarkPath}...`);
    fs.writeFileSync(benchmarkPath, originalBenchmarkContent);
  }
}

