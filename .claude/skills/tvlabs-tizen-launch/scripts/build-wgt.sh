#!/usr/bin/env bash
# Builds solid-demo-app's Tizen bundle outside the repo and zips it into an
# unsigned .wgt. TV Labs' sidecar re-signs it with the TV's certificate when
# it is sideloaded from the web app, so Tizen Studio is not needed.
#
# Usage: build-wgt.sh [--upload] [--out <dir>]
#   --upload  also run `tvlabs upload --id-only` and print the build ID
#   --out     output folder (default: $TMPDIR/tvlabs-tizen-launch)
#
# Ends with key=value lines: wgt, sha256_8 (matches the SHA256 column in the
# web app's Sideload Build dialog), app_id, version and, with --upload, build_id.
set -euo pipefail

REPO_ROOT="$(git -C "$(dirname "$0")" rev-parse --show-toplevel)"
UPLOAD=0 OUT=""
while [ $# -gt 0 ]; do
  case "$1" in
    --upload) UPLOAD=1; shift ;;
    --out) OUT="$2"; shift 2 ;;
    -h|--help) sed -n '2,12p' "$0"; exit 0 ;;
    *) echo "unknown option: $1" >&2; exit 2 ;;
  esac
done
TMP_ROOT="${TMPDIR:-/tmp}"
OUT="${OUT:-${TMP_ROOT%/}/tvlabs-tizen-launch}"
BUILD="$OUT/wgt-build" WGT="$OUT/SolidDemoApp.wgt"
CONFIG="$REPO_ROOT/tizen/config.xml"
die() { printf 'ERROR: %s\n' "$1" >&2; exit 1; }

[ -f "$REPO_ROOT/src/api/key.ts" ] || die "src/api/key.ts (TMDB token) is missing"
command -v zip >/dev/null || die "zip is not installed"
rm -rf "$BUILD" "$WGT"
mkdir -p "$OUT"

echo "==> Build (into $BUILD, the repo stays untouched)" >&2
if ! (cd "$REPO_ROOT" && pnpm exec vite build --config vite.config.tizen.js --base=./ \
  --outDir "$BUILD" --emptyOutDir true >"$OUT/vite.log" 2>&1); then
  tail -20 "$OUT/vite.log" >&2
  die "vite build failed (full log: $OUT/vite.log)"
fi
cp "$CONFIG" "$REPO_ROOT/tizen/icon.png" "$BUILD/"
# config.xml must sit at the root of the archive.
(cd "$BUILD" && zip -qr -X "$WGT" .)

APP_ID="$(sed -n 's/.*<tizen:application id="\([^"]*\)".*/\1/p' "$CONFIG")"
VERSION="$(sed -n 's/.*<widget[^>]* version="\([^"]*\)".*/\1/p' "$CONFIG")"
SHA8="$(shasum -a 256 "$WGT" | cut -c1-8)"

BUILD_ID=""
if [ "$UPLOAD" -eq 1 ]; then
  echo "==> Upload with tvlabs upload (adds a build to the org's build list)" >&2
  # `tvlabs upload --help` lists .apk/.tpk/.zip/.ipk, but .wgt is accepted.
  BUILD_ID="$(tvlabs upload "$WGT" --id-only 2>/dev/null | tail -1 | tr -d '[:space:]')"
  printf '%s' "$BUILD_ID" | grep -Eq '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' \
    || die "tvlabs upload did not return a build ID (got: ${BUILD_ID:-nothing})"
fi

echo "wgt=$WGT"
echo "sha256_8=$SHA8"
echo "app_id=$APP_ID"
echo "version=$VERSION"
[ -n "$BUILD_ID" ] && echo "build_id=$BUILD_ID"
exit 0
