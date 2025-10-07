'use client'

import { useEffect } from 'react'
import TestimonialsImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialsImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialsImage03 from '@/public/images/testimonial-03.jpg'
import { Section, TestimonialCard } from './ui'

// Import Swiper
import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
Swiper.use([Pagination])

const testimonials = [
  {
    image: TestimonialsImage01,
    name: "Cafromthesky",
    handle: "cafromthesky",
    quote: "I've been using Community Club to track my ideas, and it's such a helpful and enjoyable product. Thanks for building it!",
    buttonText: "Read Story",
    buttonHref: "#0"
  },
  {
    image: TestimonialsImage02,
    name: "Dontlookbehind",
    handle: "dontlookbehind",
    quote: "If you want real marketing that works and effective implementation - Community Club's got you covered.",
    buttonText: "Read Story",
    buttonHref: "#0"
  },
  {
    image: TestimonialsImage03,
    name: "Lukasjey",
    handle: "lukasjey",
    quote: "Community Club has really helped our business in many different ways. I just can't get enough of this awesome company.",
    buttonText: "Read Story",
    buttonHref: "#0"
  }
]

export default function Testimonials() {
  useEffect(() => {
    const testimonial = new Swiper('.testimonial-carousel', {
      slidesPerView: 1,
      watchSlidesProgress: true,
      pagination: {
        el: '.testimonial-carousel-pagination',
        clickable: true,
      },
    })
  }, [])

  return (
    <Section padding="sm">
        <div className="pb-8">
          <div className="relative">
            {/* Gray box */}
            <div className="absolute inset-0 bg-gray-100 rotate-2 -z-10" aria-hidden="true" />
          
            {/* Content */}
            <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
            {/* Carousel built with Swiper.js */}
              <div className="testimonial-carousel swiper-container">
                <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="swiper-slide">
                    <TestimonialCard
                      image={testimonial.image}
                      name={testimonial.name}
                      handle={testimonial.handle}
                      quote={testimonial.quote}
                      buttonText={testimonial.buttonText}
                      buttonHref={testimonial.buttonHref}
                    />
                  </div>
                ))}
              </div>
            </div>
            
              {/* Bullets */}
              <div className="mt-4 lg:absolute bottom-0 right-0 lg:mt-0 lg:mr-12 lg:mb-16 z-10">
                <div className="testimonial-carousel-pagination text-center" />
              </div>
            </div>
          </div>
        </div>
    </Section>
  )
}