#!/usr/bin/env bash
# Checks everything the TV Labs Tizen launch needs before a TV session is
# started, so a session is not left idling while tools get installed.
# Usage: preflight.sh [--sdb]
#   --sdb  also check the Tizen tools (sdb, tizen, Rosetta, port 26099) that
#          sdb mode needs; the default sideload path doesn't use them.
# Exit status is the number of failed checks (0 = ready).
set -uo pipefail

SDB=0
[ "${1:-}" = "--sdb" ] && SDB=1
REPO_ROOT="$(git -C "$(dirname "$0")" rev-parse --show-toplevel)"
TIZEN_HOME="${TIZEN_HOME:-$HOME/tizen-studio}"
export PATH="$TIZEN_HOME/tools:$TIZEN_HOME/tools/ide/bin:$PATH"

fails=0
ok()   { printf '  ok    %s\n' "$1"; }
bad()  { printf '  FAIL  %s\n' "$1"; fails=$((fails + 1)); }
note() { printf '  note  %s\n' "$1"; }

echo "TV Labs"
if ! command -v tvlabs >/dev/null; then
  bad "tvlabs CLI not on PATH (expected ~/.tvlabs/bin/tvlabs)"
elif who="$(tvlabs whoami 2>&1)"; then
  ok "tvlabs whoami: $(printf '%s' "$who" | head -1)"
else
  bad "tvlabs whoami failed: $(printf '%s' "$who" | head -1)"
fi

if [ "$SDB" -eq 1 ]; then
echo "Tizen tools (sdb mode)"
if [ "$(uname -m)" = "arm64" ]; then
  # sdb and the JDK bundled with Tizen Studio are x86_64-only.
  if /usr/bin/arch -x86_64 /usr/bin/true 2>/dev/null; then
    ok "Rosetta 2 installed"
  else
    bad "Rosetta 2 missing (sdb is x86_64-only) - see references/troubleshooting.md"
  fi
fi
if command -v sdb >/dev/null; then
  ok "sdb: $(command -v sdb) ($(sdb version 2>/dev/null | head -1))"
else
  bad "sdb not found on PATH or in $TIZEN_HOME/tools - Tizen Studio CLI not installed"
fi
if command -v tizen >/dev/null; then
  ok "tizen: $(command -v tizen) ($(tizen version 2>/dev/null | tail -1))"
else
  bad "tizen CLI not found on PATH or in $TIZEN_HOME/tools/ide/bin"
fi

echo "Local sdb port"
holder="$(lsof -nP -iTCP:26099 -sTCP:LISTEN 2>/dev/null | awk 'NR==2 {print $1" (pid "$2")"}')"
if [ -z "$holder" ]; then
  ok "localhost:26099 is free"
elif printf '%s' "$holder" | grep -q '^tvlabs'; then
  note "localhost:26099 is held by $holder - a tvlabs connect tunnel is already running"
else
  bad "localhost:26099 is held by $holder - run 'sdb kill-server' before tvlabs connect"
fi
else
echo "Tizen tools"
note "skipped: only sdb mode needs them (run with --sdb)"
fi

echo "Repo"
command -v zip >/dev/null && ok "zip available" || bad "zip not installed - needed to package the .wgt"
[ -f "$REPO_ROOT/src/api/key.ts" ] && ok "src/api/key.ts present" \
  || bad "src/api/key.ts missing - the app needs a TMDB read access token (see README)"
[ -d "$REPO_ROOT/node_modules" ] && ok "node_modules installed" \
  || bad "node_modules missing - run pnpm install"
[ -f "$REPO_ROOT/tizen/config.xml" ] && ok "tizen/config.xml: app id $(sed -n 's/.*<tizen:application id="\([^"]*\)".*/\1/p' "$REPO_ROOT/tizen/config.xml")" \
  || bad "tizen/config.xml missing"

echo
[ "$fails" -eq 0 ] && echo "Ready." || echo "$fails check(s) failed."
exit "$fails"
