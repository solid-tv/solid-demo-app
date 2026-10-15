// Evaluate one expression in the TV's page over CDP and print the value.
// Usage: node cdp.js <http://host:port> '<expression>'
// Only ever run between benchmark runs: an attached inspector inflates the
// renderer's JS on these TVs, so nothing is connected while a run is live.
const [, , base, expression] = process.argv;
const timer = setTimeout(() => {
  console.error("cdp: timed out");
  process.exit(2);
}, 20000);

const list = await (await fetch(`${base}/json/list`)).json();
const pages = list.filter((t) => t.webSocketDebuggerUrl);
const target = pages.find((t) => /github\.io/.test(t.url)) || pages[0];
if (!target) {
  console.error("cdp: no debuggable target", JSON.stringify(list));
  process.exit(3);
}
console.error(`cdp: target ${target.url}`);
// The device reports its own address in the socket URL; dial the tunnel.
const wsUrl = target.webSocketDebuggerUrl.replace(/^ws:\/\/[^/]+/, base.replace(/^http/, "ws"));
const ws = new WebSocket(wsUrl);
ws.onerror = (e) => {
  console.error("cdp: socket error", e.message || e);
  process.exit(4);
};
ws.onopen = () => {
  // Old webOS Chromium ignores awaitPromise, so the expression must be sync.
  ws.send(JSON.stringify({ id: 1, method: "Runtime.evaluate", params: { expression, returnByValue: true } }));
};
ws.onmessage = (msg) => {
  const data = JSON.parse(msg.data);
  if (data.id !== 1) return;
  clearTimeout(timer);
  if (data.error || data.result?.exceptionDetails) {
    console.error("cdp: evaluate failed", JSON.stringify(data.error || data.result.exceptionDetails));
    process.exit(5);
  }
  const value = data.result?.result?.value;
  process.stdout.write(typeof value === "string" ? value : JSON.stringify(value));
  process.stdout.write("\n");
  ws.close();
  process.exit(0);
};
