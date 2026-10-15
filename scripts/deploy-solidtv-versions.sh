#!/bin/bash
set -e

# Builds the demo app against a set of @solidtv/renderer releases into
# dist/<version-without-dots>/ and deploys the lot to GitHub Pages, so the
# version picker at #/versions can launch a benchmark on any of them.
#
#   ./scripts/deploy-solidtv-versions.sh                  # build all + deploy
#   ./scripts/deploy-solidtv-versions.sh --no-deploy      # build only
#   ./scripts/deploy-solidtv-versions.sh 1.10.1           # just these versions
#
# The root build (the picker's "Current") is the 2.x renderer from this
# checkout — build it with `pnpm build:github`.
#
# See scripts/deploy-all-versions.sh for the older @lightningtv/renderer 3.x
# line, which lives under the 3xx paths.

cd "$(dirname "$0")/.."
ROOT=$(pwd)

# The app moved to the renderer 2.x API in 54f38fe4 (import paths, font and
# render engines), so 1.x renderers build from the last commit before it.
V1_REF=0a450629

# "<renderer> <solid> <git-ref>" — @solidtv/solid <=1.3.9 peers on renderer
# ^1.5.4, 1.5.2 on ^1.6.3 and 1.6.5 on ^1.10.1, so each renderer needs the
# solid that matches it.
VERSIONS=(
  "1.5.6 1.3.9 $V1_REF"
  "1.8.3 1.5.2 $V1_REF"
  "1.9.0 1.5.2 $V1_REF"
  "1.10.1 1.6.5 $V1_REF"
)

DEPLOY=1
ONLY=()
for ARG in "$@"; do
  if [ "$ARG" = "--no-deploy" ]; then
    DEPLOY=0
  else
    ONLY+=("$ARG")
  fi
done

# Each version builds in its own throwaway worktree so this checkout's
# package.json, lockfile and node_modules are never touched.
WORK=$(mktemp -d)
cleanup() {
  git -C "$ROOT" worktree remove --force "$WORK/app" 2>/dev/null || true
  rm -rf "$WORK"
}
trap cleanup EXIT

for ENTRY in "${VERSIONS[@]}"; do
  read -r RENDERER SOLID REF <<< "$ENTRY"
  if [ ${#ONLY[@]} -gt 0 ] && [[ ! " ${ONLY[*]} " =~ " $RENDERER " ]]; then
    continue
  fi
  VERSION_PATH=$(echo "$RENDERER" | tr -d '.')

  echo "--- renderer $RENDERER / solid $SOLID @ $REF -> dist/$VERSION_PATH ---"

  git worktree add --detach "$WORK/app" "$REF"
  # The TMDB key is gitignored, so a fresh worktree doesn't have it.
  cp src/api/key.ts "$WORK/app/src/api/key.ts"
  (
    cd "$WORK/app"
    node -e "
      const fs = require('fs');
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      pkg.dependencies['@solidtv/renderer'] = '$RENDERER';
      pkg.dependencies['@solidtv/solid'] = '$SOLID';
      fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
    "
    pnpm install --no-frozen-lockfile
    node scripts/build-github.js --path "$VERSION_PATH"
  )

  # Replace the whole version directory or its previous hashed chunks linger
  # in the deploy.
  rm -rf "dist/$VERSION_PATH"
  mkdir -p dist
  cp -R "$WORK/app/dist/$VERSION_PATH" "dist/$VERSION_PATH"
  git worktree remove --force "$WORK/app"
done

if [ "$DEPLOY" = "1" ]; then
  echo "Deploying dist/ to GitHub Pages..."
  npm run deploy
fi

echo "Done."
