'use client'

import { motion } from 'framer-motion'
import { audiences } from '@/data/homepage'
import Reveal, { Container } from './Reveal'

const iconClass = 'h-4 w-4 stroke-[1.7] text-accent'

function AudienceIcon({ id }: { id: (typeof audiences)[number]['id'] }) {
  switch (id) {
    case 'corporate':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect x="4" y="8" width="16" height="13" rx="1" />
          <path d="M9 21V13h6v8M8 8V4h8v4" />
        </svg>
      )
    case 'sme':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M4 20V10l8-6 8 6v10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      )
    case 'chain':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect x="3" y="10" width="7" height="10" rx="1" />
          <rect x="14" y="10" width="7" height="10" rx="1" />
          <path d="M10 15h4M7 10V7l5-3 5 3v3" />
        </svg>
      )
    case 'fnb':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M8 3v8M6 3v5a2 2 0 0 0 4 0V3M16 3c2.2 0 4 1.8 4 4v4h-4V3zM8 11v10M16 11v10" />
        </svg>
      )
    case 'real-estate':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M6 10.5V20h12V10.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      )
    case 'founders':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" />
        </svg>
      )
    case 'personal-ip':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" />
        </svg>
      )
    case 'manufacturing':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M3 21V10l6 4V10l6 4V8l6-3v16" />
          <path d="M7 21v-3M12 21v-3M17 21v-3" />
        </svg>
      )
    case 'professional':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
        </svg>
      )
    case 'retail':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M6 8h12l-1 13H7L6 8z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      )
  }
}

export default function WhoWeWorkWith() {
  return (
    <section className="scroll-mt-28 bg-warm pt-20 pb-10 md:pt-28 md:pb-12" id="clients">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            WHO WE WORK WITH
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {audiences.map((item, index) => (
            <motion.span
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm text-ink"
            >
              <AudienceIcon id={item.id} />
              {item.label}
            </motion.span>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 max-w-3xl">
          <p className="font-cabinet-grotesk text-2xl leading-snug font-bold text-ink md:text-3xl">
            Whether you are one person, one store, or a company — we start from your business goals.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Size is not the barrier. What matters is whether you treat content as a long-term operation, not a one-off shoot.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
