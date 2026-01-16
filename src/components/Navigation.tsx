import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navigationLinks = [
  { label: 'Tools', href: '#tools' },
  { label: 'Design', href: '#design' },
  { label: 'Process', href: '#strategy' },
  { label: 'Meta', href: '#meta' }
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show backdrop blur after scrolling down
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      // Get the fixed header height (80px for h-20)
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Close mobile menu after clicking a link
      setIsMobileMenuOpen(false)
    }
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Site Title */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-lg sm:text-xl font-bold text-gradient hover:opacity-80 transition-opacity focus-ring rounded-lg px-2 py-1"
          >
            Built by AI
          </a>

          {/* Desktop Navigation Links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-3 sm:gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm sm:text-base text-dark-300 hover:text-primary-400 transition-colors duration-200 focus-ring rounded-lg px-2 sm:px-3 py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - visible on mobile only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark-300 hover:text-primary-400 transition-colors focus-ring rounded-lg"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - slide in from right */}
      <div
        className={`md:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-dark-950/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-dark-900/95 backdrop-blur-lg border-l border-white/10 shadow-2xl">
          <div className="flex flex-col gap-2 p-6">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg text-dark-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200 focus-ring rounded-lg px-4 py-3"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
