import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode, ComponentType } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

// Icon type - compatible with Lucide React icons
export type IconComponent = ComponentType<{ size?: number; className?: string }>

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: IconComponent
  iconPosition?: 'left' | 'right'
  children?: ReactNode
  fullWidth?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      children,
      fullWidth = false,
      loading = false,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles - common to all buttons
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus-ring rounded-lg disabled:opacity-50 disabled:cursor-not-allowed'

    // Variant styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-gradient-primary text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 hover:scale-[1.02] active:scale-[0.98] hover:brightness-110',
      secondary:
        'bg-gradient-accent text-white shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/50 hover:scale-[1.02] active:scale-[0.98] hover:brightness-110',
      ghost:
        'bg-transparent text-primary-400 hover:bg-primary-500/10 hover:text-primary-300 active:bg-primary-500/20 hover:scale-[1.01]',
      outline:
        'bg-transparent text-primary-400 border-2 border-primary-500/50 hover:border-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary-500/20'
    }

    // Size styles - ensuring minimum 44px touch target on mobile
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3 py-2 text-sm gap-1.5 min-h-[44px]',
      md: 'px-5 py-2.5 text-base gap-2 min-h-[44px]',
      lg: 'px-7 py-3.5 text-lg gap-2.5 min-h-[48px]'
    }

    // Icon size based on button size
    const iconSizes: Record<ButtonSize, number> = {
      sm: 16,
      md: 20,
      lg: 24
    }

    // Width style
    const widthStyle = fullWidth ? 'w-full' : ''

    // Combine all styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`

    // Loading spinner component
    const LoadingSpinner = () => (
      <svg
        className="animate-spin"
        width={iconSizes[size]}
        height={iconSizes[size]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )

    return (
      <button
        ref={ref}
        className={combinedStyles}
        disabled={disabled || loading}
        {...props}
      >
        {/* Left icon or loading spinner */}
        {loading && <LoadingSpinner />}
        {!loading && Icon && iconPosition === 'left' && (
          <Icon size={iconSizes[size]} />
        )}

        {/* Button text */}
        {children && <span>{children}</span>}

        {/* Right icon */}
        {!loading && Icon && iconPosition === 'right' && (
          <Icon size={iconSizes[size]} />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
