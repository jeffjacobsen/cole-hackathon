import { FileText, Brain, Code, TestTube, CheckCircle, ArrowRight, RefreshCw, Eye, Camera, CheckSquare, RotateCcw, MessageSquare, TrendingUp, Zap, Clock } from 'lucide-react'

interface ProcessStep {
  icon: typeof FileText
  number: string
  title: string
  description: string
  details: string[]
}

const processSteps: ProcessStep[] = [
  {
    icon: FileText,
    number: '01',
    title: 'Define Requirements',
    description: 'Start with clear, specific requirements. Break down the project into epics and tasks.',
    details: [
      'Write natural language specifications',
      'Break into manageable epics',
      'Define acceptance criteria',
      'Set quality expectations upfront'
    ]
  },
  {
    icon: Brain,
    number: '02',
    title: 'AI Planning Phase',
    description: 'AI agent explores codebase, understands architecture, and creates implementation plan.',
    details: [
      'Analyze existing patterns',
      'Identify dependencies',
      'Design component structure',
      'Plan file organization'
    ]
  },
  {
    icon: Code,
    number: '03',
    title: 'Autonomous Implementation',
    description: 'AI writes production-quality code with proper types, styles, and documentation.',
    details: [
      'Generate TypeScript components',
      'Apply Tailwind styling',
      'Ensure accessibility',
      'Follow best practices'
    ]
  },
  {
    icon: TestTube,
    number: '04',
    title: 'Automated Verification',
    description: 'Every feature is tested in real browser with Playwright MCP before marking complete.',
    details: [
      'Browser automation testing',
      'Console error detection',
      'Visual verification',
      'Workflow validation'
    ]
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'Iterate & Refine',
    description: 'Continuous improvement through feedback loops and quality gates.',
    details: [
      'Address test failures',
      'Refine based on feedback',
      'Optimize performance',
      'Polish user experience'
    ]
  }
]

