#!/bin/zsh
# Usage: scripts/remote-sim.sh <udid> <out-dir> "<steps>" [launch|activate]
# Presses the Siri Remote's buttons on the Apple TV simulator, the one
# scripted source of real presses there, through the XCUITest driver of the
# @solidtv/nativescript harness: set REMOTE_DRIVER to its remote-driver
# folder, or keep that repository next to this one. Steps, space separated:
# up down left right select menu play home, hold:<button>:<ms>, wait:<ms>.
# With "launch" the app is restarted first; otherwise the running one is
# brought to the front. Prints the driver's lines, then the app's own
# console lines that matter: the lifecycle, focus changes and errors.
set -u
UDID=$1; OUT=$2; STEPS=$3; MODE=${4:-activate}
BUNDLE=dev.solidtv.demo
NAME=SolidTVDemo
DRIVER=${REMOTE_DRIVER:-$(cd "$(dirname "$0")/../../../nativescript/harness/remote-driver" 2>/dev/null && pwd)}
[ -z "$DRIVER" ] && { echo "REMOTE_DRIVER: the harness's remote-driver folder is needed"; exit 1; }
mkdir -p "$OUT"; OUT=$(cd "$OUT" && pwd)
: > "$OUT/remote.log"
xcrun simctl spawn "$UDID" log stream --style compact --predicate "process CONTAINS \"$NAME\" OR process CONTAINS \"RemoteDriver\"" > "$OUT/remote.log" 2>&1 &
LOGPID=$!
sleep 1
TEST_RUNNER_REMOTE_STEPS="$STEPS" TEST_RUNNER_REMOTE_LAUNCH="$MODE" TEST_RUNNER_REMOTE_BUNDLE="$BUNDLE" xcodebuild test \
  -project "$DRIVER/RemoteDriver.xcodeproj" -scheme RemoteDriverUITests \
  -destination "platform=tvOS Simulator,id=$UDID" \
  -derivedDataPath "$DRIVER/DerivedData" CODE_SIGNING_ALLOWED=NO > "$OUT/xcodebuild.log" 2>&1
echo "xcodebuild exit: $?"
sleep 2
xcrun simctl io "$UDID" screenshot "$OUT/remote.png" >/dev/null 2>&1 && echo "screenshot: $OUT/remote.png"
CONTAINER=$(xcrun simctl get_app_container "$UDID" "$BUNDLE" data 2>/dev/null)
[ -n "$CONTAINER" ] && cp "$CONTAINER/Library/Caches/demo-log.txt" "$OUT/demo-log.txt" 2>/dev/null
kill $LOGPID >/dev/null 2>&1
echo "--- driver ---"
grep -o "REMOTE_DRIVER .*" "$OUT/remote.log" | cut -c1-200
grep -E "Test Case.*(passed|failed)|error:|\*\* TEST" "$OUT/xcodebuild.log" | head -3
echo "--- console: lifecycle, focus, errors ---"
grep -E "LIFECYCLE|prev=|ENTRY|RENDER created|\[error\]|Error" "$OUT/demo-log.txt" 2>/dev/null | cut -c1-200 | tail -40
