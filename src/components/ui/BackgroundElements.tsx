// Decorative background elements for visual interest
// Can be used individually or combined for richer backgrounds

interface BackgroundElementsProps {
  className?: string
}

// Gradient orbs/blobs with blur and glow effects
export function GradientOrbs({ className = "" }: BackgroundElementsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Top left orb */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl glow-primary animate-pulse" />

      {/* Bottom right orb */}
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl glow-accent animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      {/* Center right orb */}
      <div
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary-400/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
    </div>
  )
}

// Dot grid pattern background
export function DotGrid({ className = "", spacing = 40, opacity = 0.2 }: BackgroundElementsProps & { spacing?: number; opacity?: number }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, ${opacity}) 1px, transparent 1px)`,
        backgroundSize: `${spacing}px ${spacing}px`
      }}
    />
  )
}

// Line grid pattern background
export function LineGrid({ className = "", opacity = 0.1 }: BackgroundElementsProps & { opacity?: number }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
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
  )
}

// Radial gradient background
export function RadialGradient({ className = "", opacity = 0.6 }: BackgroundElementsProps & { opacity?: number }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none bg-gradient-radial ${className}`}
      style={{ opacity }}
    />
  )
}

// Noise texture overlay
export function NoiseTexture({ className = "", opacity = 0.05 }: BackgroundElementsProps & { opacity?: number }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}
    />
  )
}

// Floating shapes/particles
export function FloatingShapes({ className = "" }: BackgroundElementsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Small circles */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary-400/20 rounded-full animate-float" />
      <div
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent-400/20 rounded-full animate-float"
        style={{ animationDelay: '1s', animationDuration: '4s' }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-primary-500/15 rounded-full animate-float"
        style={{ animationDelay: '2s', animationDuration: '5s' }}
      />

      {/* Diamonds/squares */}
      <div
        className="absolute top-1/2 right-1/3 w-6 h-6 bg-accent-500/10 rotate-45 animate-float"
        style={{ animationDelay: '0.5s', animationDuration: '6s' }}
      />
      <div
        className="absolute bottom-1/4 right-1/2 w-4 h-4 bg-primary-400/10 rotate-45 animate-float"
        style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}
      />
    </div>
  )
}

// Section divider with gradient line
export function SectionDivider({ className = "" }: BackgroundElementsProps) {
  return (
    <div className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent ${className}`} />
  )
}

// Vertical flow line (for process/timeline sections)
export function VerticalFlowLine({ className = "" }: BackgroundElementsProps) {
  return (
    <div className={`absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/20 to-transparent hidden lg:block ${className}`} />
  )
}

// Horizontal flow line
export function HorizontalFlowLine({ className = "" }: BackgroundElementsProps) {
  return (
    <div className={`absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent ${className}`} />
  )
}

// Complete background composition for dark sections
export function DarkSectionBackground({
  className = "",
  includeOrbs = true,
  includeDots = true,
  includeGrid = false,
  includeNoise = true,
  includeShapes = false
}: BackgroundElementsProps & {
  includeOrbs?: boolean
  includeDots?: boolean
  includeGrid?: boolean
  includeNoise?: boolean
  includeShapes?: boolean
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {includeOrbs && <GradientOrbs />}
      {includeDots && <DotGrid />}
      {includeGrid && <LineGrid />}
      {includeNoise && <NoiseTexture />}
      {includeShapes && <FloatingShapes />}
    </div>
  )
}

// Complete background composition for section transitions
export function SectionTransitionBackground({ className = "" }: BackgroundElementsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <RadialGradient opacity={0.4} />
      <SectionDivider className="top-0" />
      <SectionDivider className="bottom-0" />
    </div>
  )
}
