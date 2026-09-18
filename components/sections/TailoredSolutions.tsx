'use client'

import { motion } from 'framer-motion'
import Reveal, { Container } from './Reveal'

const customPoints = [
  'Start from industry, founder and business goals',
  'Content direction is built for this brand only',
  'Account, topics and shooting style stay consistent',
  'Review results, then plan the next phase',
]

const templatePoints = [
  'The same script for every client',
  'Chase views, not the business',
  'Shoot and leave. No account growth',
  'Looks good, but nobody knows why it exists',
]

export default function TailoredSolutions() {
  return (
    <section className="bg-warm py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            TAILORED BRAND GROWTH SOLUTIONS
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Different industries, founders and brands need different content. We build the strategy around your brand, audience, product and business goals.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl bg-coffee p-8 text-cream md:p-10"
          >
            <p className="text-[11px] tracking-[0.22em] text-accent uppercase">Custom Strategy</p>
            <h3 className="font-cabinet-grotesk mt-3 text-2xl font-bold">Made for this brand</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/65">
              Diagnose first, then shoot. Every piece of content should answer: what does this do for your customer, your product, and your next move?
            </p>
            <ul className="mt-8 space-y-3">
              {customPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl border border-black/5 bg-white p-8 md:p-10"
          >
            <p className="text-[11px] tracking-[0.22em] text-muted uppercase">One-size-fits-all</p>
            <h3 className="font-cabinet-grotesk mt-3 text-2xl font-bold text-ink/35 line-through decoration-black/20">
              Template content factory
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              It looks fast, and it looks busy. But nothing compounds — what was shot cannot be carried forward, and there is no system for next month.
            </p>
            <ul className="mt-8 space-y-3">
              {templatePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 shrink-0 text-muted/60">×</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </Container>
    </section>
  )
}
