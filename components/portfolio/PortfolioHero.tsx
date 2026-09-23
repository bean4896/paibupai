'use client'

import Reveal, { Container } from '@/components/sections/Reveal'

const jumps = [
  { href: '#gallery', label: 'Work' },
  { href: '#cases', label: 'Case studies' },
]

export default function PortfolioHero() {
  return (
    <section className="bg-cream pt-12 pb-16 md:pt-16 md:pb-24">
      <Container>
        <Reveal>
          <p className="text-[11px] tracking-[0.22em] text-accent uppercase">Our work</p>
          <h1 className="font-cabinet-grotesk mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
            THE METHOD.
            <br />
            NOT A HIGHLIGHT REEL.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Visuals by industry and type. Then the case: the client problem, what we planned and shot, and what it
            converted.
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
