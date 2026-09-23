'use client'

import { motion } from 'framer-motion'
import { team } from '@/data/about'
import Reveal, { Container } from '@/components/sections/Reveal'

export default function TeamGrid() {
  return (
    <section className="scroll-mt-28 bg-cream py-20 md:py-28" id="team">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            THE PEOPLE ON THE JOB.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Directors, photographers, editors and operations — not a roster of freelancers we hope are free on Tuesday.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <motion.article
              key={person.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 md:p-8"
            >
              <div className="flex aspect-[4/5] items-center justify-center rounded-xl bg-warm text-muted">
                <span className="text-[11px] tracking-[0.16em] uppercase">Portrait soon</span>
              </div>
              <p className="mt-5 text-[11px] tracking-[0.18em] text-accent uppercase">{person.role}</p>
              <h3 className="font-cabinet-grotesk mt-1 text-xl font-bold text-ink">{person.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{person.persona}</p>
              <p className="mt-4 text-xs tracking-wide text-muted">{person.shoots}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {person.industries.map((item) => (
                  <span key={item} className="rounded-full bg-warm px-2.5 py-1 text-[11px] text-ink">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">{person.languages.join(' · ')}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
