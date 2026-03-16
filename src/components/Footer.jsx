/**
 * Site footer containing brand summary, navigation shortcuts, and social links.
 */
import { Linkedin, Twitter } from 'lucide-react'

const navLinks = [
  { label: 'The Institute', href: '#institute' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Enterprises', href: '#enterprises' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact Us', href: '#contact' },
]

/**
 * Renders the footer contact and navigation area.
 * @returns {JSX.Element} Footer section for the ITL website.
 */
export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-950 border-t border-white/10 py-12 px-6 md:py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left — Logo + tagline */}
        <div>
          <div className="flex flex-col mb-4">
            <span className="text-white font-body font-bold text-xl tracking-wider">
              ITL
            </span>
            <span className="text-white/50 text-[10px] tracking-[0.15em] uppercase">
              Institute for Trusted Leadership
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Building Leaders the World Can Trust
          </p>
        </div>

        {/* Middle — Nav links */}
        <nav>
          <h4 className="text-white/60 text-xs tracking-widest uppercase mb-4">
            Navigation
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/50 text-sm hover:text-teal-light transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — Social + copyright */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-white/60 text-xs tracking-widest uppercase mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-teal-light transition-colors w-9 h-9 rounded-full border border-white/10 hover:border-teal-light/40 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-teal-light transition-colors w-9 h-9 rounded-full border border-white/10 hover:border-teal-light/40 flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          <p className="text-white/30 text-xs mt-8 md:mt-0">
            © 2026 Institute for Trusted Leadership
          </p>
        </div>
      </div>
    </footer>
  )
}
