'use client'

import { useState } from 'react'
import { Section, Heading, PricingCard } from './ui'

export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true)

  const starterFeatures = [
    'Unlimited placeholder texts',
    'Consectetur adipiscing elit',
    'Excepteur sint occaecat cupidatat',
    'Officia deserunt mollit anim'
  ]

  const businessFeatures = [
    'Unlimited placeholder texts',
    'Consectetur adipiscing elit',
    'Excepteur sint occaecat cupidatat',
    'Officia deserunt mollit anim',
    'Excepteur sint occaecat cupidatat'
  ]

  return (
    <Section 
      variant="default" 
      padding="lg" 
      className="relative border-t border-gray-100"
    >
      {/* Bg gradient */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-50 to-white h-1/2 pointer-events-none -z-10" aria-hidden="true" />
      
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <Heading level={2} variant="section" center>
          Become a member of the best creative community
        </Heading>
      </div>
      
      {/* Pricing tables */}
      <div>
        {/* Pricing toggle */}
        <div className="flex justify-center max-w-[18rem] m-auto mb-8 lg:mb-16">
          <div className="relative flex w-full mx-6 p-1 bg-gray-200 rounded-full">
            <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
              <span className={`absolute inset-0 w-1/2 bg-white rounded-full shadow transform transition duration-150 ease-in-out ${annual ? 'translate-x-0' : 'translate-x-full'}`} />
            </span>
            <button className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${annual && 'text-gray-500'}`} onClick={() => setAnnual(true)}>
              Yearly <span className="text-green-500">-20%</span>
            </button>
            <button className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${annual && 'text-gray-500'}`} onClick={() => setAnnual(false)}>
              Monthly
            </button>
          </div>
        </div>
        
        <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-3xl pt-4">
          <PricingCard
            title="Starter"
            price="Free"
            description="Explore the tool, save inspiration and create collections."
            features={starterFeatures}
            buttonText="Join The Community"
            buttonHref="/signup"
            className="data-aos-fade-right"
          />
          
          <PricingCard
            title="Business"
            price={annual ? 29 : 35}
            period="/mo"
            description="Get unlimited access to our new mood boarding tool."
            features={businessFeatures}
            buttonText="Start Free Trial"
            buttonHref="/signup"
            popular
            variant="dark"
            className="data-aos-fade-left"
          />
        </div>
      </div>
    </Section>
  )
}