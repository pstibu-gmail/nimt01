#!/usr/bin/env sh

react-native bundle \
  --platform=windows \
  --entry-file index.js \
  --assets-dest windows/nimt01/ReactAssets \
  --bundle-output windows/nimt01/ReactAssets/index.windows.bundle
  --dev false
