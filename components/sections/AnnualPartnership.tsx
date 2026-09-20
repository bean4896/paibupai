'use client'

import Reveal, { Container } from './Reveal'

const included = ['Strategy', 'Content Planning', 'Shooting', 'Editing', 'Posting']

export default function AnnualPartnership() {
  return (
    <section className="bg-coffee py-20 text-cream md:py-28">
      <Container>
        <Reveal>
          <p className="max-w-4xl font-cabinet-grotesk text-3xl font-extrabold tracking-tight md:text-5xl">
            ONE YEAR OF CONTENT.
            <br />
            ONE YEAR OF CONSISTENT BRAND PRESENCE.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.22em] text-accent uppercase">12-Month Content Partnership</p>
            <h3 className="font-cabinet-grotesk mt-3 text-2xl font-bold md:text-3xl">
              12 MONTHS OF SOCIAL MEDIA POSTING INCLUDED
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {included.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 px-3 py-1.5 text-xs tracking-wide text-cream/80"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-cream/60">
              Commit to a 12-month content plan and enjoy 12 months of social media posting management
              at no additional service fee. This is a long-term partnership that binds strategy, production and account growth — not a promotion.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <a
              href="#book"
              className="inline-flex items-center rounded-full border-2 border-accent px-6 py-3 text-sm font-medium tracking-wide text-cream transition hover:bg-accent hover:text-white"
            >
              GET YOUR CONTENT PLAN
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
