'use client'

import { motion } from 'framer-motion'
import { aLaCarte } from '@/data/services'
import Reveal, { Container } from '@/components/sections/Reveal'
import ServicePhoto, { photoGallery, photos } from './ServicePhoto'

const fullService = ['Strategy', 'Script', 'Filming', 'Editing', 'Publishing', 'Operations']

export default function ServiceBreakdown() {
  return (
    <section className="scroll-mt-28 bg-warm py-20 md:py-28" id="breakdown">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            ONE TEAM. BUY THE SYSTEM, OR BUY THE PIECE.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Full-service keeps strategy, production and publishing on one line. À la carte is for the brand that already
            knows the gap — diagnosis, scripts, a shoot day, a campaign deck.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-2xl bg-coffee text-cream lg:col-span-5"
          >
            <ServicePhoto {...photos.studio} tight className="aspect-[16/10] rounded-none" sizes="(min-width: 1152px) 480px, 100vw" />
            <div className="p-8 md:p-10">
              <p className="text-[11px] tracking-[0.22em] text-accent uppercase">Full-service</p>
              <h3 className="font-cabinet-grotesk mt-3 text-2xl font-bold">The content system</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">
                Strategy decides what to shoot. Production makes it. Operations turns it into presence — including 12
                months of posting on a partnership.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {fullService.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 px-3 py-1.5 text-xs tracking-wide text-cream/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {aLaCarte.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white"
              >
                <ServicePhoto
                  {...photoGallery[index % photoGallery.length]}
                  tight
                  className="aspect-[16/9] rounded-none"
                  sizes="(min-width: 1152px) 280px, 50vw"
                />
                <div className="p-5">
                  <h3 className="font-cabinet-grotesk text-lg font-bold text-ink">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
