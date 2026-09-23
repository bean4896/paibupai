'use client'

import { motion } from 'framer-motion'
import { brandReasons } from '@/data/about'
import Reveal, { Container } from '@/components/sections/Reveal'

export default function BrandStory() {
  return (
    <section className="scroll-mt-28 bg-charcoal py-20 text-cream md:py-28" id="story">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
            WHY THE WHOLE FLOW STAYS IN-HOUSE.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/65 md:text-lg">
            Five years in Singapore. 300+ businesses. We do not buy a crew for the day and disappear. A brand that
            treats content as a long-term operation needs a team that is still here next month.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {brandReasons.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-white/8 bg-white/5 p-6 md:p-8"
            >
              <h3 className="font-cabinet-grotesk text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
