'use client'

import { motion } from 'framer-motion'
import { differentiators } from '@/data/homepage'
import Reveal, { Container } from './Reveal'

export default function WhyPaibupai() {
  return (
    <section className="bg-charcoal py-20 text-cream md:py-28">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk text-3xl font-extrabold tracking-tight md:text-5xl">
            WE DON&apos;T CHASE VIEWS.
            <br />
            WE BUILD BUSINESS.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-2xl border border-white/8 bg-white/5 p-5"
            >
              <p className="font-cabinet-grotesk text-xs tracking-[0.16em] text-accent">{item.title}</p>
              <h3 className="mt-3 text-sm font-semibold leading-snug text-cream">{item.subtitle}</h3>
              <p className="mt-3 text-xs leading-relaxed text-cream/55">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
