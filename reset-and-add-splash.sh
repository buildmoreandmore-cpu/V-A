#!/bin/bash
cd "$(dirname "$0")"
echo "Resetting to match GitHub..."
git fetch origin
git reset --hard origin/main
echo "Reset complete. Current files:"
ls -la
