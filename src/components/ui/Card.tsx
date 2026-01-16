import type { HTMLAttributes, ReactNode } from 'react'

export type CardVariant = 'default' | 'glass' | 'elevated'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
  hover?: boolean
  children?: ReactNode
  header?: ReactNode
  footer?: ReactNode
}

export default function Card({
  variant = 'default',
  padding = 'md',
  hover = false,
  children,
  header,
  footer,
  className = '',
  ...props
}: CardProps) {
  // Base styles
  const baseStyles = 'rounded-xl transition-all duration-300 ease-out'

  // Variant styles
  const variantStyles: Record<CardVariant, string> = {
    default:
      'bg-dark-800 border border-dark-700',
    glass:
      'glass',
    elevated:
      'bg-dark-800 border border-dark-700 shadow-xl-colored'
  }

  // Padding styles
  const paddingStyles: Record<CardPadding, string> = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  // Hover styles
  const hoverStyles = hover
    ? 'hover:glass-strong hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 cursor-pointer hover:border-primary-500/30'
    : ''

  // Combine styles
  const cardStyles = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`

  // Content padding (only if no header/footer, otherwise padding is per section)
  const contentPadding = !header && !footer ? paddingStyles[padding] : ''

  return (
    <div className={cardStyles} {...props}>
      {/* Header Section */}
      {header && (
        <div className={`${paddingStyles[padding]} border-b border-dark-700`}>
          {header}
        </div>
      )}

      {/* Content Section */}
      <div className={`${header || footer ? paddingStyles[padding] : contentPadding}`}>
        {children}
      </div>

      {/* Footer Section */}
      {footer && (
        <div className={`${paddingStyles[padding]} border-t border-dark-700`}>
          {footer}
        </div>
      )}
    </div>
  )
}
