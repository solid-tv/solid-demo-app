#!/bin/zsh
# Usage: scripts/background-sim.sh <udid> <out-dir> [background-seconds]
# With the demo running on the Apple TV simulator, sends it to the
# background by launching the system Settings app, brings it back with a
# relaunch after the given seconds, screenshots both states and prints the
# app's LIFECYCLE lines: the suspend, whether the render loop had stopped
# half a second later, and the resume. A second "BOOT start" line means the
# app was restarted rather than resumed.
set -u
UDID=$1; OUT=$2; STAY=${3:-5}
BUNDLE=dev.solidtv.demo
OTHER=com.apple.TVSettings
mkdir -p "$OUT"; OUT=$(cd "$OUT" && pwd)
xcrun simctl launch "$UDID" "$OTHER" > "$OUT/cycle-launch.log" 2>&1
sleep "$STAY"
xcrun simctl io "$UDID" screenshot "$OUT/background.png" >/dev/null 2>&1
xcrun simctl launch "$UDID" "$BUNDLE" >> "$OUT/cycle-launch.log" 2>&1
sleep 4
xcrun simctl io "$UDID" screenshot "$OUT/foreground.png" >/dev/null 2>&1
CONTAINER=$(xcrun simctl get_app_container "$UDID" "$BUNDLE" data 2>/dev/null)
[ -n "$CONTAINER" ] && cp "$CONTAINER/Library/Caches/demo-log.txt" "$OUT/demo-log.txt" 2>/dev/null
echo "--- console: boot and lifecycle ---"
grep -E "BOOT start|LIFECYCLE" "$OUT/demo-log.txt" 2>/dev/null | cut -c1-200
