#!/bin/bash
cd "$(dirname "$0")"
echo "Installing dependencies..."
npm install
echo "Building project..."
npm run build
echo "Deploying to Vercel..."
vercel --prod --yes
echo "Done!"
