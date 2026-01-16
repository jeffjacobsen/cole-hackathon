// Tech stack icon components
// Using simplified SVG representations of official logos

export function ReactIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
    </svg>
  )
}

export function ViteIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5 3L13 21L10.5 14L4 12L20.5 3Z" fill="url(#vite-gradient)" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <defs>
        <linearGradient id="vite-gradient" x1="4" y1="3" x2="20.5" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function TypeScriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#3178C6" />
      <path d="M13 10V18M13 10H10M13 10H16M16 14.5C16 15.3284 16.6716 16 17.5 16C18.3284 16 19 15.3284 19 14.5C19 13.6716 18.3284 13 17.5 13H16.5C15.6716 13 15 13.6716 15 14.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TailwindIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8 9.22 7.47 10.67 8.4C11.42 8.87 11.95 9.4 12.58 10.03C13.77 11.22 15.17 12.67 18 12.67C20.67 12.67 22.33 11.33 23 8.67C22 10.67 20.78 11.2 19.33 10.27C18.58 9.8 18.05 9.27 17.42 8.64C16.23 7.45 14.83 6 12 6ZM7 12.67C4.33 12.67 2.67 14 2 16.67C3 14.67 4.22 14.13 5.67 15.07C6.42 15.53 6.95 16.07 7.58 16.7C8.77 17.88 10.17 19.33 13 19.33C15.67 19.33 17.33 18 18 15.33C17 17.33 15.78 17.87 14.33 16.93C13.58 16.47 13.05 15.93 12.42 15.3C11.23 14.12 9.83 12.67 7 12.67Z" fill="currentColor" />
    </svg>
  )
}

export function ClaudeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 14C8 14 9 16 12 16C15 16 16 14 16 14M9 9H9.01M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function GitHubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.865 20.17 8.839 21.49C9.339 21.58 9.521 21.27 9.521 21C9.521 20.77 9.511 19.99 9.511 19.15C7 19.63 6.35 18.53 6.15 17.95C6.037 17.65 5.55 16.75 5.125 16.52C4.775 16.34 4.275 15.86 5.115 15.85C5.9 15.84 6.463 16.59 6.65 16.9C7.55 18.39 8.988 17.96 9.562 17.69C9.65 17.04 9.913 16.6 10.2 16.34C7.975 16.08 5.65 15.21 5.65 11.37C5.65 10.3 6.037 9.42 6.675 8.74C6.575 8.48 6.225 7.46 6.775 6.11C6.775 6.11 7.612 5.84 9.525 7.12C10.325 6.89 11.175 6.77 12.025 6.77C12.875 6.77 13.725 6.89 14.525 7.12C16.438 5.83 17.275 6.11 17.275 6.11C17.825 7.46 17.475 8.48 17.375 8.74C18.013 9.42 18.4 10.29 18.4 11.37C18.4 15.22 16.063 16.08 13.838 16.34C14.2 16.66 14.513 17.27 14.513 18.21C14.513 19.56 14.5 20.65 14.5 21C14.5 21.27 14.688 21.59 15.188 21.49C19.138 20.16 22 16.41 22 12C22 6.477 17.523 2 12 2Z" />
    </svg>
  )
}

export function PlaywrightIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="url(#playwright-gradient)" />
      <path d="M8 8L16 12L8 16V8Z" fill="white" />
      <defs>
        <linearGradient id="playwright-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2D5B88" />
          <stop offset="100%" stopColor="#E74C3C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function AISparkleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" />
      <path d="M19 14L19.75 16.75L22.5 17.5L19.75 18.25L19 21L18.25 18.25L15.5 17.5L18.25 16.75L19 14Z" fill="currentColor" opacity="0.7" />
      <path d="M5 3L5.5 4.5L7 5L5.5 5.5L5 7L4.5 5.5L3 5L4.5 4.5L5 3Z" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

export function BrainCircuitIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10C8 9.44772 8.44772 9 9 9H10C10.5523 9 11 9.44772 11 10V14C11 14.5523 10.5523 15 10 15H9C8.44772 15 8 14.5523 8 14V10Z" fill="currentColor" />
      <path d="M13 10C13 9.44772 13.4477 9 14 9H15C15.5523 9 16 9.44772 16 10V14C16 14.5523 15.5523 15 15 15H14C13.4477 15 13 14.5523 13 14V10Z" fill="currentColor" />
      <path d="M7 12H11M13 12H17M12 6V9M12 15V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Tech badge component with icon
interface TechBadgeProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  className?: string
}

export function TechBadge({ icon: Icon, label, className = "" }: TechBadgeProps) {
  return (
    <span className={`px-4 py-2 rounded-full glass text-sm font-medium transition-all duration-300 hover:scale-110 hover:glow-primary hover:bg-white/10 cursor-default inline-flex items-center gap-2 ${className}`}>
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </span>
  )
}
