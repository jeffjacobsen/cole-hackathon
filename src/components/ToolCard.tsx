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
    <div className="glass rounded-xl p-5 sm:p-6 hover:glass-strong transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group">
      {/* Icon */}
      <div className={`inline-flex p-3 rounded-lg mb-3 sm:mb-4 ${
        gradient === 'primary'
          ? 'bg-gradient-primary glow-primary'
          : 'bg-gradient-accent glow-accent'
      } group-hover:glow-primary-strong group-hover:scale-110 transition-all duration-300 ease-out`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-dark-300 mb-3 sm:mb-4 leading-relaxed">
        {description}
      </p>

      {/* Capabilities list */}
      {capabilities && capabilities.length > 0 && (
        <ul className="space-y-2">
          {capabilities.map((capability, index) => (
            <li
              key={index}
              className="text-xs sm:text-sm text-dark-400 flex items-start gap-2"
            >
              <span className="text-primary-400 mt-0.5 flex-shrink-0">•</span>
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
