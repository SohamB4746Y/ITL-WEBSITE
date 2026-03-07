/**
 * Founder spotlight section introducing leadership background and profile CTA.
 */
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

/**
 * Renders founder biography and external profile link.
 * @returns {JSX.Element} Founder section with descriptive text and call-to-action.
 */
export default function FounderSection() {
  return (
    <section className="bg-section-gradient py-16 px-6 md:py-24 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xs tracking-widest text-teal-light uppercase mb-3">
            · MEET OUR FOUNDER
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[56px] text-white leading-tight mb-8">
            Leslie Martinich
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Leslie Martinich is a leadership expert with 20+ years of experience
            who founded the Institute of Trusted Leadership to address the global
            crisis of trust in organizations.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Through evidence-based, practical approaches, her work develops
            leaders, transforms cultures, and scales trusted leadership
            worldwide.
          </p>
        </motion.div>

        {/* Right — Photo + CTA card */}
        <motion.div
          className="flex flex-col gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Photo placeholder */}
          <div className="w-full aspect-[4/3] bg-navy-700 rounded-lg flex items-center justify-center">
            <span className="text-white/30 text-sm font-body">
              Leslie Martinich Photo
            </span>
          </div>

          {/* Meet Leslie card */}
          <a
            href="https://itrustedleadership.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-teal-brand/20 border border-teal-brand/30 rounded-xl p-6 hover:bg-teal-brand/40 transition-colors cursor-pointer group"
          >
            <span className="italic-serif text-white text-2xl group-hover:text-teal-glow transition-colors">
              Meet Leslie ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
