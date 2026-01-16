import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  showCopyButton?: boolean
  filename?: string
  className?: string
}

export default function CodeBlock({
  code,
  language: _language = 'javascript',
  showLineNumbers = true,
  showCopyButton = true,
  filename,
  className = ''
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Split code into lines
  const lines = code.trim().split('\n')

  // Simple syntax highlighting based on patterns
  const highlightLine = (line: string): React.ReactNode => {
    // This is a simple highlighting system - doesn't handle all edge cases
    // but provides beautiful coloring for common patterns

    // Comments
    if (line.trim().startsWith('//')) {
      return <span className="text-dark-400 italic">{line}</span>
    }
    if (line.trim().startsWith('/*') || line.trim().startsWith('*')) {
      return <span className="text-dark-400 italic">{line}</span>
    }

    // Split into tokens for more granular highlighting
    const tokens: React.ReactNode[] = []
    let key = 0

    // Keywords
    const keywords = [
      'const', 'let', 'var', 'function', 'async', 'await', 'return', 'if', 'else',
      'for', 'while', 'switch', 'case', 'break', 'continue', 'import', 'export',
      'from', 'default', 'class', 'extends', 'interface', 'type', 'enum', 'new',
      'try', 'catch', 'finally', 'throw', 'typeof', 'instanceof', 'this', 'super',
      'static', 'public', 'private', 'protected', 'readonly', 'as', 'in', 'of'
    ]

    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g')
    const stringRegex = /(['"`])(?:(?=(\\?))\2.)*?\1/g
    const numberRegex = /\b\d+\.?\d*\b/g
    const functionRegex = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g
    const propertyRegex = /\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g

    // Build segments with matches
    const segments: Array<{ text: string; type: string; start: number }> = []

    // Find all matches
    let match: RegExpExecArray | null

    while ((match = stringRegex.exec(line)) !== null) {
      segments.push({ text: match[0], type: 'string', start: match.index })
    }

    while ((match = keywordRegex.exec(line)) !== null) {
      segments.push({ text: match[0], type: 'keyword', start: match.index })
    }

    while ((match = numberRegex.exec(line)) !== null) {
      // Check if this number is inside a string
      const inString = segments.some(
        s => s.type === 'string' && match!.index >= s.start && match!.index < s.start + s.text.length
      )
      if (!inString) {
        segments.push({ text: match[0], type: 'number', start: match.index })
      }
    }

    while ((match = functionRegex.exec(line)) !== null) {
      const funcName = match[1]
      const inString = segments.some(
        s => s.type === 'string' && match!.index >= s.start && match!.index < s.start + s.text.length
      )
      if (!inString) {
        segments.push({ text: funcName, type: 'function', start: match.index })
      }
    }

    while ((match = propertyRegex.exec(line)) !== null) {
      const propName = match[1]
      const inString = segments.some(
        s => s.type === 'string' && match!.index >= s.start && match!.index < s.start + s.text.length
      )
      if (!inString) {
        segments.push({ text: propName, type: 'property', start: match.index + 1 })
      }
    }

    // Sort by position
    segments.sort((a, b) => a.start - b.start)

    // Build the highlighted line
    let lastIndex = 0
    segments.forEach((segment) => {
      // Add text before this segment
      if (segment.start > lastIndex) {
        tokens.push(
          <span key={`text-${key++}`} className="text-dark-100">
            {line.substring(lastIndex, segment.start)}
          </span>
        )
      }

      // Add the highlighted segment
      let colorClass = 'text-dark-100'
      switch (segment.type) {
        case 'keyword':
          colorClass = 'text-purple-400'
          break
        case 'string':
          colorClass = 'text-green-400'
          break
        case 'number':
          colorClass = 'text-orange-400'
          break
        case 'function':
          colorClass = 'text-cyan-400'
          break
        case 'property':
          colorClass = 'text-blue-300'
          break
      }

      tokens.push(
        <span key={`highlight-${key++}`} className={colorClass}>
          {segment.text}
        </span>
      )

      lastIndex = segment.start + segment.text.length
    })

    // Add remaining text
    if (lastIndex < line.length) {
      tokens.push(
        <span key={`text-${key++}`} className="text-dark-100">
          {line.substring(lastIndex)}
        </span>
      )
    }

    return <>{tokens}</>
  }

  return (
    <div className={`code-block overflow-hidden ${className}`}>
      {/* Header with filename and copy button */}
      {(filename || showCopyButton) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-dark-700 bg-dark-900">
          {filename && (
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-dark-300 font-medium">{filename}</span>
            </div>
          )}
          {showCopyButton && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-dark-300 hover:text-primary-400 hover:bg-dark-800 transition-all duration-200"
              aria-label="Copy code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed">
          <code className="block">
            {lines.map((line, index) => (
              <div key={index} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right text-dark-500 select-none w-8">
                    {index + 1}
                  </span>
                )}
                <span className="table-cell">
                  {highlightLine(line)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
