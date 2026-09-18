'use client'

import { motion } from 'framer-motion'
import { workflowSteps } from '@/data/homepage'
import Reveal, { Container } from './Reveal'

const iconClass = 'h-5 w-5 stroke-[1.6]'

function WorkflowIcon({ id }: { id: (typeof workflowSteps)[number]['id'] }) {
  switch (id) {
    case 'strategy':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
        </svg>
      )
    case 'script':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M7 3h8l4 4v14H7z" />
          <path d="M15 3v4h4M9 12h6M9 16h4" />
        </svg>
      )
    case 'shoot':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect x="5" y="7" width="14" height="12" rx="2" />
          <circle cx="12" cy="13" r="3" />
          <path d="M9 7l1.2-2h3.6L15 7" />
        </svg>
      )
    case 'edit':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M4 8h16M4 16h16" />
          <rect x="7" y="5" width="4" height="14" rx="1" />
          <rect x="13" y="5" width="4" height="14" rx="1" />
        </svg>
      )
    case 'publish':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M4 12l16-7-7 16-2-7z" />
        </svg>
      )
    case 'operate':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
        </svg>
      )
    case 'review':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M4 12a8 8 0 1 0 2.3-5.7" />
          <path d="M4 4v5h5" />
        </svg>
      )
  }
}

export default function Workflow() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            OUR WORKFLOW
          </h2>
          <p className="mt-3 text-lg text-accent">From Strategy to Content to Growth.</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            One complete content system: strategy decides what to shoot, production creates it, operations turns it into lasting brand presence.
          </p>
        </Reveal>
      </Container>

      <div className="mt-12 overflow-x-auto pb-4">
        <div className="mx-auto flex min-w-max max-w-6xl gap-0 px-4 sm:px-6 md:min-w-0 md:flex-wrap md:justify-between lg:flex-nowrap">
          {workflowSteps.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative w-56 shrink-0 px-2 md:w-[30%] lg:w-auto lg:flex-1"
            >
              <div className="rounded-2xl border border-black/5 bg-white p-5 transition-colors group-hover:border-accent/40">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 text-accent">
                    <WorkflowIcon id={step.id} />
                  </span>
                  {index < workflowSteps.length - 1 ? (
                    <span className="hidden text-accent/50 lg:inline">→</span>
                  ) : null}
                </div>
                <p className="font-cabinet-grotesk text-[11px] tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-cabinet-grotesk mt-2 text-sm font-bold tracking-wide text-ink">
                  {step.en}
                </h3>
                <p className="mt-1 text-sm text-ink/70">{step.sub}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted">{step.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
