import { Brain, Code, TestTube, ArrowRight } from 'lucide-react'

interface WorkflowDiagramProps {
  variant?: 'horizontal' | 'circular'
  className?: string
}

export default function WorkflowDiagram({ variant = 'horizontal', className = '' }: WorkflowDiagramProps) {
  if (variant === 'circular') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <CircularDiagram />
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <HorizontalDiagram />
    </div>
  )
}

function CircularDiagram() {
  return (
    <div className="relative w-80 h-80">
      {/* Center refresh icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-primary glow-primary flex items-center justify-center z-10">
        <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent animate-spin" />
      </div>

      {/* Circular path */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="0.5"
          strokeDasharray="4 2"
          className="opacity-30"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Plan - Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
        <div className="glass rounded-lg px-4 py-3 hover:glass-strong transition-all duration-300 group">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-white">Plan</span>
          </div>
        </div>
      </div>

      {/* Implement - Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2">
        <div className="glass rounded-lg px-4 py-3 hover:glass-strong transition-all duration-300 group">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-accent-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-white">Implement</span>
          </div>
        </div>
      </div>

      {/* Verify - Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2">
        <div className="glass rounded-lg px-4 py-3 hover:glass-strong transition-all duration-300 group">
          <div className="flex items-center gap-2">
            <TestTube className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-white">Verify</span>
          </div>
        </div>
      </div>

      {/* Animated dots moving along the circle */}
      <div className="absolute top-1/2 left-1/2 w-full h-full">
        <div className="absolute w-2 h-2 bg-primary-400 rounded-full animate-orbit" style={{ animationDelay: '0s' }} />
        <div className="absolute w-2 h-2 bg-accent-400 rounded-full animate-orbit" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  )
}

function HorizontalDiagram() {
  const steps = [
    {
      icon: Brain,
      label: 'Plan',
      description: 'Analyze requirements & explore codebase',
      color: 'primary',
      details: [
        'Understand context',
        'Design approach',
        'Plan architecture'
      ]
    },
    {
      icon: Code,
      label: 'Implement',
      description: 'Write production-quality code',
      color: 'accent',
      details: [
        'Generate components',
        'Apply styling',
        'Add documentation'
      ]
    },
    {
      icon: TestTube,
      label: 'Verify',
      description: 'Test in real browser',
      color: 'primary',
      details: [
        'Browser automation',
        'Console checks',
        'Visual validation'
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Desktop horizontal layout */}
      <div className="hidden lg:flex items-center justify-between gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isLast = index === steps.length - 1

          return (
            <div key={index} className="flex items-center flex-1">
              {/* Step Card */}
              <div className="flex-1 group">
                <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-full bg-gradient-${step.color} glow-${step.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Label */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                    {step.label}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-dark-300 mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-xs text-dark-400">
                        <div className="w-1 h-1 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arrow connector */}
              {!isLast && (
                <div className="flex items-center justify-center px-4">
                  <div className="relative">
                    <ArrowRight className="w-8 h-8 text-primary-500/50" />
                    {/* Animated pulse */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-ping" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile/Tablet vertical layout */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isLast = index === steps.length - 1

          return (
            <div key={index}>
              {/* Step Card */}
              <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-3 rounded-full bg-gradient-${step.color} glow-${step.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    {/* Label */}
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                      {step.label}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-dark-300 mb-3">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-xs text-dark-400">
                          <div className="w-1 h-1 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              {!isLast && (
                <div className="flex justify-center py-4">
                  <div className="relative flex flex-col items-center">
                    <div className="w-px h-8 bg-gradient-to-b from-primary-500/50 to-transparent" />
                    <ArrowRight className="w-6 h-6 text-primary-500/50 rotate-90" />
                    <div className="w-px h-8 bg-gradient-to-b from-transparent to-primary-500/50" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Loop indicator */}
      <div className="flex justify-center mt-8">
        <div className="glass rounded-full px-6 py-3 inline-flex items-center gap-3">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
          <span className="text-sm text-dark-300">Continuous cycle for every task</span>
          <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  )
}
