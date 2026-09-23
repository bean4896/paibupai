'use client'

import Reveal, { Container } from '@/components/sections/Reveal'

const jumps = [
  { href: '#story', label: 'Brand story' },
  { href: '#film', label: 'Documentary' },
  { href: '#team', label: 'Team' },
  { href: '#packages', label: 'Packages' },
]

export default function AboutHero() {
  return (
    <section className="bg-cream pt-12 pb-16 md:pt-16 md:pb-24">
      <Container>
        <Reveal>
          <p className="text-[11px] tracking-[0.22em] text-accent uppercase">About</p>
          <h1 className="font-cabinet-grotesk mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
            IN-HOUSE.
            <br />
            NOT OUTSOURCED.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Directing, filming, editing and operations sit in one team. The same people follow a piece from idea to
            publish — so the content and the account speak the same language.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="mt-10 flex flex-wrap gap-2">
          {jumps.map((jump) => (
            <a
              key={jump.href}
              href={jump.href}
              className="rounded-full border border-black/8 bg-white px-3.5 py-1.5 text-xs tracking-wide text-ink transition hover:border-accent/50"
            >
              {jump.label}
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
