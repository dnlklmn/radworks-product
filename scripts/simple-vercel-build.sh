#!/bin/bash

# A simple script to build and prepare for Vercel deployment

# Exit on error
set -e

echo "🚀 Building for Vercel deployment..."

# Run the standard Vite build process
npm run build

# Create a simple Vercel routing config
cat > build/_vercel.json << EOF
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
EOF

# Also create a .vercelignore file
cat > .vercelignore << EOF
node_modules
.svelte-kit
.git
EOF

# Make build directory the root to deploy
if [ -d "vercel_build" ]; then
  rm -rf vercel_build
fi

mkdir -p vercel_build
cp -r build/* vercel_build/

echo "✅ Build completed and ready for Vercel deployment!"