export const metadata = {
  title: 'Home - Paibupai',
  description: 'Welcome to Paibupai, the platform for creative minds. Discover inspiration, connect with creatives, and showcase your work.',
}

import { EventBanner } from '@/components/ui'
import Inspiration from '@/components/inspiration'
import Carousel from '@/components/carousel'
import Creatives from '@/components/creatives'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import Faqs from '@/components/faqs'
import Blog from '@/components/blog'
import eventsData from '@/data/events.json'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <EventBanner event={eventsData.currentEvent} />
      <Inspiration />
      <Carousel />
      <Creatives />
      <Pricing />
      <Testimonials />
      <Faqs />
      <Blog />
    </>
  )
}
