import { Bot, Sparkles, Code2, Globe, CheckCircle2, Folder, Zap, Palette } from 'lucide-react'
import ToolCard from '../ToolCard'

const aiTools = [
  {
    icon: Bot,
    title: 'Claude Code',
    description: 'Primary AI coding agent built on Claude Sonnet 4.5, designed for full-stack development with advanced reasoning.',
    capabilities: [
      'Autonomous multi-file code generation',
      'Context-aware implementation',
      'Real-time debugging and fixes',
      'Architectural decision making'
    ],
    gradient: 'primary' as const
  },
  {
    icon: Sparkles,
    title: 'AI-First Workflow',
    description: 'Complete development process powered by AI agents, from planning to implementation to verification.',
    capabilities: [
      'Natural language requirements',
      'Automated task breakdown',
      'Parallel task execution',
      'Built-in quality checks'
    ],
    gradient: 'accent' as const
  },
  {
    icon: Code2,
    title: 'Smart Generation',
    description: 'Intelligent code generation that follows best practices and maintains consistency across the codebase.',
    capabilities: [
      'TypeScript-first approach',
      'Component architecture',
      'Accessibility standards',
      'Performance optimization'
    ],
    gradient: 'primary' as const
  },
  {
    icon: Globe,
    title: 'Playwright MCP',
    description: 'Browser automation integration via Model Context Protocol for comprehensive UI testing and verification.',
    capabilities: [
      'Automated browser interactions',
      'Visual regression testing',
      'Console error detection',
      'Real user workflow validation'
    ],
    gradient: 'accent' as const
  },
  {
    icon: CheckCircle2,
    title: 'Task Manager MCP',
    description: 'Structured project planning and task tracking system that organizes development into epics and verifiable tasks.',
    capabilities: [
      'Epic and task management',
      'Progress tracking',
      'Automated verification',
      'Quality gate enforcement'
    ],
    gradient: 'primary' as const
  },
  {
    icon: Folder,
    title: 'File System Access',
    description: 'Direct codebase manipulation with intelligent read/write/edit operations across the entire project structure.',
    capabilities: [
      'Multi-file editing',
      'Pattern-based search',
      'Safe file operations',
      'Context-aware modifications'
    ],
    gradient: 'accent' as const
  }
]

const devStack = [
  {
    icon: Zap,
    title: 'Vite + React',
    description: 'Lightning-fast development with instant HMR and optimized builds. React provides the component architecture AI agents excel at generating.',
    capabilities: [
      'Sub-second hot module reload',
      'Component-based architecture',
      'Rich ecosystem and tooling',
      'Ideal for AI code generation'
    ],
    gradient: 'primary' as const
  },
  {
    icon: Code2,
    title: 'TypeScript',
    description: 'Type safety that enables confident refactoring and catches errors before runtime. Perfect for AI-generated code validation.',
    capabilities: [
      'Compile-time error detection',
      'IntelliSense and autocomplete',
      'Self-documenting code',
      'Safer AI-generated output'
    ],
    gradient: 'accent' as const
  },
  {
    icon: Palette,
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework that AI agents can compose naturally. Enables rapid styling without context switching.',
    capabilities: [
      'AI-friendly utility classes',
      'Consistent design system',
      'No custom CSS needed',
      'Fast iteration cycles'
    ],
    gradient: 'primary' as const
  }
]

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="section-padding bg-dark-900/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orb - left side */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        {/* Gradient orb - right side */}
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            <span className="text-gradient">The Tools</span>
          </h2>
          <p className="text-base sm:text-lg text-dark-300 max-w-2xl mx-auto px-4">
            Modern AI-powered development stack that enables rapid, high-quality frontend creation
          </p>
        </div>

        {/* AI Tools Subsection */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center px-4">
            <span className="text-white">AI Agents & Integrations</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {aiTools.map((tool, index) => (
              <ToolCard
                key={index}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                capabilities={tool.capabilities}
                gradient={tool.gradient}
              />
            ))}
          </div>
        </div>

        {/* Development Stack Subsection */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center px-4">
            <span className="text-white">Development Stack</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {devStack.map((tool, index) => (
              <ToolCard
                key={index}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                capabilities={tool.capabilities}
                gradient={tool.gradient}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
