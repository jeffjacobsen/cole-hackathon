import { Target, Palette, Ruler, Sparkles } from 'lucide-react'
import PromptExample from '../PromptExample'

interface PromptTechnique {
  icon: typeof Target
  title: string
  description: string
  example: string
}

const techniques: PromptTechnique[] = [
  {
    icon: Target,
    title: 'Be Specific About Visual Style',
    description: 'Clearly articulate the aesthetic you want. Reference design trends, mood, and visual metaphors.',
    example: '"Create a modern, glass-morphism hero section with purple gradient accents and floating orbs for a futuristic AI theme."'
  },
  {
    icon: Palette,
    title: 'Reference Design Systems',
    description: 'Leverage existing frameworks like Tailwind CSS. AI agents understand utility classes and can compose them naturally.',
    example: '"Use Tailwind utility classes for a card with glass effect: bg-white/5 backdrop-blur-lg border border-white/10"'
  },
  {
    icon: Ruler,
    title: 'Describe Spacing & Typography',
    description: 'Specify layout details, spacing patterns, and type hierarchy. This ensures consistent, professional results.',
    example: '"Section should have 5rem padding on mobile, 8rem on desktop. Use text-4xl for headings with text-dark-300 for body text."'
  },
  {
    icon: Sparkles,
    title: 'Ask for Production Quality',
    description: 'Set expectations for code quality, accessibility, and polish. Request hover states, animations, and responsive design.',
    example: '"Build production-quality components with hover effects, focus rings for accessibility, and smooth transitions."'
  }
]

export default function DesignSection() {
  return (
    <section
      id="design"
      className="section-padding bg-dark-900/50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orb - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Prompting for Design</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto">
            How to communicate design vision to AI agents through effective prompts and examples
          </p>
        </div>

        {/* Prompting Techniques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {techniques.map((technique, index) => {
            const Icon = technique.icon
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 lg:p-8 hover:glass-strong transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-gradient-accent glow-accent mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {technique.title}
                </h3>

                {/* Description */}
                <p className="text-dark-300 mb-4 leading-relaxed">
                  {technique.description}
                </p>

                {/* Example */}
                <div className="code-block p-4">
                  <p className="text-sm text-accent-300 italic">
                    {technique.example}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Prompt Examples Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Before & After Examples
          </h3>

          <div className="space-y-12 max-w-5xl mx-auto">
            <PromptExample
              title="Visual Style Specification"
              before="Make it look nice and modern."
              after="Create a hero section with glass-morphism effects (bg-white/5 backdrop-blur-lg), purple gradient accents (#8b5cf6 to #22d3ee), and floating animated orbs with soft glows. Use a dark navy background (#020617) for high contrast."
              explanation="The stronger prompt specifies exact visual techniques, color codes, and CSS properties. This gives the AI concrete implementation details rather than subjective terms like 'nice' or 'modern'."
            />

            <PromptExample
              title="Layout & Spacing Details"
              before="Add some space between the sections."
              after="Apply section-padding utility class (5rem top/bottom on mobile, 8rem on desktop). Use container-custom for max-width constraint. Create a 3-column grid on desktop (lg:grid-cols-3) with 8-unit gap between cards."
              explanation="Precise spacing values and responsive breakpoints ensure consistent layout. Referencing utility classes makes it clear we want Tailwind-based implementation."
            />

            <PromptExample
              title="Component Quality Expectations"
              before="Create a button component."
              after="Build a production-quality button component with hover:scale-105 transform, focus-ring for accessibility, smooth transitions (duration-300), and gradient background (bg-gradient-primary). Include disabled state styling and proper ARIA labels."
              explanation="Setting quality expectations upfront ensures the AI includes all necessary details: animations, accessibility, states, and polish that production code requires."
            />
          </div>
        </div>

        {/* Visual Reference Techniques */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Visual Reference Techniques
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Reference Existing Sites */}
            <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-3">Reference Existing Sites</h4>
              <p className="text-dark-300 text-sm mb-3">
                Point to real websites as visual references. AI can understand style patterns from known sites.
              </p>
              <div className="code-block p-3">
                <p className="text-xs text-primary-300">
                  "Create a landing page similar to Stripe's homepage - clean, minimal, with subtle gradients and bold typography."
                </p>
              </div>
            </div>

            {/* Color Palette Specs */}
            <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-3">Color Palette Specifications</h4>
              <p className="text-dark-300 text-sm mb-3">
                Provide exact color codes and define the palette structure upfront for consistency.
              </p>
              <div className="code-block p-3">
                <p className="text-xs text-primary-300">
                  "Use purple (#8b5cf6) as primary, cyan (#22d3ee) as accent, and navy (#020617) as background."
                </p>
              </div>
            </div>

            {/* Component Library Reference */}
            <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-3">Component Library References</h4>
              <p className="text-dark-300 text-sm mb-3">
                Reference established UI patterns from popular libraries to ensure familiarity.
              </p>
              <div className="code-block p-3">
                <p className="text-xs text-primary-300">
                  "Create cards similar to shadcn/ui style - subtle borders, rounded corners, hover elevation effects."
                </p>
              </div>
            </div>

            {/* Style Guide Integration */}
            <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-3">Style Guide Integration</h4>
              <p className="text-dark-300 text-sm mb-3">
                Define reusable utility classes and design tokens for consistency across components.
              </p>
              <div className="code-block p-3">
                <p className="text-xs text-primary-300">
                  "Follow the existing .glass utility (bg-white/5 backdrop-blur-lg) for all card components."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
