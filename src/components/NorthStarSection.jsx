import { motion } from 'framer-motion'
import { Navigation, Eye, Target, Heart } from 'lucide-react'

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function NorthStarSection() {
  return (
    <section id="institute" className="bg-navy-900 py-16 px-6 md:py-24 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Circular graphic */}
        <motion.div
          className="flex items-center justify-center"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-white/10" />

            {/* Inner dark circle */}
            <div className="absolute inset-8 rounded-full bg-navy-800 border border-white/5 flex items-center justify-center">
              <Navigation className="text-white w-8 h-8" />
            </div>

            {/* Dashed connector lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 350 350">
              <line x1="175" y1="175" x2="175" y2="25" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
              <line x1="175" y1="175" x2="55" y2="290" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
              <line x1="175" y1="175" x2="295" y2="290" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
            </svg>

            {/* Top icon — Eye */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-teal-brand flex items-center justify-center">
              <Eye className="text-white w-6 h-6" />
            </div>

            {/* Bottom-left icon — Target */}
            <div className="absolute bottom-2 left-4 w-14 h-14 rounded-full bg-navy-800 border border-teal-brand flex items-center justify-center">
              <Target className="text-teal-light w-6 h-6" />
            </div>

            {/* Bottom-right icon — Heart */}
            <div className="absolute bottom-2 right-4 w-14 h-14 rounded-full bg-navy-800 border border-teal-brand flex items-center justify-center">
              <Heart className="text-teal-light w-6 h-6" />
            </div>
          </div>
        </motion.div>

        {/* Right — Text content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xs tracking-widest text-teal-light uppercase mb-3">
            · WHAT DRIVES US
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Our North Star
          </h2>
          <p className="italic-serif text-teal-light text-lg mb-4">Vision</p>
          <p className="text-white/60 text-base leading-relaxed max-w-lg">
            A world in which organizations are led by trust and committed to the
            continuous development of people and purpose.
          </p>

          {/* Progress indicator */}
          <div className="flex gap-2 mt-8">
            <div className="w-8 h-1 rounded-full bg-teal-brand" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
