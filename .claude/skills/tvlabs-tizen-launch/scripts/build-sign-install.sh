#!/usr/bin/env bash
# Builds solid-demo-app's Tizen bundle outside the repo, signs it with the
# certificate of the TV Labs session behind a running `tvlabs connect`,
# installs it on the TV over sdb and launches it.
#
# Usage:
#   build-sign-install.sh --port <status-api-port> [--serial <ip:26101>]
#                         [--skip-build] [--no-launch] [--work-dir <dir>]
#
#   --port        the port from "Status API listening on port N" (tvlabs connect)
#   --serial      sdb serial of the TV; found with `sdb devices` when omitted
#   --skip-build  reuse the last build in the work dir (config.xml and icon are
#                 still copied fresh, so config.xml edits always take effect)
#   --no-launch   install only
#   --work-dir    where build, certificate and .wgt go (default: $TMPDIR)
#
# The certificate password is read from the bundle and never printed.
set -euo pipefail

REPO_ROOT="$(git -C "$(dirname "$0")" rev-parse --show-toplevel)"
TIZEN_HOME="${TIZEN_HOME:-$HOME/tizen-studio}"
export PATH="$TIZEN_HOME/tools:$TIZEN_HOME/tools/ide/bin:$PATH"
PROFILE=tvlabs

PORT="" SERIAL="" SKIP_BUILD=0 LAUNCH=1 WORK=""
while [ $# -gt 0 ]; do
  case "$1" in
    --port) PORT="$2"; shift 2 ;;
    --serial) SERIAL="$2"; shift 2 ;;
    --skip-build) SKIP_BUILD=1; shift ;;
    --no-launch) LAUNCH=0; shift ;;
    --work-dir) WORK="$2"; shift 2 ;;
    -h|--help) sed -n '2,17p' "$0"; exit 0 ;;
    *) echo "unknown option: $1" >&2; exit 2 ;;
  esac
done
[ -n "$PORT" ] || { echo "--port <status-api-port> is required" >&2; exit 2; }
TMP_ROOT="${TMPDIR:-/tmp}"
WORK="${WORK:-${TMP_ROOT%/}/tvlabs-tizen-launch}"
BUILD="$WORK/build" CERT="$WORK/cert" WGT="$WORK/app.wgt"
mkdir -p "$WORK"

step() { printf '\n==> %s\n' "$1"; }
die()  { printf 'ERROR: %s\n' "$1" >&2; exit 1; }
# sdb prints a client/server version-mismatch banner on every call (local
# client 4.2.25 vs the sidecar's newer server); it is harmless, so drop it.
sdbq() {
  sdb -s "$SERIAL" "$@" 2>&1 | grep -v -e "version of SDB client" -e "compatibility problems" \
    -e "recommended to use SDB server" -e "unencrypted connection" || true
}

step "Tunnel"
status="$(curl -s "localhost:$PORT/status" || true)"
echo "$status"
printf '%s' "$status" | grep -q '"state":"connected"' \
  || die "tunnel is not connected. If it stays 'disconnected', tvlabs connect could not find sdb on its PATH (see ~/.tvlabs/logs/tvlabs.log)."

if [ -z "$SERIAL" ]; then
  serials="$(sdb devices 2>/dev/null | awk '$1 ~ /:26101$/ {print $1}')"
  [ "$(printf '%s\n' "$serials" | grep -c .)" -eq 1 ] \
    || die "expected one TV in 'sdb devices', found: ${serials:-none}"
  SERIAL="$serials"
fi
echo "device: $SERIAL"