export default function StrategySection() {
  return (
    <section
      id="strategy"
      className="section-padding bg-dark-900/40 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orb - top right */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        {/* Gradient orb - bottom left */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />

        {/* Vertical flow line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/20 to-transparent hidden lg:block" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">The Process</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto">
            From requirements to production-ready code - a structured, verifiable workflow powered by AI agents
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="max-w-5xl mx-auto space-y-12 lg:space-y-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className="relative"
              >
                {/* Step Card */}
                <div className={`flex flex-col lg:flex-row gap-6 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Icon & Number Column */}
                  <div className="flex-shrink-0 flex flex-col items-center lg:w-32">
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-primary-500/20 mb-4">
                      {step.number}
                    </div>

                    {/* Icon Circle */}
                    <div className="inline-flex p-4 rounded-full bg-gradient-primary glow-primary">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 glass rounded-xl p-6 lg:p-8 hover:glass-strong transition-all duration-300 group">
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-dark-300 mb-6 leading-relaxed text-lg">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-3 text-dark-400"
                        >
                          <ArrowRight className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connecting Arrow (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-bottom-12">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-8 bg-gradient-to-b from-primary-500/50 to-transparent" />
                      <div className="w-2 h-2 rounded-full bg-primary-500/50 animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* PIV Loop Explanation */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              The PIV Loop: Continuous Quality
            </h3>
            <p className="text-dark-300 text-lg max-w-3xl mx-auto">
              Every task follows a tight Plan-Implement-Verify cycle that ensures quality at every step
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Diagram */}
            <div className="relative flex items-center justify-center">
              {/* Circular flow diagram */}
              <div className="relative w-80 h-80">
                {/* Center icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-primary glow-primary flex items-center justify-center z-10">
                  <RefreshCw className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '8s' }} />
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
                  <div className="glass rounded-lg px-4 py-3 hover:glass-strong transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary-400" />
                      <span className="font-semibold text-white">Plan</span>
                    </div>
                  </div>
                </div>

                {/* Implement - Right */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2">
                  <div className="glass rounded-lg px-4 py-3 hover:glass-strong transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-accent-400" />
                      <span className="font-semibold text-white">Implement</span>
                    </div>
                  </div>
                </div>

                {/* Verify - Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2">
                  <div className="glass rounded-lg px-4 py-3 hover:glass-strong transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <TestTube className="w-5 h-5 text-primary-400" />
                      <span className="font-semibold text-white">Verify</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-6">
              <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-primary glow-primary">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Plan</h4>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      Analyze requirements, explore codebase, understand context, and design implementation approach.
                      No code is written until the strategy is clear.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-accent glow-accent">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Implement</h4>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      Write production-quality code following the plan. Generate components, styles, and logic
                      with proper types, accessibility, and documentation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-primary glow-primary">
                    <TestTube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Verify</h4>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      Test in real browser using Playwright MCP. Check interactions, console errors, and visual
                      output. Only mark complete when tests pass.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-lg bg-accent-500/10 border border-accent-500/20">
                <p className="text-accent-300 text-sm leading-relaxed">
                  <strong className="text-accent-200">This Project:</strong> This landing page was built using
                  the PIV loop across 60+ tasks. Each section you see passed browser verification before being
                  marked complete.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Validation Strategy */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Validation Strategy
            </h3>
            <p className="text-dark-300 text-lg max-w-3xl mx-auto">
              Multiple verification approaches ensure every feature works as intended before marking complete
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Browser-based Visual Testing */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary glow-primary">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Browser-based Visual Testing
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    Every UI feature is tested in a real browser environment. No assumptions - see the actual rendered output.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Navigate to actual pages at localhost URLs</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Test user interactions (clicks, hovers, form inputs)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Verify responsive layouts across breakpoints</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Playwright MCP for Screenshots */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-accent glow-accent">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Playwright MCP Screenshots
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    Capture visual proof of implementation. Screenshots document that features render correctly.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Automated browser control via MCP integration</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Console error detection (must be clean)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Visual regression tracking for consistency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Manual Review Checkpoints */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary glow-primary">
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Manual Review Checkpoints
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    Structured checklists ensure nothing is missed. Review code quality, accessibility, and UX.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Code matches established patterns</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>ARIA labels and semantic HTML present</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Visual polish meets design standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Iteration When Not Right */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-accent glow-accent">
                  <RotateCcw className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Iterate When Not Right
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    Failed tests mean the task isn't done. Fix issues, refine implementation, and re-verify.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Never mark complete with failing tests</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Debug console errors until clean</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Refine until visual output matches intent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Validation Workflow Note */}
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-primary-500/10 border border-primary-500/20">
              <p className="text-primary-200 text-center leading-relaxed">
                <strong className="text-primary-100">Quality Gate:</strong> Every task in this project required
                passing browser verification before completion. No shortcuts, no assumptions - only verified,
                working features make it into the final product.
              </p>
            </div>
          </div>
        </div>

        {/* Iteration and Refinement */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Iteration & Refinement
            </h3>
            <p className="text-dark-300 text-lg max-w-3xl mx-auto">
              Continuous improvement through clear feedback and strategic iteration makes the difference between good and great
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* How to Give Feedback to AI */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary glow-primary">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    How to Give Feedback to AI
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    Effective feedback is specific, constructive, and references the actual output you're seeing.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Point to specific elements: "The spacing between cards feels too tight"</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Provide visual references: "Make it more like the Tools section layout"</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Suggest concrete changes: "Increase gap to gap-8 instead of gap-6"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Incremental Improvements */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-accent glow-accent">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Incremental Improvements
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    Build iteratively. Start with core functionality, then layer on polish and refinement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>First pass: Get the structure and content right</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Second pass: Refine styling, spacing, and visual hierarchy</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Third pass: Add animations, hover effects, and micro-interactions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* When to Start Fresh vs Refine */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary glow-primary">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    When to Start Fresh vs. Refine
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    Know when to iterate and when to start over. Sometimes a clean slate is faster than patching.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Refine:</strong> Minor adjustments, styling tweaks, content updates</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Start fresh:</strong> Architecture changes, major layout shifts, wrong approach</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Rule of thumb: If explaining changes takes longer than regenerating, start fresh</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Time Management in Hackathon */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-accent glow-accent">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Time Management in Hackathon
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    Speed matters in time-boxed challenges. Focus on impact and delegate polish to AI.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Build core features first, polish later</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Use AI for repetitive work: styling, boilerplate, documentation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-dark-400">
                      <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span>Don't over-optimize: "Good enough" beats "perfect but incomplete"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Iteration Best Practices */}
          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20">
              <h5 className="text-lg font-bold text-white mb-3">Iteration Best Practices</h5>
              <div className="space-y-2 text-sm text-dark-300 leading-relaxed">
                <p>
                  <strong className="text-white">Make one change at a time:</strong> Test each adjustment before adding more. This makes it easy to identify what works and what doesn't.
                </p>
                <p>
                  <strong className="text-white">Verify after every iteration:</strong> Don't stack unverified changes. Run the app, check the browser, confirm it looks right.
                </p>
                <p>
                  <strong className="text-white">Keep a backlog of polish items:</strong> Note "nice to haves" but don't let them derail progress on core features.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Component Organization */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Component Organization
            </h3>
            <p className="text-dark-300 text-lg max-w-3xl mx-auto">
              How AI agents break down complex UIs into maintainable, reusable components with clear separation of concerns
            </p>
          </div>

          <div className="space-y-6">
            {/* Breaking into Reusable Components */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary glow-primary">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Breaking into Reusable Components
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    AI agents identify repeated patterns and extract them into reusable components, reducing duplication and improving maintainability.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-primary-300 mb-2">What AI Looks For:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-dark-400">
                          <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                          <span>Repeated UI patterns (cards, buttons, modals)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-dark-400">
                          <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                          <span>Similar logic used in multiple places</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-dark-400">
                          <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                          <span>Complex sections that can be split</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-accent-300 mb-2">Result:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-dark-400">
                          <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                          <span>DRY code with single source of truth</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-dark-400">
                          <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                          <span>Easy to update - change once, affect all uses</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-dark-400">
                          <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                          <span>Testable, composable building blocks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* File Structure Decisions */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-accent glow-accent">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    File Structure Decisions
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    AI follows established project conventions and makes intelligent decisions about where code should live.
                  </p>
                  <div className="bg-dark-900/50 rounded-lg p-4 border border-dark-700 font-mono text-sm mb-4">
                    <div className="text-dark-400">
                      <div className="text-primary-400">src/</div>
                      <div className="ml-4 text-dark-500">components/</div>
                      <div className="ml-8 text-dark-500">common/ <span className="text-dark-600">← Buttons, inputs, shared UI</span></div>
                      <div className="ml-8 text-dark-500">sections/ <span className="text-dark-600">← Page sections (Hero, Features)</span></div>
                      <div className="ml-8 text-dark-500">layout/ <span className="text-dark-600">← Header, Footer, containers</span></div>
                      <div className="ml-4 text-dark-500">hooks/ <span className="text-dark-600">← Custom React hooks</span></div>
                      <div className="ml-4 text-dark-500">utils/ <span className="text-dark-600">← Helper functions</span></div>
                      <div className="ml-4 text-dark-500">types/ <span className="text-dark-600">← TypeScript interfaces</span></div>
                    </div>
                  </div>
                  <p className="text-sm text-dark-400 leading-relaxed">
                    AI learns your project structure during the planning phase and places new files in consistent, predictable locations.
                  </p>
                </div>
              </div>
            </div>

            {/* Separation of Concerns */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary glow-primary">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Separation of Concerns
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    Each component, file, and function has a single responsibility. This makes code easier to understand, test, and modify.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary-300">Components:</div>
                      <p className="text-sm text-dark-400">Focus on rendering UI. Receive props, render output. Minimal logic.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-24 text-sm font-semibold text-accent-300">Hooks:</div>
                      <p className="text-sm text-dark-400">Handle stateful logic, side effects, and data fetching. Reusable across components.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary-300">Utils:</div>
                      <p className="text-sm text-dark-400">Pure functions for data transformation, validation, and formatting. No side effects.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-24 text-sm font-semibold text-accent-300">Types:</div>
                      <p className="text-sm text-dark-400">TypeScript interfaces and types for data structures. Shared across the app.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How AI Handles This */}
            <div className="glass rounded-xl p-6 lg:p-7 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-accent glow-accent">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    How AI Handles This Automatically
                  </h4>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    During the planning phase, AI agents analyze your codebase and make architectural decisions before writing any code.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-primary-500/10 border border-primary-500/20">
                      <p className="text-sm text-primary-200">
                        <strong className="text-primary-100">1. Explore Phase:</strong> AI reads existing components to understand naming conventions, file structure, and coding patterns.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent-500/10 border border-accent-500/20">
                      <p className="text-sm text-accent-200">
                        <strong className="text-accent-100">2. Pattern Matching:</strong> Identifies similar components and decides whether to reuse existing code or create new abstractions.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary-500/10 border border-primary-500/20">
                      <p className="text-sm text-primary-200">
                        <strong className="text-primary-100">3. Architecture Planning:</strong> Designs component hierarchy, determines prop interfaces, and plans file locations before implementation.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent-500/10 border border-accent-500/20">
                      <p className="text-sm text-accent-200">
                        <strong className="text-accent-100">4. Implementation:</strong> Generates code that matches your project's style and integrates seamlessly with existing components.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Callout */}
          <div className="mt-8">
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20">
              <p className="text-center text-dark-300 leading-relaxed">
                <strong className="text-white">This Project's Example:</strong> This landing page uses a consistent component structure.
                All sections (Hero, Tools, Strategy, etc.) live in <code className="px-2 py-1 rounded bg-dark-900/50 text-primary-300">src/components/sections/</code>,
                shared UI in <code className="px-2 py-1 rounded bg-dark-900/50 text-accent-300">src/components/common/</code>,
                and layout components in <code className="px-2 py-1 rounded bg-dark-900/50 text-primary-300">src/components/layout/</code>.
                AI maintained this structure across all 60+ tasks without being explicitly reminded.
              </p>
            </div>
          </div>
        </div>

        {/* Key Principles Callout */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="glass rounded-xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Key Success Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Clarity First',
                  description: 'Specific requirements yield better results than vague requests'
                },
                {
                  title: 'Verify Everything',
                  description: 'Never assume - test each feature in real browser conditions'
                },
                {
                  title: 'Iterate Rapidly',
                  description: 'Fast feedback loops enable quick improvements and refinements'
                }
              ].map((principle, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-accent glow-accent mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-dark-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
