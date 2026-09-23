'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { priceCategories, pricePlans, type PriceCategoryId } from '@/data/services'
import Reveal, { Container } from '@/components/sections/Reveal'
import ServicePhoto, { photos } from './ServicePhoto'

export default function PricePlans() {
  const [active, setActive] = useState<'all' | PriceCategoryId>('all')

  const visible = useMemo(
    () => (active === 'all' ? pricePlans : pricePlans.filter((plan) => plan.category === active)),
    [active]
  )

  return (
    <section className="scroll-mt-28 bg-warm py-20 md:py-28" id="pricing">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              PRICE PLANS
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Dummy starting figures for discussion — not a public rate card. Final quote after we know the brand, the
              platforms, and the job of the content.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <ServicePhoto {...photos.crew} tight className="aspect-[16/10]" sizes="(min-width: 1152px) 460px, 100vw" />
          </Reveal>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {priceCategories.map((category) => {
            const isActive = active === category.id
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs tracking-wide transition ${
                  isActive
                    ? 'border-accent bg-white text-ink'
                    : 'border-black/8 bg-white/60 text-muted hover:border-black/20'
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((plan) => {
              const featured = plan.highlight === 'featured'
              const popular = plan.highlight === 'popular'

              return (
                <motion.article
                  layout
                  key={plan.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className={`flex flex-col rounded-2xl border p-6 ${
                    featured
                      ? 'border-white/8 bg-coffee text-cream'
                      : popular
                        ? 'border-2 border-accent bg-white text-ink'
                        : 'border-black/5 bg-white text-ink'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p
                      className={`text-[11px] tracking-[0.16em] uppercase ${featured ? 'text-accent' : 'text-muted'}`}
                    >
                      {priceCategories.find((item) => item.id === plan.category)?.label}
                    </p>
                    {popular ? (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] tracking-[0.14em] text-white uppercase">
                        Popular
                      </span>
                    ) : null}
                    {featured ? (
                      <span className="rounded-full border border-accent/40 px-2 py-0.5 text-[10px] tracking-[0.14em] text-accent uppercase">
                        Featured
                      </span>
                    ) : null}
                  </div>

                  <h3 className="font-cabinet-grotesk mt-3 text-lg font-bold">{plan.name}</h3>
                  <p className="mt-4 font-cabinet-grotesk text-3xl font-extrabold tracking-tight">
                    {plan.price}
                    <span className={`ml-1.5 text-sm font-medium ${featured ? 'text-cream/50' : 'text-muted'}`}>
                      {plan.period}
                    </span>
                  </p>
                  <p className={`mt-3 text-sm leading-relaxed ${featured ? 'text-cream/65' : 'text-muted'}`}>
                    {plan.blurb}
                  </p>
                  <ul className="mt-5 grow space-y-2">
                    {plan.includes.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className={featured ? 'text-cream/80' : 'text-ink/80'}>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#book"
                    className={`mt-8 inline-flex items-center justify-center rounded-full border-2 px-4 py-2.5 text-xs font-medium tracking-wide transition ${
                      featured
                        ? 'border-accent text-cream hover:bg-accent hover:text-white'
                        : 'border-accent text-ink hover:bg-accent hover:text-white'
                    }`}
                  >
                    Book this
                  </a>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
