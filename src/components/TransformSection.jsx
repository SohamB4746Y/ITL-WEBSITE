/**
 * Methodology section describing ITL's transformation framework.
 * Uses staggered cards for research, training, and implementation streams.
 */
import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const cards = [
  {
    title: 'Research & Insights',
    items: [
      'Evidence-based leadership models',
      'Continuous innovation',
      'Data-driven understanding',
    ],
  },
  {
    title: 'Training & Development',
    items: [
      'Practical skill-building',
      'Certification programs',
      'Organizational transformation',
    ],
  },
  {
    title: 'Consulting & Implementation',
    items: [
      'Strategic partnership',
      'Custom solutions',
      'Measurable impact',
    ],
  },
]

/**
 * Renders the transformation methodology cards.
 * @returns {JSX.Element} Section describing how leadership transformation is delivered.
 */
export default function TransformSection() {
  return (
    <section className="bg-navy-900 py-20 px-6 md:py-32 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-widest text-teal-light uppercase mb-3">
              · OUR METHODOLOGY
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
              How We Transform Leadership
            </h2>
          </motion.div>

          <motion.p
            className="text-white/60 text-base leading-relaxed flex items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Trusted leadership isn&apos;t built on theory alone. Our integrated
            approach combines rigorous research, practical training to create
            lasting organizational change.
          </motion.p>
        </div>

        {/* Cascading cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`relative bg-navy-800 border border-white/10 rounded-2xl p-8 overflow-hidden ${
                i === 1 ? 'md:mt-10' : i === 2 ? 'md:mt-20' : ''
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-brand/70 to-transparent" />
              <h3 className="font-display text-white text-[22px] mb-6">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="text-white/50 text-sm flex items-start gap-2"
                  >
                    <span className="text-teal-light mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
