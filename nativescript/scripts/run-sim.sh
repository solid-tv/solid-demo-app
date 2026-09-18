#!/bin/zsh
# Usage: scripts/run-sim.sh <udid> <out-dir> [done-pattern] [settle-seconds]
# Installs the simulator build on a booted Apple TV simulator, launches it,
# streams its unified log until the done pattern shows (default: the demo's
# first console line), settles, screenshots, and copies the console file the
# app mirrors out of its container.
set -u
UDID=$1; OUT=$2; DONE=${3:-"Loaded MODERN"}; SETTLE=${4:-8}
BUNDLE=dev.solidtv.demo
NAME=SolidTVDemo
mkdir -p "$OUT"; OUT=$(cd "$OUT" && pwd)
APP=$(find platforms/tvos/build -maxdepth 3 -type d -name "$NAME.app" | grep -i simulator | head -1)
echo "app: $APP"
[ -z "$APP" ] && { echo "no simulator build; run: LC_ALL=en_US.UTF-8 pnpm build:tvos"; exit 1; }
xcrun simctl terminate "$UDID" "$BUNDLE" >/dev/null 2>&1
xcrun simctl uninstall "$UDID" "$BUNDLE" >/dev/null 2>&1
xcrun simctl install "$UDID" "$APP" || exit 1
: > "$OUT/oslog.log"
xcrun simctl spawn "$UDID" log stream --style compact --predicate "process CONTAINS \"$NAME\"" > "$OUT/oslog.log" 2>&1 &
LOGPID=$!
sleep 1
xcrun simctl launch "$UDID" "$BUNDLE" > "$OUT/launch.log" 2>&1
for i in {1..120}; do
  if grep -q "$DONE" "$OUT/oslog.log" 2>/dev/null; then break; fi
  sleep 1
done
sleep "$SETTLE"
xcrun simctl io "$UDID" screenshot "$OUT/screenshot.png" >/dev/null 2>&1 && echo "screenshot: $OUT/screenshot.png"
CONTAINER=$(xcrun simctl get_app_container "$UDID" "$BUNDLE" data 2>/dev/null)
[ -n "$CONTAINER" ] && cp "$CONTAINER/Library/Caches/demo-log.txt" "$OUT/demo-log.txt" 2>/dev/null && echo "console: $OUT/demo-log.txt"
kill $LOGPID >/dev/null 2>&1
echo "--- console (last 40 lines) ---"
tail -40 "$OUT/demo-log.txt" 2>/dev/null | cut -c1-300
echo "--- errors in the unified log ---"
grep -iE "error|exception|fatal|JS ERROR|Unhandled" "$OUT/oslog.log" | grep -v "BoardServices\|XPCErrors" | cut -c1-300 | head -20
