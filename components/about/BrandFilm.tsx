'use client'

import Reveal, { Container } from '@/components/sections/Reveal'

export default function BrandFilm() {
  return (
    <section className="scroll-mt-28 bg-warm py-20 md:py-28" id="film">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            THE TEAM, ON CAMERA.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            A brand documentary — how we direct, shoot and cut. The film is not ready yet. When it is, it lives here.
            Master in 16:9, 1920×1080.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <div className="group relative overflow-hidden rounded-2xl border border-black/5 bg-coffee text-cream">
            <div className="relative aspect-video">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,24,22,0.2)_0%,rgba(18,18,18,0.75)_100%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-coffee/40 text-accent transition group-hover:bg-accent group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-px" fill="currentColor" aria-hidden="true">
                    <path d="M8.5 6.8v10.4L18 12 8.5 6.8z" />
                  </svg>
                </span>
                <p className="font-cabinet-grotesk mt-5 text-lg font-bold md:text-2xl">Paibupai documentary</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/55">
                  How an in-house team actually works. Coming soon.
                </p>
                <p className="mt-4 text-[10px] tracking-[0.16em] text-accent uppercase">Coming soon</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
