#!/bin/bash
set -e

# Builds the demo app against a set of @solidtv/renderer releases into
# dist/<version-without-dots>/ and deploys the lot to GitHub Pages, so the
# version picker at #/versions can launch a benchmark on any of them.
#
#   ./scripts/deploy-solidtv-versions.sh            # build + deploy
#   ./scripts/deploy-solidtv-versions.sh --no-deploy # build only
#
# See scripts/deploy-all-versions.sh for the older @lightningtv/renderer 3.x
# line, which lives under the 3xx paths.

cd "$(dirname "$0")/.."

# "<renderer> <solid>" — @solidtv/solid <=1.3.9 peers on renderer ^1.5.4,
# 1.5.2 peers on ^1.6.3, so each renderer needs the solid that matches it.
VERSIONS=(
  "1.5.6 1.3.9"
  "1.8.3 1.5.2"
  "1.9.0 1.5.2"
)

DEPLOY=1
[ "$1" = "--no-deploy" ] && DEPLOY=0

# package.json is rewritten per version; put it back whatever happens.
RESTORE=$(mktemp)
cp package.json "$RESTORE"
restore() {
  echo "Restoring package.json and node_modules..."
  cp "$RESTORE" package.json
  rm -f "$RESTORE"
  pnpm install --no-frozen-lockfile
}
trap restore EXIT

for ENTRY in "${VERSIONS[@]}"; do
  read -r RENDERER SOLID <<< "$ENTRY"
  VERSION_PATH=$(echo "$RENDERER" | tr -d '.')

  echo "--- renderer $RENDERER / solid $SOLID -> dist/$VERSION_PATH ---"

  # build-github.js keeps dist/ intact across versions, so clear just this
  # version's directory or its previous hashed chunks linger in the deploy.
  rm -rf "dist/$VERSION_PATH"

  node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    pkg.dependencies['@solidtv/renderer'] = '$RENDERER';
    pkg.dependencies['@solidtv/solid'] = '$SOLID';
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
  "

  pnpm install --no-frozen-lockfile
  node scripts/build-github.js --path "$VERSION_PATH"
done

if [ "$DEPLOY" = "1" ]; then
  echo "Deploying dist/ to GitHub Pages..."
  npm run deploy
fi

echo "Done."
