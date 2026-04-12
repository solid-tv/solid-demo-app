#!/bin/bash

# Configuration
VERSIONS=("3.0.0" "3.1.6" "3.2.3" "3.2.4" "3.2.5" "3.2.6" "3.3.0")

# Iterate through each version
for VERSION in "${VERSIONS[@]}"; do
  echo "--- Processing version $VERSION ---"

  # Remove periods from version string for the directory path
  VERSION_PATH=$(echo $VERSION | sed 's/\.//g')

  echo "Updating package.json to version $VERSION with path $VERSION_PATH..."

  # Update package.json and Benchmark.tsx using node
  node -e "
    const fs = require('fs');
    const version = '$VERSION';

    // Update package.json
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

    // Special case for 3.0.0 (no alias)
    if (version === '3.0.0') {
      pkg.dependencies['@solidtv/renderer'] = '3.0.0';
    } else {
      pkg.dependencies['@solidtv/renderer'] = 'npm:@lightningtv/renderer@' + version;
    }

    // Logic for @solidtv/solid: renderer < 3.3.0 -> 3.1.8, renderer >= 3.3.0 -> 3.2.0
    const parts = version.split('.').map(Number);
    if (parts[0] < 3 || (parts[0] === 3 && parts[1] < 3)) {
      pkg.dependencies['@solidtv/solid'] = '3.1.8';
    } else {
      pkg.dependencies['@solidtv/solid'] = '3.2.0';
    }
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
  "

  # Install the specific version
  echo "Installing dependency..."
  pnpm install

  # Build for the specific version path
  echo "Building for path $VERSION_PATH..."
  node scripts/build-github.js --path "$VERSION_PATH"

  echo "--- Finished building version $VERSION ---"
  echo ""
done

echo "Starting deployment of all built versions..."
# Deploy the accumulated dist folder to GitHub Pages
npm run deploy

echo "All versions deployed successfully."
