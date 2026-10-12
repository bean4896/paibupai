'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Keyboard, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { DEFAULT_BANNERS, type BannerSlide } from '@/lib/banners/types'

function BannerMedia({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const remote = src.startsWith('http://') || src.startsWith('https://')

  if (remote) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-contain" />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className="object-contain"
      sizes="(min-width: 1152px) 1152px, 100vw"
    />
  )
}

export default function HeroBanner({ banners = DEFAULT_BANNERS }: { banners?: BannerSlide[] }) {
  const slides = banners.length > 0 ? banners : DEFAULT_BANNERS

  return (
    <section className="hero-banner w-full bg-cream" aria-label="Featured campaigns">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 md:pt-8">
        <div className="overflow-hidden rounded-2xl">
          <Swiper
            modules={[Autoplay, Pagination, Keyboard, A11y]}
            loop={slides.length > 1}
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
            {slides.map((banner, index) => (
              <SwiperSlide key={`${banner.id}-${banner.src}`}>
                <a href={banner.href || '#book'} className="relative block aspect-[16/9] w-full">
                  <BannerMedia src={banner.src} alt={banner.alt} priority={index === 0} />
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
