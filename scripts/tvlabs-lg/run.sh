#!/bin/bash
set -e

# A/B the hosted benchmark (https://solid-tv.github.io/solid-demo-app/) across
# deployed renderer builds on a TV Labs cloud LG, all in one session on one TV.
#
#   ./scripts/tvlabs-lg/run.sh                  # root (current 2.x) vs 1101 (1.10.1)
#   ./scripts/tvlabs-lg/run.sh root 190 1101    # any deployed version paths
#   REPS=4 ./scripts/tvlabs-lg/run.sh           # measured runs per arm (default 2)
#   ./scripts/tvlabs-lg/run.sh --dry-run        # print the launch plan, no device
#
# Env: TARGET (TV Labs KQL device query, default platform_key:web_os), REPS,
# RUN_WAIT (seconds a run gets before readback, default 75), TVLABS (CLI path).
#
# Each arm loads once as a discarded warm-up, then measured runs alternate
# forward and reverse order (ABBA...) so drift across the session cancels out.
# Every run is a fresh app launch with no inspector attached; results are read
# over CDP from localStorage.benchmarkRuns only after the run has finished.
# Output lands in scripts/tvlabs-lg/out/<tag>/, followed by a summary table.
# Needs `tvlabs auth` done once and the webOS ares CLI installed.

HERE=$(cd "$(dirname "$0")" && pwd)
REPO=$(cd "$HERE/../.." && pwd)

DRY_RUN=0
ARMS=()
for ARG in "$@"; do
  if [ "$ARG" = "--dry-run" ]; then
    DRY_RUN=1
  else
    ARMS+=("$ARG")
  fi
done
[ ${#ARMS[@]} -gt 0 ] || ARMS=(root 1101)
for ARM in "${ARMS[@]}"; do
  [[ "$ARM" =~ ^[A-Za-z0-9]+$ ]] || { echo "Arm '$ARM' must be 'root' or a version path like 1101." >&2; exit 1; }
done

TARGET=${TARGET:-platform_key:web_os}
REPS=${REPS:-2}
RUN_WAIT=${RUN_WAIT:-75}
TVLABS=${TVLABS:-$(command -v tvlabs || echo "$HOME/.tvlabs/bin/tvlabs")}
TAG=lg$(date +%m%d%H%M%S)
OUT=$HERE/out/$TAG
mkdir -p "$OUT"

# Same Node 22 pin as deploy-lg.sh: the ares-* CLI's ssh2 calls util.isDate,
# which Node 23 removed. tvlabs runs ares itself during warmup, so it gets
# wrappers (via --webos-tools-dir) rather than the PATH ones.
NODE22=$(ls -d "$HOME"/.nvm/versions/node/v22.*/bin/node 2>/dev/null | sort -V | tail -1)
if [ -z "$NODE22" ]; then
  if node -e "process.exit(typeof require('util').isDate === 'function' ? 0 : 1)" 2>/dev/null; then
    NODE22=$(command -v node)
  else
    echo "No Node 22 found and the current node ($(node -v)) lacks util.isDate." >&2
    echo "Install one with: nvm install 22" >&2
    exit 1
  fi
fi
ARES_BIN=$(dirname "$(readlink -f "$(command -v ares-install)")")

WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT
mkdir -p "$WORK/ares" "$WORK/launcher"
for JS in "$ARES_BIN"/ares*.js; do
  printf '#!/bin/sh\nexec "%s" "%s" "$@"\n' "$NODE22" "$JS" > "$WORK/ares/$(basename "$JS" .js)"
  chmod +x "$WORK/ares/$(basename "$JS" .js)"
done

# The launcher only redirects to the URL it is launched with; it borrows the
# app's webOS icons, which ares-package requires.
cp "$HERE"/launcher/* "$REPO/lg/icon.png" "$REPO/lg/largeIcon.png" "$WORK/launcher/"
"$WORK/ares/ares-package" "$WORK/launcher" -o "$WORK" > /dev/null 2>&1
IPK=$(ls "$WORK"/*.ipk)

ENVS=(
  "BENCH_ARMS=${ARMS[*]}"
  "BENCH_REPS=$REPS"
  "BENCH_SESS=$TAG"
  "BENCH_OUT=$OUT"
  "BENCH_ARES=$WORK/ares"
  "BENCH_IPK=$IPK"
  "RUN_WAIT=$RUN_WAIT"
)

if [ "$DRY_RUN" = "1" ]; then
  env "${ENVS[@]}" DRY_RUN=1 TVLABS_ARES_DEVICE=dry-run "$HERE/entry.sh"
  rm -rf "$OUT"
  exit 0
fi

echo "Arms: ${ARMS[*]}  reps: $REPS  target: $TARGET  output: $OUT"
ENV_FLAGS=()
for E in "${ENVS[@]}"; do ENV_FLAGS+=(--env "$E"); done
set +e
"$TVLABS" execute "$HERE/entry.sh" \
  --target "$TARGET" \
  --build "$IPK" \
  --webos-tools-dir "$WORK/ares" \
  --context "$HERE" \
  "${ENV_FLAGS[@]}" \
  --match-timeout "${MATCH_TIMEOUT:-15m}" \
  --run-timeout "${RUN_TIMEOUT:-60m}"
STATUS=$?
set -e

node "$HERE/summarize.js" "$OUT"
exit $STATUS
