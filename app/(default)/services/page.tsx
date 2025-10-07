export const metadata = {
  title: 'Services - Paibupai Photography',
  description: 'Professional photography services in Singapore including photo shooting, social media marketing, and event planning. Contact Paibupai for your creative needs.',
}

import { Section, Heading, Button, Card } from '@/components/ui'

const services = [
  {
    title: "Photo Shooting",
    description: "Professional photography services for corporate events, portraits, and special occasions in Singapore.",
    features: [
      "Corporate Photography",
      "Portrait Sessions",
      "Event Coverage",
      "Product Photography",
      "Lifestyle Shoots"
    ],
    href: "/services/photoshooting",
    image: "/images/service-photo.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Social Media Marketing",
    description: "Creative social media content and marketing strategies to boost your brand's online presence.",
    features: [
      "Content Creation",
      "Social Media Strategy",
      "Influencer Partnerships",
      "Brand Storytelling",
      "Analytics & Reporting"
    ],
    href: "/services/social-media-marketing",
    image: "/images/service-social.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
      </svg>
    )
  },
  {
    title: "Event Planning",
    description: "Complete event planning and coordination services for corporate and private events in Singapore.",
    features: [
      "Event Coordination",
      "Venue Selection",
      "Vendor Management",
      "Timeline Planning",
      "On-site Support"
    ],
    href: "/services/event-planning",
    image: "/images/service-event.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
]

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your vision, requirements, and goals to understand your needs."
  },
  {
    step: "02", 
    title: "Planning",
    description: "Our team creates a detailed plan and timeline for your project."
  },
  {
    step: "03",
    title: "Execution",
    description: "We bring your vision to life with professional execution and attention to detail."
  },
  {
    step: "04",
    title: "Delivery",
    description: "Receive your final deliverables with post-production and quality assurance."
  }
]

export default function Services() {
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
              Professional{' '}
              <span className="text-primary-500">Photography Services</span>
            </Heading>
            
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              From photo shooting to social media marketing and event planning, we provide comprehensive creative services in Singapore.
            </p>
            
            <Button href="/contact" variant="primary" className="mb-8" data-aos="fade-up" data-aos-delay="200">
              Get Started Today
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Our Services
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive photography and creative services tailored for Singapore businesses and individuals
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                variant="default"
                className="group hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  
                  <Heading level={3} variant="section" className="mb-4">
                    {service.title}
                  </Heading>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button href={service.href} variant="outline" className="w-full group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section padding="lg" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Our Process
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results for every project
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <Heading level={4} variant="section" className="mb-3">
                  {step.title}
                </Heading>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div data-aos="fade-right">
              <Heading level={2} variant="section" className="mb-6">
                Why Choose Paibupai?
              </Heading>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Singapore Expertise</h3>
                    <p className="text-gray-600">Deep understanding of Singapore's culture, venues, and business landscape.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Equipment</h3>
                    <p className="text-gray-600">State-of-the-art photography equipment and editing software for premium results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Packages</h3>
                    <p className="text-gray-600">Customizable service packages to fit your budget and requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
                    <p className="text-gray-600">Fast delivery without compromising on quality and attention to detail.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-medium">Service Showcase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" className="bg-primary-500">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level={2} variant="section" className="text-white mb-6">
            Ready to Get Started?
          </Heading>
          <p className="text-xl text-primary-100 mb-8">
            Contact us today to discuss your photography and creative service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Get In Touch
            </Button>
            <Button href="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-500">
              Learn About Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
