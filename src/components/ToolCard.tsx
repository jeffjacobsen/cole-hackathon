import { type LucideIcon } from 'lucide-react'

interface ToolCardProps {
  icon: LucideIcon
  title: string
  description: string
  capabilities?: string[]
  gradient?: 'primary' | 'accent'
}

export default function ToolCard({
  icon: Icon,
  title,
  description,
  capabilities,
  gradient = 'primary'
}: ToolCardProps) {
  return (
    <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 hover:scale-105 group">
      {/* Icon */}
      <div className={`inline-flex p-3 rounded-lg mb-4 ${
        gradient === 'primary'
          ? 'bg-gradient-primary glow-primary'
          : 'bg-gradient-accent glow-accent'
      } group-hover:glow-primary-strong transition-all duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-dark-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Capabilities list */}
      {capabilities && capabilities.length > 0 && (
        <ul className="space-y-2">
          {capabilities.map((capability, index) => (
            <li
              key={index}
              className="text-sm text-dark-400 flex items-start gap-2"
            >
              <span className="text-primary-400 mt-0.5">•</span>
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
