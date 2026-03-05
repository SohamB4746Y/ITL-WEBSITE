import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const pillars = [
  {
    num: '1',
    label: 'ITL APPROACH',
    text: 'A rigorous, evidence-based methodology that turns trust into a measurable, scalable leadership competency across every level of your organization.',
  },
  {
    num: '2',
    label: 'OUR ECOSYSTEM',
    text: 'An integrated network of research, training, and consulting divisions working together to deliver comprehensive leadership transformation.',
  },
  {
    num: '3',
    label: 'GLOBAL IMPACT',
    text: 'Scaling trusted leadership worldwide through partnerships, certifications, and a growing community of purpose-driven leaders and organizations.',
  },
]

export default function WhyWeExistSection() {
  return (
    <section id="approach" className="bg-navy-950 py-20 px-6 md:py-32 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xs tracking-widest text-teal-light uppercase mb-4">
            · THE SOLUTION
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white">
            <span className="italic-serif">This is </span>
            <span className="font-bold">Why We Exist</span>
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Trust transforms everything: engagement, innovation, performance, &amp;
            culture. The Institute of Trusted Leadership scales this impact
            through research-backed methods, turning trusted leadership into the
            global standard.
          </p>
        </motion.div>

        {/* Three pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-dashed border-white/20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              variants={fadeUp}
              className={`pt-10 pb-10 md:pb-0 ${
                i < pillars.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-dashed border-white/20'
                  : ''
              } px-4 md:px-8`}
            >
              <span className="font-display text-7xl md:text-8xl text-white/10 block leading-none">
                {pillar.num}
              </span>
              <p className="text-sm tracking-widest text-white uppercase mt-4 mb-3 font-medium">
                {pillar.label}
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
