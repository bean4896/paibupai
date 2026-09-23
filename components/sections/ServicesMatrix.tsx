'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/data/homepage'
import Reveal, { Container } from './Reveal'

export default function ServicesMatrix() {
  return (
    <section className="bg-cream py-20 md:py-28 scroll-mt-28" id="services">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            ONE TEAM. FULL BRAND CONTENT SOLUTION.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Five business pillars. One content system. From strategy and production to publishing and offline visibility, we help brands keep content going — not just shoot once.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {services.map((service, index) => {
            const wide = index < 2
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className={`group rounded-2xl border border-black/5 bg-white p-6 md:p-8 ${
                  wide ? 'xl:col-span-3' : 'xl:col-span-2'
                }`}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="font-cabinet-grotesk text-sm tracking-[0.2em] text-accent">
                    {service.number}
                  </span>
                  <span className="h-px flex-1 translate-y-2 bg-black/5 transition-colors group-hover:bg-accent/40" />
                </div>
                <h3 className="font-cabinet-grotesk text-xl font-bold text-ink md:text-2xl">
                  {service.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{service.en}</p>
                {'tagline' in service && service.tagline ? (
                  <p className="mt-3 text-sm font-medium text-accent">{service.tagline}</p>
                ) : null}
                <p className="mt-4 text-sm leading-relaxed text-ink/80">{service.value}</p>
                {'platforms' in service && service.platforms ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-black/8 bg-warm px-2.5 py-1 text-[11px] tracking-wide text-ink"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full px-2 py-0.5 text-[11px] text-muted"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        <Reveal delay={0.12} className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink transition hover:text-accent"
          >
            Full breakdown, featured modules and pricing
            <span aria-hidden="true" className="text-accent">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
