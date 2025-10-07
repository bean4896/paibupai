export const metadata = {
  title: 'Home - Paibupai',
  description: 'Welcome to Paibupai, Singapore\'s premier photography agency. Discover our professional photography, social media marketing, and event planning services.',
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
