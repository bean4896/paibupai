export const metadata = {
  title: 'Services - Paibupai',
  description:
    'Singapore content services: full-service or à la carte. Founder IP, social media management, signage, live streaming, academy, and industry-specific filming.',
}

import {
  FeaturedModules,
  IndustriesGrid,
  PricePlans,
  ServiceBreakdown,
  ServicesCta,
  ServicesHero,
} from '@/components/services'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceBreakdown />
      <FeaturedModules />
      <IndustriesGrid />
      <PricePlans />
      <ServicesCta />
    </>
  )
}
