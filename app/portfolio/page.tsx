export const metadata = {
  title: 'Our Work - Paibupai',
  description:
    'Paibupai work and case studies: F&B, property, beauty, corporate, founder IP, events and lightboxes. Problem, plan, result.',
}

import { PortfolioHero, WorkGallery } from '@/components/portfolio'
import CaseStudies from '@/components/sections/CaseStudies'
import ServicesCta from '@/components/services/ServicesCta'

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <WorkGallery />
      <CaseStudies />
      <ServicesCta />
    </>
  )
}
