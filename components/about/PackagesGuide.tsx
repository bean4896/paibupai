'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { packages } from '@/data/about'
import Reveal, { Container } from '@/components/sections/Reveal'

export default function PackagesGuide() {
  return (
    <section className="scroll-mt-28 bg-warm py-20 md:py-28" id="packages">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            WHICH PACKAGE FITS.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            A map, not a rate card. Prices live on Services. If the brand does not fit a box, we write a custom plan.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {packages.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className={`flex flex-col rounded-2xl border p-6 ${
                item.highlight
                  ? 'border-white/8 bg-coffee text-cream'
                  : 'border-black/5 bg-white text-ink'
              }`}
            >
              <h3 className="font-cabinet-grotesk text-lg font-bold">{item.name}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${item.highlight ? 'text-cream/65' : 'text-muted'}`}>
                {item.fit}
              </p>
              <ul className="mt-5 grow space-y-2">
                {item.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className={item.highlight ? 'text-cream/80' : 'text-ink/80'}>{line}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={item.href}
                className={`mt-8 inline-flex items-center justify-center rounded-full border-2 px-4 py-2.5 text-xs font-medium tracking-wide transition ${
                  item.highlight
                    ? 'border-accent text-cream hover:bg-accent hover:text-white'
                    : 'border-accent text-ink hover:bg-accent hover:text-white'
                }`}
              >
                See this
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
