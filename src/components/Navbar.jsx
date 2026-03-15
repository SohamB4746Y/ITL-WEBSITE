/**
 * Top navigation bar with desktop links and mobile full-screen menu.
 * Includes scroll-reactive background styling.
 */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'The Institute', href: '#institute' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Enterprises', href: '#enterprises' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact Us', href: '#contact' },
]

/**
 * Renders the primary site navigation.
 * @returns {JSX.Element} Sticky navigation and mobile overlay menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-md bg-navy-950/80 border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">
          <a href="#" className="flex flex-col">
            <span className="text-white font-body font-bold text-xl tracking-wider">
              ITL
            </span>
            <span className="text-white/50 text-[10px] tracking-[0.15em] uppercase">
              Institute for Trusted Leadership
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors relative group/link"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-teal-light scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-navy-950/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl text-white/70 hover:text-white transition-colors font-display"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  )
}
