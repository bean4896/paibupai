export const metadata = {
  title: 'Social Media Marketing - Paibupai Photography',
  description: 'Professional social media marketing services in Singapore including content creation, strategy development, and influencer partnerships. Boost your brand\'s online presence.',
}

import { Section, Heading, Button, Card } from '@/components/ui'

const socialServices = [
  {
    title: "Content Creation",
    description: "High-quality visual content designed specifically for social media platforms.",
    features: [
      "Instagram Posts & Stories",
      "Facebook Content",
      "LinkedIn Visuals",
      "TikTok Videos",
      "YouTube Thumbnails"
    ],
    price: "From $400"
  },
  {
    title: "Social Media Strategy",
    description: "Comprehensive strategy development to maximize your social media presence.",
    features: [
      "Platform Analysis",
      "Content Calendar",
      "Audience Research",
      "Competitor Analysis",
      "Growth Strategy"
    ],
    price: "From $600"
  },
  {
    title: "Influencer Partnerships",
    description: "Connect with Singapore's top influencers to expand your reach.",
    features: [
      "Influencer Identification",
      "Campaign Management",
      "Content Collaboration",
      "Performance Tracking",
      "Relationship Building"
    ],
    price: "From $800"
  },
  {
    title: "Brand Storytelling",
    description: "Compelling visual narratives that resonate with your target audience.",
    features: [
      "Brand Identity",
      "Visual Storytelling",
      "Campaign Development",
      "User-Generated Content",
      "Brand Guidelines"
    ],
    price: "From $500"
  }
]

const platforms = [
  {
    name: "Instagram",
    description: "Visual storytelling and engagement",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: "Facebook",
    description: "Community building and engagement",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    description: "Professional networking and B2B",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: "TikTok",
    description: "Short-form video content",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    )
  }
]

export default function SocialMediaMarketing() {
  return (
    <>
      {/* Hero Section */}
      <Section
        padding="none"
        className="relative pt-32 pb-12 md:pt-40 md:pb-20"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white pointer-events-none -z-10" aria-hidden="true" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Heading
              level={1}
              variant="display"
              className="mb-6"
              data-aos="fade-up"
            >
              Social Media{' '}
              <span className="text-primary-500">Marketing</span>
            </Heading>
            
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              Boost your brand's online presence with professional social media marketing and content creation services in Singapore.
            </p>
            
            <Button href="/contact" variant="primary" className="mb-8" data-aos="fade-up" data-aos-delay="200">
              Start Your Campaign
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Social Media Marketing Services
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive social media solutions to grow your brand and engage your audience
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {socialServices.map((service, index) => (
              <Card
                key={index}
                variant="default"
                className="group hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <Heading level={3} variant="section" className="mb-2">
                      {service.title}
                    </Heading>
                    <span className="text-primary-600 font-semibold text-lg">
                      {service.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button href="/contact" variant="outline" className="w-full group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500">
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Platform Expertise */}
      <Section padding="lg" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Platform Expertise
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in creating content optimized for each social media platform
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <div className="text-primary-600">
                    {platform.icon}
                  </div>
                </div>
                <Heading level={4} variant="section" className="mb-2">
                  {platform.name}
                </Heading>
                <p className="text-gray-600 text-sm">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Strategy Process */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div data-aos="fade-right">
              <Heading level={2} variant="section" className="mb-6">
                Our Social Media Strategy Process
              </Heading>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Audience Research</h3>
                    <p className="text-gray-600">We analyze your target audience, their preferences, and behavior patterns across platforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Content Strategy</h3>
                    <p className="text-gray-600">Develop a comprehensive content strategy tailored to your brand and audience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Content Creation</h3>
                    <p className="text-gray-600">Create high-quality, engaging content optimized for each platform's requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Performance Tracking</h3>
                    <p className="text-gray-600">Monitor and analyze performance metrics to optimize your social media presence.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-medium">Strategy Showcase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Success Metrics */}
      <Section padding="lg" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Measurable Results
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We track and optimize key performance indicators to ensure your social media success
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center" data-aos="fade-up">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Engagement Growth
              </Heading>
              <p className="text-gray-600">
                Increase in likes, comments, shares, and overall engagement rates across all platforms.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Follower Growth
              </Heading>
              <p className="text-gray-600">
                Organic growth in followers and subscribers with high-quality, engaged audiences.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Brand Awareness
              </Heading>
              <p className="text-gray-600">
                Increased brand visibility, reach, and recognition across social media platforms.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" className="bg-primary-500">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level={2} variant="section" className="text-white mb-6">
            Ready to Boost Your Social Media Presence?
          </Heading>
          <p className="text-xl text-primary-100 mb-8">
            Let's create a social media strategy that drives engagement and grows your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Start Your Campaign
            </Button>
            <Button href="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-500">
              View All Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
