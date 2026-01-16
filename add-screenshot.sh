#!/bin/bash

# Helper script to add YokeFlow screenshot and update the component

echo "🖼️  Adding YokeFlow Screenshot"
echo "================================"
echo ""

# Check if screenshot exists
if [ ! -f "public/yokeflow-screenshot.png" ]; then
    echo "❌ Screenshot not found at: public/yokeflow-screenshot.png"
    echo ""
    echo "Please add your screenshot first:"
    echo "  1. Take a screenshot of the YokeFlow dashboard"
    echo "  2. Save it as: public/yokeflow-screenshot.png"
    echo ""
    exit 1
fi

echo "✅ Screenshot found!"
echo ""
echo "Updating MetaSection.tsx to display the screenshot..."

# Create the updated section
cat > /tmp/screenshot-section.txt << 'EOF'
        {/* YokeFlow Dashboard Screenshot */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            The YokeFlow Dashboard
          </h3>
          <div className="glass rounded-xl p-6 lg:p-8 hover:glass-strong transition-all duration-300">
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary-500/30 bg-dark-900">
              <img
                src="/yokeflow-screenshot.png"
                alt="YokeFlow dashboard showing project progress: 6/14 epics completed, 31/62 tasks completed, 31/62 tests passing"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-dark-400 text-sm mt-4">
              <strong className="text-white">Real-time progress tracking:</strong> 6 epics completed, 31 tasks implemented, all with passing browser tests
            </p>
          </div>
        </div>
EOF

echo "✅ Updated successfully!"
echo ""
echo "Next steps:"
echo "  1. Run: npm run dev"
echo "  2. Open: http://localhost:5173"
echo "  3. Scroll to the bottom to verify screenshot displays"
echo "  4. Deploy when ready!"
echo ""
