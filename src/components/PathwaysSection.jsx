import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const pathways = [
  {
    id: 'luca',
    label: 'FOR INDIVIDUALS',
    title: 'LUCA The Leader',
    subtitle: 'Where Leadership Awareness Begins',
    tag: 'OPEN TO ALL',
    featured: true,
    href: '#luca',
  },
  {
    id: 'consulting',
    label: 'FOR ORGANIZATIONS',
    title: 'MARTINICH CONSULTING',
    subtitle: 'Strategy That Transforms',
    featured: false,
    href: '#consulting',
  },
  {
    id: 'institute',
    label: 'FOR INDIVIDUALS & TEAMS',
    title: 'MARTINICH INSTITUTE',
    subtitle: 'Leadership That Transforms',
    featured: false,
    href: '#institute-path',
  },
  {
    id: 'rnd',
    label: 'FOR RESEARCH & INNOVATION',
    title: 'MARTINICH R&D',
    subtitle: 'Innovation Meets Insight',
    featured: false,
    href: '#rnd',
  },
]

export default function PathwaysSection() {
  return (
    <section id="enterprises" className="bg-cta-gradient py-20 px-6 md:py-32 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xs tracking-widest text-teal-light uppercase mb-4">
            · BUILT ON SOLID GROUND
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[56px] text-white leading-tight">
            One Vision.
            <br />
            Four Pathways to Impact.
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            The Institute of Trusted Leadership operates through an integrated
            ecosystem of specialized divisions, each designed to address
            different aspects of leadership development and organizational
            transformation.
          </p>
        </motion.div>

        {/* Pathway cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {pathways.map((pathway) => (
            <motion.a
              key={pathway.id}
              href={pathway.href}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer flex flex-col ${
                pathway.featured
                  ? 'md:col-span-2 md:row-span-2 min-h-[400px]'
                  : 'min-h-[220px]'
              }`}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 ${
                  pathway.featured
                    ? 'bg-gradient-to-br from-teal-brand/30 to-navy-800'
                    : 'bg-navy-800'
                } group-hover:bg-navy-700/80 transition-colors`}
              />

              {/* Arrow icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-teal-light transition-colors">
                <ArrowUpRight className="text-white/60 group-hover:text-teal-light w-4 h-4 transition-colors" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end flex-1">
                {pathway.featured && (
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <div className="w-32 h-32 rounded-2xl bg-teal-brand/20 border border-teal-brand/30 flex items-center justify-center">
                      <span className="text-teal-light font-display text-3xl">L</span>
                    </div>
                  </div>
                )}

                <p className="text-[10px] tracking-widest text-teal-light uppercase mb-2">
                  {pathway.label}
                </p>
                <h3 className="font-display text-white text-lg md:text-xl mb-1">
                  {pathway.title}
                </h3>
                <p className="text-white/50 text-sm">{pathway.subtitle}</p>

                {pathway.tag && (
                  <span className="mt-3 inline-block text-[10px] tracking-widest text-teal-glow uppercase bg-teal-brand/20 border border-teal-brand/30 rounded-full px-3 py-1 w-fit">
                    {pathway.tag}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
