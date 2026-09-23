'use client'

import { motion } from 'framer-motion'
import { founderIpSteps, signageItems, socialPlatforms } from '@/data/services'
import Reveal, { Container } from '@/components/sections/Reveal'
import ServicePhoto, { photos } from './ServicePhoto'

export default function FeaturedModules() {
  return (
    <>
      <section className="scroll-mt-28 bg-charcoal py-20 text-cream md:py-28" id="founder-ip">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="text-[11px] tracking-[0.22em] text-accent uppercase">On camera</p>
              <h2 className="font-cabinet-grotesk mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
                FOUNDER IP
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/65 md:text-lg">
                Positioning → Topic → Script & Filming → Persona → Series → Review. The founder on camera without the
                performance. Content that works for the business.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-6">
              <ServicePhoto
                {...photos.talent}
                className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]"
                sizes="(min-width: 1152px) 540px, 100vw"
              />
            </Reveal>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {founderIpSteps.map((step, index) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border border-white/8 bg-white/5 p-5"
              >
                <p className="font-cabinet-grotesk text-sm font-bold tracking-wide text-accent">{step.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{step.copy}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 bg-cream py-20 md:py-28" id="social">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="text-[11px] tracking-[0.22em] text-accent uppercase">Publishing</p>
              <h2 className="font-cabinet-grotesk mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                SOCIAL MEDIA MANAGEMENT
              </h2>
              <p className="mt-4 font-cabinet-grotesk text-xl font-bold text-ink md:text-2xl">
                Shooting is not the end. Publishing is the start.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Publishing is only the start. Calendar, covers, captions, platform management and review — so the brand
                keeps showing up, and stays remembered.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {socialPlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm text-ink"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <ServicePhoto {...photos.director} className="aspect-[4/5] sm:aspect-[5/4]" sizes="(min-width: 1152px) 540px, 100vw" />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 bg-warm py-20 md:py-28" id="signage">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="order-2 lg:order-1 lg:col-span-6">
              <ServicePhoto {...photos.board} className="aspect-[4/5] sm:aspect-[5/4]" sizes="(min-width: 1152px) 540px, 100vw" />
            </Reveal>
            <Reveal delay={0.08} className="order-1 lg:order-2 lg:col-span-6">
              <p className="text-[11px] tracking-[0.22em] text-accent uppercase">Offline visual</p>
              <h2 className="font-cabinet-grotesk mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                SIGNAGE & VISUAL
              </h2>
              <p className="mt-4 font-cabinet-grotesk text-xl font-bold text-ink md:text-2xl">
                Online they scroll to you. Offline they see you.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                When the online content is done, the brand still needs to be seen offline. Lightboxes, shopfronts,
                hoardings, mall ads and store visual — same story as the account.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {signageItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 bg-coffee py-20 text-cream md:py-28" id="live-academy">
        <Container>
          <Reveal>
            <p className="text-[11px] tracking-[0.22em] text-accent uppercase">Capability</p>
            <h2 className="font-cabinet-grotesk mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              LIVE STREAMING & ACADEMY
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/8 bg-white/5"
            >
              <ServicePhoto {...photos.camera} tight className="aspect-[16/10] rounded-none" sizes="(min-width: 1152px) 560px, 100vw" />
              <div className="p-8 md:p-10">
                <h3 className="font-cabinet-grotesk text-2xl font-bold">Live streaming</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  A live as a repeatable content system, not a one-day event. Product lives, brand lives, event lives —
                  then clips that feed the accounts.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Live planning', 'On-site execution', 'Product / brand / event', 'Live clips'].map((item) => (
                    <span key={item} className="rounded-full border border-white/12 px-3 py-1.5 text-xs text-cream/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="overflow-hidden rounded-2xl border border-white/8 bg-white/5"
            >
              <ServicePhoto {...photos.lighting} tight className="aspect-[16/10] rounded-none" sizes="(min-width: 1152px) 560px, 100vw" />
              <div className="p-8 md:p-10">
                <h3 className="font-cabinet-grotesk text-2xl font-bold">Training / Academy</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  Leave content capability with the team, so the brand can keep producing on its own.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    'Founder IP training',
                    'Corporate short-video',
                    'Mobile filming',
                    'Social media',
                    'In-house team',
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-white/12 px-3 py-1.5 text-xs text-cream/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </Container>
      </section>
    </>
  )
}
