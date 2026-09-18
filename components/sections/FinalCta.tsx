'use client'

import BookingForm from '@/components/booking/BookingForm'
import Reveal, { Container } from './Reveal'

export default function FinalCta() {
  return (
    <section className="scroll-mt-28 bg-coffee py-20 text-cream md:py-28" id="book">
      <Container>
        <Reveal>
          <h2 className="font-cabinet-grotesk max-w-4xl text-3xl font-extrabold tracking-tight md:text-5xl">
            YOUR BUSINESS DESERVES TO BE SEEN.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/60">
            Your product deserves to be seen. Your service deserves to be understood. Your brand deserves to be remembered.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <BookingForm />
        </Reveal>
      </Container>
    </section>
  )
}
