'use client'

import Link from 'next/link'
import Reveal, { Container } from '@/components/sections/Reveal'
import ServicePhoto, { photos } from './ServicePhoto'

export default function ServicesCta() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-cabinet-grotesk max-w-4xl text-3xl font-extrabold tracking-tight text-coffee md:text-5xl">
              TELL US THE BRAND. WE&apos;LL TELL YOU WHAT TO BUY.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Full-service, one shoot day, or 12 months of posting. The plan follows the business — not a catalogue.
            </p>
            <Link
              href="/#book"
              className="mt-10 inline-flex items-center gap-2.5 rounded-full border-2 border-accent bg-coffee px-6 py-3 font-cabinet-grotesk text-sm font-bold tracking-[0.16em] text-cream uppercase transition hover:bg-coffee-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Book Us
              <span aria-hidden="true" className="text-accent">
                →
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <ServicePhoto {...photos.onset} className="aspect-[5/4]" sizes="(min-width: 1152px) 540px, 100vw" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
