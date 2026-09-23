'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { caseCategories, caseStudies, type CaseStudy } from '@/data/homepage'
import Reveal, { Container } from './Reveal'

const steps = [
  { key: 'problem', label: 'Client problem' },
  { key: 'plan', label: 'Strategy & shoot' },
  { key: 'outcome', label: 'Result' },
] as const

export default function CaseStudies() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState<CaseStudy | null>(null)

  const visible = useMemo(
    () => (active === 'all' ? caseStudies : caseStudies.filter((item) => item.category === active)),
    [active]
  )

  return (
    <section className="scroll-mt-28 bg-cream py-20 md:py-28" id="cases">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            CASE STUDIES
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Client problem → strategy and shoot plan → what it converted. Not a montage.
          </p>
        </Reveal>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {caseCategories.map((category) => {
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.button
                layout
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                onClick={() => setSelected(item)}
                className="rounded-2xl border border-black/5 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-accent/40"
              >
                <p className="text-[11px] tracking-[0.18em] text-accent uppercase">{item.industry}</p>
                <h3 className="font-cabinet-grotesk mt-3 text-lg font-bold text-ink">{item.client}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.result}</p>
                <p className="mt-6 text-xs tracking-wide text-ink/50">View case →</p>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </Container>

      <Dialog open={selected !== null} onClose={() => setSelected(null)} className="relative z-50">
        <div className="fixed inset-0 bg-charcoal/70" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto p-4 md:p-8">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel className="w-full max-w-3xl rounded-2xl bg-cream p-6 md:p-10">
              {selected ? (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] tracking-[0.18em] text-accent uppercase">{selected.industry}</p>
                      <DialogTitle className="font-cabinet-grotesk mt-2 text-2xl font-bold text-ink">
                        {selected.client}
                      </DialogTitle>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="text-sm text-muted hover:text-ink"
                    >
                      Close
                    </button>
                  </div>
                  <div className="mt-8 space-y-6">
                    {steps.map((step) => (
                      <div key={step.key} className="border-t border-black/8 pt-5">
                        <p className="text-[11px] tracking-[0.16em] text-accent uppercase">{step.label}</p>
                        {step.key === 'plan' ? (
                          <div className="mt-2 space-y-3 text-sm leading-relaxed text-ink/80">
                            <p>{selected.strategy}</p>
                            <p>{selected.shoot}</p>
                            <p className="text-muted">{selected.operations}</p>
                          </div>
                        ) : (
                          <p className="mt-2 text-sm leading-relaxed text-ink/80">{selected[step.key]}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </section>
  )
}