CONFIG="$REPO_ROOT/tizen/config.xml"
APP_ID="$(sed -n 's/.*<tizen:application id="\([^"]*\)".*/\1/p' "$CONFIG")"
PKG_ID="${APP_ID%%.*}"
[ -n "$APP_ID" ] || die "no <tizen:application id> in $CONFIG"
echo "app: $APP_ID (package $PKG_ID)"

if [ "$SKIP_BUILD" -eq 0 ]; then
  step "Build (into $BUILD, the repo stays untouched)"
  [ -f "$REPO_ROOT/src/api/key.ts" ] || die "src/api/key.ts (TMDB token) is missing"
  (cd "$REPO_ROOT" && pnpm exec vite build --config vite.config.tizen.js --base=./ \
    --outDir "$BUILD" --emptyOutDir true 2>&1 | tail -3)
fi
[ -f "$BUILD/index.html" ] || die "no build in $BUILD (drop --skip-build)"
cp "$CONFIG" "$REPO_ROOT/tizen/icon.png" "$BUILD/"
# Leftovers from an earlier signing would end up inside the new package.
rm -f "$BUILD"/*.wgt "$BUILD/author-signature.xml" "$BUILD"/signature*.xml "$BUILD/.manifest.tmp"

step "Certificate and signing profile '$PROFILE'"
rm -rf "$CERT" && mkdir -p "$CERT"
curl -sf -o "$CERT/bundle.zip" "localhost:$PORT/_dev/certificate" \
  || die "could not download localhost:$PORT/_dev/certificate"
/usr/bin/unzip -qo "$CERT/bundle.zip" -d "$CERT"
P12_DIR="$(dirname "$(find "$CERT" -name author.p12 | head -1)")"
[ -f "$P12_DIR/distributor.p12" ] && [ -f "$P12_DIR/certificate.pwd" ] \
  || die "certificate bundle is missing author.p12, distributor.p12 or certificate.pwd"
# The certificate belongs to this session's TV, so rebuild the profile every run.
if tizen security-profiles list 2>/dev/null | grep -q "^$PROFILE[[:space:]]"; then
  tizen security-profiles remove -n "$PROFILE" >/dev/null 2>&1 || true
fi
PW="$(cat "$P12_DIR/certificate.pwd")"
out="$(tizen security-profiles add -n "$PROFILE" -a "$P12_DIR/author.p12" -p "$PW" \
  -d "$P12_DIR/distributor.p12" -dp "$PW" 2>&1 || true)"
if printf '%s' "$out" | grep -q "Succeed"; then
  echo "profile '$PROFILE' added"
else
  printf '%s\n' "${out//"$PW"/****}"
  unset PW
  die "could not add signing profile"
fi
unset PW

step "Package"
out="$(tizen package -t wgt -s "$PROFILE" -- "$BUILD" 2>&1 || true)"
built="$(find "$BUILD" -maxdepth 1 -name '*.wgt' | head -1)"
[ -n "$built" ] || { printf '%s\n' "$out" | tail -5; die "tizen package produced no .wgt"; }
mv "$built" "$WGT"
echo "$WGT ($(du -h "$WGT" | cut -f1))"

step "Install on $SERIAL"
# `tizen install` reports "There is no connected target" through the tunnel,
# and `sdb install` only pushes, so push and run the TV's installer directly.
toolpath="$(sdbq capability | sed -n 's/^sdk_toolpath://p' | tr -d '\r')"
dest="${toolpath:-/home/owner/share/tmp/sdk_tools}/tmp/app.wgt"
sdbq shell 0 kill "$PKG_ID" >/dev/null
sdbq push "$WGT" "$dest" | tr '\r' '\n' | { grep -v '^$' || true; } | tail -1
out="$(sdbq shell 0 vd_appinstall "$APP_ID" "$dest")"
printf '%s\n' "$out" | { grep -v "installing\[" || true; } | tail -3
printf '%s' "$out" | grep -q "install completed" || die "install failed (signature rejected? check the certificate step)"

if [ "$LAUNCH" -eq 1 ]; then
  step "Launch"
  out="$(sdbq shell 0 was_execute "$APP_ID")"
  printf '%s\n' "$out" | tail -2
  printf '%s' "$out" | grep -q "launched" || die "launch failed"
fi

step "Verify"
sdbq shell 0 applist | grep -F "'$APP_ID'" || die "$APP_ID not in applist"
echo
echo "Done: $APP_ID on $SERIAL"
