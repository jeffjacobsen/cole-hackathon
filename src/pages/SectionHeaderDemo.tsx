import SectionHeader from '../components/ui/SectionHeader'

export default function SectionHeaderDemo() {
  return (
    <div className="min-h-screen bg-dark-950 py-16">
      <div className="container-custom space-y-24">
        {/* Demo Title */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">SectionHeader Component Demo</h1>
          <p className="text-lg text-slate-400">
            Explore different variants and configurations
          </p>
        </div>

        {/* Example 1: Center-aligned with gradient */}
        <div className="glass p-12 rounded-2xl">
          <div className="mb-6 text-xs text-slate-500 uppercase tracking-wider">
            Example 1: Center-aligned with gradient
          </div>
          <SectionHeader
            title="Build Something Amazing"
            subtitle="Getting Started"
            description="This is a centered section header with an animated gradient title. Perfect for hero sections and major page divisions."
            align="center"
            size="lg"
            gradient={true}
          />
        </div>

        {/* Example 2: Left-aligned without gradient */}
        <div className="glass p-12 rounded-2xl">
          <div className="mb-6 text-xs text-slate-500 uppercase tracking-wider">
            Example 2: Left-aligned without gradient
          </div>
          <SectionHeader
            title="Features Overview"
            subtitle="What We Offer"
            description="A left-aligned header works great for content sections where the body text is also left-aligned. This creates better visual flow."
            align="left"
            size="lg"
            gradient={false}
          />
        </div>

        {/* Example 3: With decorative elements */}
        <div className="glass p-12 rounded-2xl">
          <div className="mb-6 text-xs text-slate-500 uppercase tracking-wider">
            Example 3: With decorative elements
          </div>
          <SectionHeader
            title="Premium Experience"
            subtitle="Exclusive"
            description="Adding decorative elements provides subtle visual interest and helps separate major sections of your page."
            align="center"
            size="lg"
            gradient={true}
            decorative={true}
          />
        </div>

        {/* Example 4: Medium size */}
        <div className="glass p-12 rounded-2xl">
          <div className="mb-6 text-xs text-slate-500 uppercase tracking-wider">
            Example 4: Medium size variant
          </div>
          <SectionHeader
            title="Medium Section Header"
            subtitle="Subsection"
            description="Use the medium size for subsections or less prominent areas. It maintains hierarchy while being less dominating."
            align="center"
            size="md"
            gradient={false}
          />
        </div>

        {/* Example 5: Extra large with decorative */}
        <div className="glass p-12 rounded-2xl">
          <div className="mb-6 text-xs text-slate-500 uppercase tracking-wider">
            Example 5: Extra large hero style
          </div>
          <SectionHeader
            title="Make an Impact"
            subtitle="Hero Section"
            description="The extra-large size is perfect for hero sections or landing pages where you want maximum visual impact."
            align="center"
            size="xl"
            gradient={true}
            decorative={true}
          />
        </div>

        {/* Example 6: Title only, left-aligned */}
        <div className="glass p-12 rounded-2xl">
          <div className="mb-6 text-xs text-slate-500 uppercase tracking-wider">
            Example 6: Minimal - Title only
          </div>
          <SectionHeader
            title="Simple and Clean"
            align="left"
            size="lg"
            gradient={false}
          />
        </div>

        {/* Example 7: All features combined */}
        <div className="glass p-12 rounded-2xl">
          <div className="mb-6 text-xs text-slate-500 uppercase tracking-wider">
            Example 7: Maximum styling
          </div>
          <SectionHeader
            title="The Complete Package"
            subtitle="Showcase"
            description="This example demonstrates all features combined: gradient title, subtitle, description, center alignment, and decorative elements. Perfect for making a statement."
            align="center"
            size="xl"
            gradient={true}
            decorative={true}
          />
        </div>

        {/* Code Examples */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">Usage Examples</h2>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Basic Usage</h3>
            <pre className="code-block p-4 overflow-x-auto text-sm">
{`import { SectionHeader } from '@/components/ui'

<SectionHeader
  title="Your Title"
  subtitle="Optional Subtitle"
  description="Optional description text"
  align="center"
  size="lg"
  gradient={true}
  decorative={false}
/>`}
            </pre>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Props Reference</h3>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">title</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">ReactNode (required)</div>
                  <div className="text-xs text-slate-500">The main heading text</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">subtitle</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">ReactNode (optional)</div>
                  <div className="text-xs text-slate-500">Text that appears above the title</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">description</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">ReactNode (optional)</div>
                  <div className="text-xs text-slate-500">Descriptive text below the title</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">align</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">'left' | 'center' (default: 'center')</div>
                  <div className="text-xs text-slate-500">Text alignment</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">size</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">'md' | 'lg' | 'xl' (default: 'lg')</div>
                  <div className="text-xs text-slate-500">Size variant for responsive scaling</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">gradient</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">boolean (default: false)</div>
                  <div className="text-xs text-slate-500">Apply animated gradient to title</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">decorative</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">boolean (default: false)</div>
                  <div className="text-xs text-slate-500">Add decorative line elements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
