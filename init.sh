#!/bin/bash
# Initialize and run the development environment for the Mini Hackathon Landing Page

set -e

echo "🚀 Setting up Mini Hackathon Landing Page..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root."
    exit 1
fi

# Environment setup (optional for this project)
if [ ! -f .env ]; then
    if [ -f .env.example ]; then
        echo "⚙️  Creating .env from .env.example..."
        cp .env.example .env
    fi
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Start development server
echo ""
echo "🌐 Starting development server..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Application will be available at: http://localhost:5173"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

npm run dev
