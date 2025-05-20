#!/bin/bash

# Enhanced script for Vercel deployment preparation
# - Cleans up build artifacts
# - Builds the application
# - Creates the public directory for Vercel deployment
# - Sets up proper routing

# Exit immediately if a command exits with a non-zero status
set -e

echo "📦 Preparing for Vercel deployment..."

# Clean up any existing build directories
if [ -d "build" ]; then
  echo "🧹 Cleaning up existing build directory..."
  rm -rf build
fi

if [ -d "public" ]; then
  echo "🧹 Cleaning up existing public directory..."
  rm -rf public
fi

# Run the standard build command
echo "🔨 Building application..."
npm run build

# Check if build directory exists and has content
if [ ! -d "build" ] || [ -z "$(ls -A build)" ]; then
  echo "❌ Error: build directory does not exist or is empty after 'npm run build'"
  exit 1
fi

# Create a directory named 'public' at the root level
echo "📁 Creating public directory for Vercel..."
mkdir -p public

# Copy build contents to public directory
echo "📋 Copying build files to public directory..."
cp -r build/* public/

# Create a simple robots.txt file
echo "📝 Creating robots.txt..."
cat > public/robots.txt << EOF
User-agent: *
Allow: /
EOF

# Create .nojekyll file to disable GitHub Pages Jekyll processing
echo "📝 Creating .nojekyll file..."
touch public/.nojekyll

# Create a verification file for deployment status checks
echo "📝 Creating verification file..."
cat > public/deployment-verification.html << EOF
<!DOCTYPE html>
<html>
<head>
  <title>Deployment Verification</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      max-width: 600px;
      margin: 2rem auto;
      padding: 1rem;
      line-height: 1.5;
    }
    .success { color: #22c55e; }
    pre { background: #f1f5f9; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; }
  </style>
</head>
<body>
  <h1 class="success">Deployment Successful! ✅</h1>
  <p>This page confirms that your Vercel deployment is working properly.</p>
  <p>Deployed at: $(date)</p>
  <h2>Deployment Environment</h2>
  <pre>
Node: $(node -v)
NPM: $(npm -v)
  </pre>
</body>
</html>
EOF

# List the files in public directory
echo "📂 Contents of public directory:"
find public -type f | sort

echo "✅ Deployment preparation complete! Files ready in 'public' directory."
echo "🚀 Ready for Vercel deployment."