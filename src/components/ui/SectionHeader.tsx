import type { HTMLAttributes, ReactNode } from 'react'

export type SectionHeaderAlign = 'left' | 'center'
export type SectionHeaderSize = 'md' | 'lg' | 'xl'

export interface SectionHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
  subtitle?: ReactNode
  description?: ReactNode
  align?: SectionHeaderAlign
  size?: SectionHeaderSize
  gradient?: boolean
  decorative?: boolean
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  size = 'lg',
  gradient = false,
  decorative = false,
  className = '',
  ...props
}: SectionHeaderProps) {
  // Alignment styles
  const alignStyles: Record<SectionHeaderAlign, string> = {
    left: 'text-left items-start',
    center: 'text-center items-center'
  }

  // Size styles for title
  const titleSizeStyles: Record<SectionHeaderSize, string> = {
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl'
  }

  // Size styles for subtitle
  const subtitleSizeStyles: Record<SectionHeaderSize, string> = {
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl'
  }

  // Size styles for description
  const descriptionSizeStyles: Record<SectionHeaderSize, string> = {
    md: 'text-sm md:text-base',
    lg: 'text-base md:text-lg',
    xl: 'text-lg md:text-xl'
  }

  // Gradient text styles
  const titleGradientStyles = gradient
    ? 'text-gradient-animated'
    : ''

  // Container styles
  const containerStyles = `flex flex-col gap-3 md:gap-4 ${alignStyles[align]} ${className}`

  return (
    <div className={containerStyles} {...props}>
      {/* Decorative top element */}
      {decorative && (
        <div className={`flex gap-2 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <div className="h-1 w-8 bg-gradient-primary rounded-full" />
          <div className="h-1 w-8 bg-gradient-accent rounded-full" />
          <div className="h-1 w-8 bg-gradient-primary rounded-full" />
        </div>
      )}

      {/* Subtitle (appears above title) */}
      {subtitle && (
        <div
          className={`${subtitleSizeStyles[size]} font-medium text-primary-400 tracking-wide uppercase`}
        >
          {subtitle}
        </div>
      )}

      {/* Main Title */}
      <h2
        className={`${titleSizeStyles[size]} font-bold tracking-tight ${titleGradientStyles} ${
          !gradient ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`${descriptionSizeStyles[size]} text-slate-400 max-w-3xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}

      {/* Decorative bottom element */}
      {decorative && (
        <div className={`flex gap-1 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        </div>
      )}
    </div>
  )
}
