/**
 * Hero banner section for the ITL website landing page.
 * Contains primary brand message, supporting copy, and a discovery CTA.
 */
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

/**
 * Renders the animated hero content block.
 * @returns {JSX.Element} Hero section with headline and animated accents.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden">
      {/* Animated pulse ring */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-teal-brand/20 animate-pulse-ring pointer-events-none" />
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-teal-brand/10 animate-pulse-ring pointer-events-none [animation-delay:1s]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-5 gap-12 pt-24">
        <motion.div
          className="lg:col-span-3 flex flex-col justify-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.3em] text-teal-light uppercase mb-4"
          >
            · BUILT ON SOLID GROUND
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1]"
          >
            Building Leaders –
            <br />
            <span className="italic-serif text-3xl md:text-4xl lg:text-6xl">
              the
            </span>{' '}
            <span className="bg-gradient-to-r from-teal-glow to-teal-light bg-clip-text text-transparent">
              World Can Trust.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/60 text-base max-w-md mt-6 leading-relaxed"
          >
            Where purpose meets people. Where organizations transform through
            trusted leadership, continuous learning, &amp; human responsibility.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#institute"
            className="flex items-center gap-2 text-teal-light text-sm mt-12 group"
          >
            Scroll to Discover
            <ChevronDown
              size={16}
              className="animate-bounce group-hover:translate-y-1 transition-transform"
            />
          </motion.a>
        </motion.div>

        <div className="hidden lg:block lg:col-span-2" />
      </div>
    </section>
  )
}
