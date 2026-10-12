export const metadata = {
  title: 'Home - Paibupai',
  description:
    'Singapore content strategy, video production and social media marketing agency. Strategy before shooting. 5 years in Singapore, 300+ businesses served.',
}

import HeroBanner from '@/components/hero-banner'
import { getBanners } from '@/lib/banners/store'
import {
  AnnualPartnership,
  FinalCta,
  ServicesMatrix,
  StrategyCore,
  TailoredSolutions,
  WhoWeWorkWith,
  PartnerLogos,
  WhyPaibupai,
  Workflow,
  VideoShowcase,
} from '@/components/sections'

export default async function Home() {
  const banners = await getBanners()

  return (
    <>
      <HeroBanner banners={banners} />
      <VideoShowcase />
      <ServicesMatrix />
      <WhoWeWorkWith />
      <PartnerLogos />
      <StrategyCore />
      <TailoredSolutions />
      <Workflow />
      <AnnualPartnership />
      <WhyPaibupai />
      <FinalCta />
    </>
  )
}
