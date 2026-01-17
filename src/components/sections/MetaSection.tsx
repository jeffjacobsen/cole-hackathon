import { Rocket, Zap, CheckCircle, GitBranch, Layers, Clock, Github, FileText } from 'lucide-react'

export default function MetaSection() {
  return (
    <section
      id="meta"
      className="section-padding bg-dark-900/60 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">The Meta Reveal</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto">
            This landing page was built using <a href="https://github.com/jeffjacobsen/yokeflow2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gradient transition-colors underline decoration-primary-500/50 hover:decoration-primary-500"><strong>YokeFlow</strong></a>, an autonomous AI development platform that orchestrates Claude to build complete applications
          </p>
        </div>

        {/* Hero Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass rounded-2xl p-8 lg:p-12 text-center border-2 border-primary-500/30 glow-primary">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary glow-primary mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              From Spec to Production—Fully Autonomous
            </h3>
            <p className="text-lg text-dark-300 leading-relaxed mb-6">
              I provided <a href="/hackathon.md" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-200 underline decoration-primary-500/30 hover:decoration-primary-500 transition-colors">Cole's hackathon challenge README</a> to YokeFlow and let it handle the rest. The system autonomously planned 14 epics, broke them into 62 tasks, and implemented everything—complete with browser-based verification for every feature.
            </p>
            <p className="text-base text-dark-400 leading-relaxed mb-6">
              YokeFlow completed all 14 epics and 62 tasks autonomously. Every component, animation, and section you see was generated, styled, and verified by AI agents working across multiple sessions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/jeffjacobsen/cole-hackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:glow-primary transition-all duration-300 focus-ring"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href="/hackathon.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-lg font-medium hover:glass-strong transition-all duration-300 focus-ring"
              >
                <FileText className="w-5 h-5" />
                View Original Spec
              </a>
            </div>
          </div>
        </div>

        {/* How YokeFlow Works */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">
            How YokeFlow Built This
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Session 0: Planning */}
            <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary glow-primary">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Session 0: Planning
                  </h4>
                  <p className="text-dark-300 text-sm mb-3 leading-relaxed">
                    Opus 4 analyzed the hackathon spec and created a complete roadmap with 14 epics and 62 tasks.
                  </p>
                  <div className="text-xs text-dark-400 space-y-1">
                    <div>• Read requirements from README</div>
                    <div>• Designed complete architecture</div>
                    <div>• Created detailed task breakdown</div>
                    <div>• Generated verification test cases</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sessions 1-10+: Autonomous Coding */}
            <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-accent glow-accent">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Sessions 1-10+: Autonomous Implementation
                  </h4>
                  <p className="text-dark-300 text-sm mb-3 leading-relaxed">
                    Sonnet 4.5 implemented all 62 tasks across multiple sessions, building every component, animation, and interaction.
                  </p>
                  <div className="text-xs text-dark-400 space-y-1">
                    <div>• All 5 main sections (Hero, Tools, Design, Strategy, Meta)</div>
                    <div>• Navigation & Footer components</div>
                    <div>• 10+ reusable UI components</div>
                    <div>• Animations, transitions & interactions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Browser Verification */}
            <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary glow-primary">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    Verification
                  </h4>
                  <p className="text-dark-300 text-sm mb-3 leading-relaxed">
                    Every feature was tested in a real browser using Playwright MCP before being marked complete.
                  </p>
                  <div className="text-xs text-dark-400 space-y-1">
                    <div>• Automated browser testing</div>
                    <div>• Console error detection</div>
                    <div>• Visual screenshots</div>
                    <div>• Interaction validation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-center text-dark-400 text-sm mt-4">
              <strong className="text-white">Real-time progress tracking:</strong> 6 epics completed, 31 tasks implemented, all with passing browser tests
            </p>
          </div>
        </div>

        {/* What Makes YokeFlow Different */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">
            What Makes YokeFlow Different
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary glow-primary">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">True Multi-Session Autonomy</h4>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    Unlike single-conversation AI tools, YokeFlow orchestrates multiple Claude sessions. Each session picks up where the last left off, working through the task list independently. You can walk away and return to a more complete application.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-accent glow-accent">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">Mandatory Browser Verification</h4>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    Every task requires browser-based verification before completion. No assumptions—the agent must prove the feature works by testing it in a real browser with Playwright MCP. Failed tests block progress until fixed.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary glow-primary">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">Structured Task Management</h4>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    Uses PostgreSQL and a custom MCP server to track epics, tasks, and tests. The system knows exactly what's done, what's in progress, and what's next. Full visibility from day one.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-accent glow-accent">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">Greenfield Focused</h4>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    Designed for building new applications from scratch, not modifying existing codebases. Give it a spec, and it builds the entire project—setup, implementation, styling, and verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Callout */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-xl p-8 lg:p-10 border-2 border-accent-500/30">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              By The Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">14</div>
                <div className="text-sm text-dark-400">Epics Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">62</div>
                <div className="text-sm text-dark-400">Tasks Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">19</div>
                <div className="text-sm text-dark-400">Components Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-dark-400">Autonomous</div>
              </div>
            </div>
            <p className="text-center text-dark-400 text-sm mt-6 leading-relaxed">
              From a single README file to production-ready app. Fully autonomous—no manual coding required.
            </p>
          </div>
        </div>

        {/* Final Callout */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="p-6 rounded-xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-center">
            <p className="text-dark-300 leading-relaxed">
              <strong className="text-white">The Irony:</strong> This is a landing page about building with AI,
              built by AI, explaining how it was built by AI. The process is the product, and the product
              demonstrates the process. Meta all the way down.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
