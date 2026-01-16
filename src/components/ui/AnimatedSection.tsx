import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react'

export type AnimationType = 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale'
export type AnimationSpeed = 'slow' | 'normal' | 'fast'

export interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  animation?: AnimationType
  speed?: AnimationSpeed
  delay?: number
  stagger?: boolean
  staggerDelay?: number
  threshold?: number
  triggerOnce?: boolean
  as?: 'section' | 'div' | 'article' | 'aside'
}

export default function AnimatedSection({
  children,
  animation = 'fade',
  speed = 'normal',
  delay = 0,
  stagger = false,
  staggerDelay = 100,
  threshold = 0.1,
  triggerOnce = true,
  as: Component = 'section',
  className = '',
  ...props
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && sectionRef.current) {
            observer.unobserve(sectionRef.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px'
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, triggerOnce])

  // Animation class based on type
  const animationClasses: Record<AnimationType, string> = {
    fade: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
    scale: 'animate-scale-in'
  }

  // Speed class
  const speedClasses: Record<AnimationSpeed, string> = {
    slow: 'animation-slow',
    normal: 'animation-normal',
    fast: 'animation-fast'
  }

  // Combined classes
  const animationClass = isVisible ? animationClasses[animation] : 'opacity-0'
  const speedClass = speedClasses[speed]
  const combinedClasses = `${animationClass} ${speedClass} ${className}`

  // Inline style for delay
  const style = {
    animationDelay: `${delay}ms`,
    ...props.style
  }

  // If stagger is enabled, wrap children and apply staggered delays
  const content = stagger ? (
    <div className="animate-stagger-container">
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className="animate-stagger-item"
              style={{
                animationDelay: `${delay + index * staggerDelay}ms`
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  ) : (
    children
  )

  return (
    <Component
      ref={sectionRef as any}
      className={combinedClasses}
      style={style}
      {...props}
    >
      {content}
    </Component>
  )
}
