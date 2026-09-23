export const metadata = {
  title: 'About - Paibupai',
  description:
    'Paibupai is an in-house Singapore content team: directing, filming, editing and operations. Not outsourced. Five years, 300+ businesses.',
}

import { AboutHero, BrandFilm, BrandStory, PackagesGuide, TeamGrid } from '@/components/about'
import ServicesCta from '@/components/services/ServicesCta'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <BrandFilm />
      <TeamGrid />
      <PackagesGuide />
      <ServicesCta />
    </>
  )
}
