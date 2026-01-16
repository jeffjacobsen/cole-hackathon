import type { HTMLAttributes, ReactNode, ComponentType } from 'react'

export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral'
export type BadgeSize = 'sm' | 'md' | 'lg'

// Icon type - compatible with Lucide React icons
export type IconComponent = ComponentType<{ size?: number; className?: string }>

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: IconComponent
  iconPosition?: 'left' | 'right'
  children?: ReactNode
  dot?: boolean
}

export default function Badge({
  variant = 'neutral',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  children,
  dot = false,
  className = '',
  ...props
}: BadgeProps) {
  // Base styles
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-all duration-200 ease-out'

  // Variant styles with subtle backgrounds
  const variantStyles: Record<BadgeVariant, string> = {
    primary: 'bg-primary-500/10 text-primary-400 border border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/40 hover:scale-105',
    secondary: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 hover:border-indigo-500/40 hover:scale-105',
    accent: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 hover:scale-105',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:scale-105',
    warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/40 hover:scale-105',
    error: 'bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 hover:border-rose-500/40 hover:scale-105',
    neutral: 'bg-slate-500/10 text-slate-400 border border-slate-500/20 hover:bg-slate-500/20 hover:border-slate-500/40 hover:scale-105'
  }

  // Size styles
  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-sm gap-1.5',
    lg: 'px-3 py-1.5 text-base gap-2'
  }

  // Icon sizes
  const iconSizes: Record<BadgeSize, number> = {
    sm: 12,
    md: 14,
    lg: 16
  }

  // Dot sizes (for status indicators)
  const dotSizes: Record<BadgeSize, string> = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5'
  }

  // Dot colors matching variants
  const dotColors: Record<BadgeVariant, string> = {
    primary: 'bg-primary-500',
    secondary: 'bg-indigo-500',
    accent: 'bg-cyan-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-rose-500',
    neutral: 'bg-slate-500'
  }

  // Combine styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <span className={combinedStyles} {...props}>
      {/* Status dot (left side) */}
      {dot && (
        <span className={`${dotSizes[size]} ${dotColors[variant]} rounded-full`} />
      )}

      {/* Left icon */}
      {Icon && iconPosition === 'left' && !dot && (
        <Icon size={iconSizes[size]} />
      )}

      {/* Badge content */}
      {children && <span>{children}</span>}

      {/* Right icon */}
      {Icon && iconPosition === 'right' && (
        <Icon size={iconSizes[size]} />
      )}
    </span>
  )
}
