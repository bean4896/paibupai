'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { workFilters, workPieces, type WorkFilterId } from '@/data/portfolio'
import Reveal, { Container } from '@/components/sections/Reveal'

const aspectClass: Record<(typeof workPieces)[number]['aspect'], string> = {
  '9/16': 'aspect-[9/16]',
  '16/9': 'aspect-video',
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
}

export default function WorkGallery() {
  const [active, setActive] = useState<'all' | WorkFilterId>('all')

  const visible = useMemo(
    () => (active === 'all' ? workPieces : workPieces.filter((item) => item.industry === active)),
    [active]
  )

  return (
    <section className="scroll-mt-28 bg-warm py-20 md:py-28" id="gallery">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            WORK.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            A visual library by industry and type. Pieces are still being cut in — placeholders until the masters land.
          </p>
        </Reveal>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {workFilters.map((filter) => {
            const isActive = active === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs tracking-wide transition ${
                  isActive
                    ? 'border-accent bg-white text-ink'
                    : 'border-black/8 bg-white/60 text-muted hover:border-black/20'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className={`group overflow-hidden rounded-2xl border border-black/5 bg-coffee text-cream ${
                  item.aspect === '16/9' ? 'col-span-2' : ''
                }`}
              >
                <div className={`relative ${aspectClass[item.aspect]}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,24,22,0.12)_0%,rgba(18,18,18,0.78)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <p className="text-[10px] tracking-[0.16em] text-accent uppercase">
                      {item.kind} · {workFilters.find((filter) => filter.id === item.industry)?.label}
                    </p>
                    <h3 className="font-cabinet-grotesk mt-1 text-sm font-bold md:text-base">{item.title}</h3>
                    <p className="mt-2 text-[10px] tracking-[0.16em] text-cream/45 uppercase">Coming soon</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
