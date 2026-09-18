'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Keyboard, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const banners = [
  {
    src: '/static/banner1.jpg',
    alt: 'One Year of Content — 12-month content plan and social media posting management',
  },
  {
    src: '/static/banner2.jpg',
    alt: 'Mid-Autumn $815 Special — 10 short videos plus social media posting',
  },
  {
    src: '/static/banner3.jpg',
    alt: 'Make Your Business Seen — Paibupai one-stop content team in Singapore',
  },
]

export default function HeroBanner() {
  return (
    <section className="hero-banner w-full bg-cream" aria-label="Featured campaigns">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 md:pt-8">
        <div className="overflow-hidden rounded-2xl">
          <Swiper
            modules={[Autoplay, Pagination, Keyboard, A11y]}
            loop
            speed={700}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.hero-banner-pagination',
            }}
            keyboard={{ enabled: true }}
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={banner.src}>
                <a href="#book" className="relative block aspect-[16/9] w-full">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    priority={index === 0}
                    className="object-contain"
                    sizes="(min-width: 1152px) 1152px, 100vw"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hero-banner-pagination mt-4 flex justify-center" />
      </div>
    </section>
  )
}
