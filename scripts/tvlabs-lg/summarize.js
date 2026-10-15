// Summarize one run.sh output directory: per-arm median [min..max] over the
// measured runs (warm-ups excluded), then one line per run.
// Usage: node scripts/tvlabs-lg/summarize.js scripts/tvlabs-lg/out/<tag>
import fs from "fs";
import path from "path";

const dir = process.argv[2];
if (!dir) {
  console.error("usage: node summarize.js <out/tag dir>");
  process.exit(1);
}

const runs = fs
  .readdirSync(dir)
  .filter((f) => /^run-\d+-\w+-w[01]\.json$/.test(f))
  .sort()
  .map((f) => {
    const [, nn, arm, warm] = f.match(/^run-(\d+)-(\w+)-w([01])\.json$/);
    let rec = null;
    try {
      rec = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    } catch {
      // A failed readback leaves an empty file.
    }
    return { nn, arm, warm: warm === "1", results: rec?.run?.results ?? null };
  });

const device = fs.existsSync(path.join(dir, "device.txt"))
  ? fs
      .readFileSync(path.join(dir, "device.txt"), "utf8")
      .split("\n")
      .filter((l) => /modelName|sdkVersion/.test(l))
      .map((l) => l.replace(/\s+/g, " ").trim())
      .join(", ")
  : "unknown device";
console.log(`${path.basename(dir)}: ${device}`);

const measured = runs.filter((r) => !r.warm && r.results);
const arms = [...new Set(measured.map((r) => r.arm))];
if (!arms.length) {
  console.log("No measured runs captured.");
  process.exit(1);
}

// [label, getter, which direction is better ("" = workload, not a score)]
const metrics = [
  ["avgAnimatedFps", (r) => r.frameRateAndSmoothness.avgAnimatedFps, "higher"],
  ["animP95Ms", (r) => r.frameRateAndSmoothness.animP95Ms, "lower"],
  ["animP99Ms", (r) => r.frameRateAndSmoothness.animP99Ms, "lower"],
  ["animMaxFrameTimeMs", (r) => r.frameRateAndSmoothness.animMaxFrameTimeMs, "lower"],
  ["overallRenderedFps", (r) => r.frameRateAndSmoothness.overallRenderedFps, "higher"],
  ["totalUpdateMs", (r) => r.frameWorkSplit.totalUpdateMs, "lower"],
  ["maxUpdateMs", (r) => r.frameWorkSplit.maxUpdateMs, "lower"],
  ["totalRenderMs", (r) => r.frameWorkSplit.totalRenderMs, "lower"],
  ["maxRenderMs", (r) => r.frameWorkSplit.maxRenderMs, "lower"],
  ["totalUploadMs", (r) => r.frameWorkSplit.totalUploadMs, "lower"],
  ["maxUploadMs", (r) => r.frameWorkSplit.maxUploadMs, "lower"],
  ["keyMeanMs", (r) => r.inputDispatch.meanMs, "lower"],
  ["keyMaxMs", (r) => r.inputDispatch.maxMs, "lower"],
  ["keyPresses", (r) => r.inputDispatch.keyPresses, ""],
  ["uploadedTextures", (r) => r.assetsAnimationsGeometry.uploadedTextures, ""],
  ["drawCalls", (r) => r.assetsAnimationsGeometry.drawCalls, ""],
  ["quads", (r) => r.assetsAnimationsGeometry.quads, ""],
  // Network-dominated on the hosted build: not a usable comparison.
  ["initialRenderTimeMs", (r) => r.benchmark.initialRenderTimeMs, ""]
];

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const fmt = (x) => (x == null || Number.isNaN(x) ? "-" : Math.abs(x) >= 100 ? x.toFixed(0) : x.toFixed(2));
const pair = arms.length === 2;

const rows = [
  ["metric", ...arms.map((a) => `${a} (n=${measured.filter((r) => r.arm === a).length})`)].concat(
    pair ? [`${arms[0]} vs ${arms[1]}`, "ranges separate"] : []
  )
];
for (const [name, get, better] of metrics) {
  const values = arms.map((a) =>
    measured
      .filter((r) => r.arm === a)
      .map((r) => get(r.results))
      .filter((x) => typeof x === "number")
  );
  if (values.some((v) => !v.length)) continue;
  const row = [name, ...values.map((v) => `${fmt(median(v))} [${fmt(Math.min(...v))}..${fmt(Math.max(...v))}]`)];
  if (pair) {
    const [a, b] = values;
    const [ma, mb] = [median(a), median(b)];
    row.push(mb ? `${ma >= mb ? "+" : ""}${(((ma - mb) / Math.abs(mb)) * 100).toFixed(1)}%` : "-");
    const separate = Math.min(...a) > Math.max(...b) || Math.max(...a) < Math.min(...b);
    const winner = better && separate ? ((better === "higher") === ma > mb ? arms[0] : arms[1]) : "";
    row.push(separate ? (winner ? `yes, ${winner} better` : "yes") : "no");
  }
  rows.push(row);
}

const widths = rows[0].map((_, i) => Math.max(...rows.map((r) => r[i].length)));
for (const row of rows) console.log(row.map((c, i) => c.padEnd(widths[i])).join("  "));

console.log("\nPer run:");
for (const r of runs) {
  if (!r.results) {
    console.log(`run ${r.nn} ${r.arm}${r.warm ? " (warm-up)" : ""}: not captured`);
    continue;
  }
  const fr = r.results.frameRateAndSmoothness;
  const ws = r.results.frameWorkSplit;
  console.log(
    `run ${r.nn} ${r.arm}${r.warm ? " (warm-up)" : ""}: ` +
      `fps ${fr.avgAnimatedFps} p95 ${fr.animP95Ms} p99 ${fr.animP99Ms} ` +
      `update ${ws.totalUpdateMs} render ${ws.totalRenderMs} upload ${ws.totalUploadMs} ` +
      `textures ${r.results.assetsAnimationsGeometry.uploadedTextures}`
  );
}
