'use client'

import Reveal, { Container } from '@/components/sections/Reveal'
import ServicePhoto, { photos } from './ServicePhoto'

const jumps = [
  { href: '#breakdown', label: 'Full-service & à la carte' },
  { href: '#founder-ip', label: 'Founder IP' },
  { href: '#social', label: 'Social' },
  { href: '#signage', label: 'Signage' },
  { href: '#live-academy', label: 'Live & Academy' },
  { href: '#industries', label: 'Industries' },
  { href: '#pricing', label: 'Price plans' },
]

export default function ServicesHero() {
  return (
    <section className="bg-cream pt-12 pb-16 md:pt-16 md:pb-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-[11px] tracking-[0.22em] text-accent uppercase">Services</p>
            <h1 className="font-cabinet-grotesk mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
              FULL-SERVICE.
              <br />
              OR À LA CARTE.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Strategy, scripts, filming, editing, publishing and offline visual — as one system, or as the piece you
              need now. Strategy before shooting.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {jumps.map((jump) => (
                <a
                  key={jump.href}
                  href={jump.href}
                  className="rounded-full border border-black/8 bg-white px-3.5 py-1.5 text-xs tracking-wide text-ink transition hover:border-accent/50"
                >
                  {jump.label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <ServicePhoto
              {...photos.onset}
              priority
              className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
              sizes="(min-width: 1152px) 540px, 100vw"
            />
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4 md:gap-4">
          <ServicePhoto {...photos.studio} className="aspect-[4/5] md:aspect-[3/4]" />
          <ServicePhoto {...photos.camera} className="aspect-[4/5] md:aspect-[3/4]" />
          <ServicePhoto {...photos.board} className="aspect-[4/5] md:aspect-[3/4]" />
          <ServicePhoto {...photos.crew} className="aspect-[4/5] md:aspect-[3/4]" />
        </div>
      </Container>
    </section>
  )
}
