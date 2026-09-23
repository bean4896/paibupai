'use client'

import { motion } from 'framer-motion'
import { shootReels } from '@/data/homepage'
import Reveal, { Container } from './Reveal'

export default function VideoShowcase() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-label="Shooting technique and business filming">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            HOW WE SHOOT.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Shooting technique and business filming — the work behind the content. Short videos coming soon.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {shootReels.map((reel, index) => (
            <motion.article
              key={reel.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-coffee text-cream"
            >
              <div className="relative aspect-[9/16]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,24,22,0.15)_0%,rgba(18,18,18,0.72)_100%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-coffee/40 text-accent transition group-hover:bg-accent group-hover:text-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-px" fill="currentColor" aria-hidden="true">
                      <path d="M8.5 6.8v10.4L18 12 8.5 6.8z" />
                    </svg>
                  </span>
                  <p className="mt-4 font-cabinet-grotesk text-sm font-bold tracking-wide md:text-base">{reel.title}</p>
                  <p className="mt-2 hidden max-w-[16ch] text-[11px] leading-relaxed text-cream/55 sm:block">{reel.copy}</p>
                  <p className="mt-3 text-[10px] tracking-[0.16em] text-accent uppercase">Coming soon</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
