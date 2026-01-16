import { X, Check } from 'lucide-react'

interface PromptExampleProps {
  title: string
  before: string
  after: string
  explanation: string
}

export default function PromptExample({
  title,
  before,
  after,
  explanation
}: PromptExampleProps) {
  return (
    <div className="space-y-4">
      {/* Title */}
      <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>

      {/* Before/After Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Before - Poor Prompt */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 rounded bg-red-500/20 transition-all duration-200">
              <X className="w-4 h-4 text-red-400" />
            </div>
            <span className="text-sm font-medium text-red-400">Weak Prompt</span>
          </div>
          <div className="code-block p-4 transition-all duration-300 ease-out hover:border-red-500/30 hover:bg-red-500/5">
            <p className="text-sm text-dark-300">{before}</p>
          </div>
        </div>

        {/* After - Good Prompt */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 rounded bg-green-500/20 transition-all duration-200">
              <Check className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-sm font-medium text-green-400">Strong Prompt</span>
          </div>
          <div className="code-block p-4 border-l-2 border-primary-500 transition-all duration-300 ease-out hover:border-primary-400 hover:bg-primary-500/5 hover:shadow-lg hover:shadow-primary-500/10">
            <p className="text-sm text-primary-300">{after}</p>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="glass rounded-lg p-4 transition-all duration-300 ease-out hover:glass-strong hover:scale-[1.01]">
        <p className="text-sm text-dark-300">
          <span className="font-semibold text-accent-400">Why it works:</span> {explanation}
        </p>
      </div>
    </div>
  )
}
