#!/bin/bash
# The `tvlabs execute` entrypoint for run.sh — it runs here, not on the TV, and
# drives the TV over the session tunnel. Settings arrive as BENCH_* env vars.
set -u
HERE=$(cd "$(dirname "$0")" && pwd)
OUT=${BENCH_OUT:?}
ARES=${BENCH_ARES:?}
DEV=${TVLABS_ARES_DEVICE:?not a webOS session}
SESS=${BENCH_SESS:?}
REPS=${BENCH_REPS:-2}
RUN_WAIT=${RUN_WAIT:-75}
DRY_RUN=${DRY_RUN:-0}
BASE=${BENCH_BASE:-https://solid-tv.github.io/solid-demo-app/}
HOST=${TVLABS_DEVICE_HOST:-localhost}
APP=com.solidtv.benchlauncher
read -r -a ARMS <<< "${BENCH_ARMS:-root 1101}"
log() { echo "[entry $(date +%H:%M:%S)] $*" >&2; }

# Warm-ups (discarded) load each arm once so no measured run pays for a cold
# HTTP cache; then forward/reverse order alternates so drift cancels out.
PLAN=()
for ARM in "${ARMS[@]}"; do PLAN+=("w$ARM"); done
for ((R = 0; R < REPS; R++)); do
  if ((R % 2 == 0)); then
    for ((I = 0; I < ${#ARMS[@]}; I++)); do PLAN+=("${ARMS[I]}"); done
  else
    for ((I = ${#ARMS[@]} - 1; I >= 0; I--)); do PLAN+=("${ARMS[I]}"); done
  fi
done

if [ "$DRY_RUN" != "1" ]; then
  env | grep '^TVLABS_' | sort > "$OUT/env.txt"
  "$ARES/ares-device" -d "$DEV" -i > "$OUT/device.txt" 2>&1
  grep -iE "modelName|sdkVersion|firmwareVersion" "$OUT/device.txt" >&2
  if ! "$ARES/ares-install" -d "$DEV" -l 2>/dev/null | grep -q "$APP"; then
    log "launcher not installed by warmup; installing"
    "$ARES/ares-install" -d "$DEV" "${BENCH_IPK:?}" >&2 || exit 10
  fi
fi

INSPECT_PID=""
CDP=""
find_cdp() {
  # execute forwards the TV's web inspector to 9222; ares-inspect is the fallback.
  if curl -s -m 5 "http://$HOST:9222/json/list" | grep -q webSocketDebuggerUrl; then
    CDP="http://$HOST:9222"
    return 0
  fi
  log "9222 forward has no target; trying ares-inspect"
  "$ARES/ares-inspect" -d "$DEV" --app "$APP" > "$OUT/inspect.log" 2>&1 &
  INSPECT_PID=$!
  for _ in $(seq 1 20); do
    PORT=$(grep -oE 'localhost:[0-9]+' "$OUT/inspect.log" | head -1 | cut -d: -f2)
    if [ -n "$PORT" ] && curl -s -m 5 "http://localhost:$PORT/json/list" | grep -q webSocketDebuggerUrl; then
      CDP="http://localhost:$PORT"
      return 0
    fi
    sleep 1
  done
  return 1
}
drop_cdp() {
  [ -n "$INSPECT_PID" ] && kill "$INSPECT_PID" 2> /dev/null
  INSPECT_PID=""
  CDP=""
}
trap drop_cdp EXIT

read_run() { # $1 = run tag; prints {href, ua, stored, run} with run null until it lands
  local expr="(function(){var runs=JSON.parse(localStorage.getItem('benchmarkRuns')||'[]');var hit=null;for(var i=0;i<runs.length;i++){if(runs[i].url.indexOf('$1')>=0)hit=runs[i];}return JSON.stringify({href:location.href,ua:navigator.userAgent,stored:runs.length,run:hit});})()"
  node "$HERE/cdp.js" "$CDP" "$expr"
}

N=0
for ENTRY in "${PLAN[@]}"; do
  N=$((N + 1))
  NN=$(printf '%02d' $N)
  ARM=${ENTRY#w}
  WARM=0
  [ "$ENTRY" != "$ARM" ] && WARM=1
  URL_BASE=$BASE
  [ "$ARM" != "root" ] && URL_BASE=$BASE$ARM/
  # Zero-padded so run=01 never matches inside run=10.
  TAG="sess=$SESS&run=$NN"
  URL="${URL_BASE}?arm=$ARM&warm=$WARM&$TAG#/benchmark"

  if [ "$DRY_RUN" = "1" ]; then
    echo "run $NN arm=$ARM warm=$WARM $URL"
    continue
  fi

  "$ARES/ares-launch" -d "$DEV" --close "$APP" > /dev/null 2>&1
  sleep 3
  log "run $NN arm=$ARM warm=$WARM: launching"
  "$ARES/ares-launch" -d "$DEV" "$APP" --params "{\"url\":\"$URL\"}" > /dev/null 2>&1 || log "launch failed"
  sleep "$RUN_WAIT"

  RESULT=""
  for _ in 1 2; do
    if find_cdp; then
      RESULT=$(read_run "$TAG")
    fi
    drop_cdp
    if echo "$RESULT" | grep -q '"run":{'; then break; fi
    log "run $NN: no record yet (${RESULT:0:200}); waiting 30s"
    sleep 30
  done
  echo "$RESULT" > "$OUT/run-$NN-$ARM-w$WARM.json"
  if echo "$RESULT" | grep -q '"run":{'; then
    log "run $NN: captured"
  else
    log "run $NN: FAILED to capture"
    # Without readback on the very first run nothing after it can be trusted.
    [ "$N" = 1 ] && exit 11
  fi
done

[ "$DRY_RUN" = "1" ] || "$ARES/ares-launch" -d "$DEV" --close "$APP" > /dev/null 2>&1
log "done"
