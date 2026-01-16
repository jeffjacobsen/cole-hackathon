import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { TechBadge, ReactIcon, ViteIcon, TypeScriptIcon, TailwindIcon, ClaudeIcon } from '../ui'

export default function Hero() {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true)

  const scrollToNextSection = () => {
    const toolsSection = document.getElementById('tools')
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // Fade out scroll indicator after scrolling down
      if (window.scrollY > 100) {
        setScrollIndicatorVisible(false)
      } else {
        setScrollIndicatorVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background visual elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient background with radial effect */}
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl glow-primary animate-float-slow animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl glow-accent animate-float-reverse"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary-400/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '1s' }}
        />

        {/* Animated grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(139, 92, 246, 0.5)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom text-center relative z-10 px-4 sm:px-6">
        {/* Main Headline - Self-referential meta message */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-gradient-animated">Built by AI.</span>
          <br />
          <span className="text-white">You're looking at it.</span>
        </h1>

        {/* Subheadline - Explaining the concept */}
        <p className="text-base sm:text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          A meta landing page that showcases how to build beautiful frontends
          with AI coding agents. The page itself is proof of the process.
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          <TechBadge icon={ReactIcon} label="React" />
          <TechBadge icon={ViteIcon} label="Vite" />
          <TechBadge icon={TypeScriptIcon} label="TypeScript" />
          <TechBadge icon={TailwindIcon} label="Tailwind" />
          <TechBadge icon={ClaudeIcon} label="Claude" />
        </div>

        {/* Call-to-action button to scroll down */}
        <button
          onClick={scrollToNextSection}
          className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-primary text-white rounded-lg font-medium hover:glow-primary transition-all duration-300 focus-ring min-h-[44px] text-sm sm:text-base"
          aria-label="Scroll to next section"
        >
          Explore How It Works
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll indicator at bottom */}
      <button
        onClick={scrollToNextSection}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 cursor-pointer focus-ring ${
          scrollIndicatorVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to explore"
      >
        <span className="text-sm text-dark-300 font-medium animate-pulse">
          Scroll to explore
        </span>
        <ArrowDown className="w-6 h-6 text-dark-400 animate-bounce" />
      </button>
    </section>
  )
}
