import type { HTMLAttributes, ReactNode } from 'react'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize
  padding?: boolean
  children?: ReactNode
}

export default function Container({
  size = 'xl',
  padding = true,
  children,
  className = '',
  ...props
}: ContainerProps) {
  // Base styles - always centered
  const baseStyles = 'mx-auto w-full'

  // Max-width constraints based on size
  const sizeStyles: Record<ContainerSize, string> = {
    sm: 'max-w-2xl',      // 672px - narrow content like blog posts
    md: 'max-w-4xl',      // 896px - medium content
    lg: 'max-w-6xl',      // 1152px - large content
    xl: 'max-w-7xl',      // 1280px - extra large (default)
    full: 'max-w-full'    // no constraint - full width
  }

  // Responsive padding (matches the container-custom utility class)
  const paddingStyles = padding
    ? 'px-4 sm:px-6 lg:px-8'
    : ''

  // Combine styles
  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${paddingStyles} ${className}`

  return (
    <div className={combinedStyles} {...props}>
      {children}
    </div>
  )
}
