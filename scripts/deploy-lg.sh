#!/bin/bash
set -e

# Installs and launches the packaged webOS app on an LG device.
#
#   ./scripts/deploy-lg.sh [device]     # install + launch only (no build)
#   npm run deploy:lg                   # build:lg, then install + launch
#   npm run deploy:lg -- LGWhite        # ...on a different device
#
# The ares-* CLI ships an ssh2 that still calls util.isDate, which Node 23
# removed, so device commands die with "isDate is not a function" (it looks
# like a network failure, but the TV is fine). We pin Node 22 to run them.

cd "$(dirname "$0")/.."

DEVICE="${1:-LGNew}"

# Newest installed Node 22 from nvm, else the current node if it still has util.isDate.
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

APP_ID=$(sed -n 's/.*"id"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' appinfo.json | head -1)
VERSION=$(sed -n 's/.*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' appinfo.json | head -1)
IPK="lg/${APP_ID}_${VERSION}_all.ipk"

if [ ! -f "$IPK" ]; then
  echo "$IPK not found — run 'npm run build:lg' first." >&2
  exit 1
fi

echo "Installing $IPK on $DEVICE (via $("$NODE22" -v))..."
"$NODE22" "$ARES_BIN/ares-install.js" -d "$DEVICE" "$IPK"

echo "Launching $APP_ID on $DEVICE..."
"$NODE22" "$ARES_BIN/ares-launch.js" -d "$DEVICE" "$APP_ID"
