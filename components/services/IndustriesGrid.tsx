'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { industries, type IndustryId } from '@/data/services'
import Reveal, { Container } from '@/components/sections/Reveal'
import ServicePhoto, { photoGallery, photos } from './ServicePhoto'

const filters = [{ id: 'all', name: 'All' }, ...industries.map((item) => ({ id: item.id, name: item.name }))] as const

export default function IndustriesGrid() {
  const [active, setActive] = useState<'all' | IndustryId>('all')

  const visible = useMemo(
    () => (active === 'all' ? industries : industries.filter((item) => item.id === active)),
    [active]
  )

  return (
    <section className="scroll-mt-28 bg-cream py-20 md:py-28" id="industries">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              INDUSTRIES WE SHOOT FOR
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Different industries need different content. Filter by vertical — the shooting method changes, the
              discipline does not.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <ServicePhoto {...photos.onset} tight className="aspect-[16/10]" sizes="(min-width: 1152px) 460px, 100vw" />
          </Reveal>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => {
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
                {filter.name}
              </button>
            )
          })}
        </div>

        <div className={`mt-10 grid gap-4 ${active === 'all' ? 'sm:grid-cols-2 lg:grid-cols-4' : 'lg:grid-cols-1'}`}>
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.button
                layout
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                onClick={() => setActive(item.id === active ? 'all' : item.id)}
                className="w-full overflow-hidden rounded-2xl border border-black/5 bg-white text-left transition hover:-translate-y-1 hover:border-accent/40"
              >
                <ServicePhoto
                  {...(photoGallery[industries.findIndex((industry) => industry.id === item.id)] ?? photos.onset)}
                  tight
                  className={`rounded-none ${active === item.id ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}
                  sizes="(min-width: 1152px) 280px, 50vw"
                />
                <div className={active === item.id ? 'p-6 md:p-10' : 'p-6'}>
                  <h3 className="font-cabinet-grotesk text-xl font-bold text-ink md:text-2xl">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.pitch}</p>
                  <p
                    className={`mt-4 text-sm leading-relaxed text-ink/80 ${active === item.id ? 'block' : 'hidden sm:block'}`}
                  >
                    {item.shoot}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.formats.map((format) => (
                      <span key={format} className="rounded-full bg-warm px-2.5 py-1 text-[11px] tracking-wide text-ink">
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
