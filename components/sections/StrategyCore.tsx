'use client'

import Reveal, { Container } from './Reveal'

const scopes = [
  'Brand Positioning',
  'Target Audience',
  'Founder IP',
  'Content Direction',
  'Account Planning',
  'Monthly Content Plan',
  '90-Day Marketing Strategy',
  'Annual Marketing Strategy',
  'Social Media Strategy',
]

export default function StrategyCore() {
  return (
    <section className="bg-charcoal py-20 text-cream md:py-28" id="strategy">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
            STRATEGY BEFORE SHOOTING
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <blockquote className="relative pl-8">
              <span className="font-cabinet-grotesk absolute top-0 left-0 text-5xl leading-none text-accent">
                “
              </span>
              <p className="text-xl leading-relaxed text-cream md:text-2xl">
                Before we pick up the phone, we get clear on who you are, who your customers are, what to shoot, and why anyone should watch.
              </p>
            </blockquote>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-cream/50">
              Paibupai is not a team that just shows up and presses record. We align brand, audience and content direction before directing, shooting and publishing. Content without strategy is just more expensive noise.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="mb-4 text-[11px] tracking-[0.22em] text-cream/40 uppercase">Strategy Scope</p>
            <div className="flex flex-wrap gap-2">
              {scopes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-cream/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
