import { Github, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-dark-800 bg-dark-950/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - About */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gradient mb-3">Built by AI</h3>
            <p className="text-sm text-dark-400 leading-relaxed">
              A meta landing page demonstrating AI-powered frontend development with Claude Code.
            </p>
          </div>

          {/* Center Column - Attribution */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-lg text-white text-sm font-medium mb-3">
              <Heart className="w-4 h-4" />
              <span>Built with AI</span>
            </div>
            <p className="text-xs text-dark-400">
              Created for the Mini Hackathon Challenge
            </p>
          </div>

          {/* Right Column - Links */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold text-dark-300 mb-3">Resources</h3>
            <div className="flex flex-col gap-2 items-center md:items-end">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-primary-400 transition-colors focus-ring rounded px-2 py-1"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-dark-400 hover:text-primary-400 transition-colors focus-ring rounded px-2 py-1"
              >
                Claude AI
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="pt-8 border-t border-dark-800 text-center">
          <p className="text-xs text-dark-500">
            © {currentYear} Built by AI. Powered by Claude Sonnet 4.5 & YokeFlow.
          </p>
        </div>
      </div>
    </footer>
  )
}
