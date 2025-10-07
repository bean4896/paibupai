export const metadata = {
  title: 'Event Planning Services - Paibupai Photography',
  description: 'Professional event planning and coordination services in Singapore. From corporate events to private celebrations, we handle every detail with precision and creativity.',
}

import { Section, Heading, Button, Card } from '@/components/ui'

const eventServices = [
  {
    title: "Corporate Events",
    description: "Professional event planning for corporate meetings, conferences, and business gatherings.",
    features: [
      "Conference Planning",
      "Product Launches",
      "Team Building Events",
      "Annual Meetings",
      "Networking Events"
    ],
    price: "From $1,200"
  },
  {
    title: "Private Celebrations",
    description: "Memorable planning for personal milestones and special occasions.",
    features: [
      "Birthday Parties",
      "Anniversary Celebrations",
      "Graduation Parties",
      "Holiday Gatherings",
      "Family Reunions"
    ],
    price: "From $800"
  },
  {
    title: "Wedding Planning",
    description: "Complete wedding planning and coordination services for your special day.",
    features: [
      "Venue Selection",
      "Vendor Coordination",
      "Timeline Management",
      "Day-of Coordination",
      "Photography Integration"
    ],
    price: "From $2,000"
  },
  {
    title: "Product Launches",
    description: "Strategic event planning for product launches and brand activations.",
    features: [
      "Launch Strategy",
      "Media Coordination",
      "Guest Management",
      "Brand Activation",
      "Press Events"
    ],
    price: "From $1,500"
  }
]

const eventTypes = [
  {
    name: "Corporate",
    description: "Business events and meetings",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: "Social",
    description: "Personal celebrations",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    name: "Wedding",
    description: "Wedding celebrations",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    name: "Launch",
    description: "Product launches",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
]

const planningSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We discuss your vision, budget, and requirements to understand your event goals."
  },
  {
    step: "02",
    title: "Event Design & Planning",
    description: "Create a detailed event plan including venue selection, timeline, and vendor coordination."
  },
  {
    step: "03",
    title: "Vendor Management",
    description: "Coordinate with trusted vendors including caterers, decorators, and entertainment."
  },
  {
    step: "04",
    title: "Event Execution",
    description: "On-site coordination and management to ensure everything runs smoothly on your event day."
  }
]

export default function EventPlanning() {
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
              <span className="text-primary-500">Event Planning</span>
            </Heading>
            
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              From corporate events to private celebrations, we handle every detail to create memorable experiences in Singapore.
            </p>
            
            <Button href="/contact" variant="primary" className="mb-8" data-aos="fade-up" data-aos-delay="200">
              Plan Your Event
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Event Planning Services
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive event planning solutions for every occasion and budget
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {eventServices.map((service, index) => (
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
                    Get Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Event Types */}
      <Section padding="lg" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Event Types We Handle
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to large-scale corporate events
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((type, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <div className="text-primary-600">
                    {type.icon}
                  </div>
                </div>
                <Heading level={4} variant="section" className="mb-2">
                  {type.name}
                </Heading>
                <p className="text-gray-600 text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Planning Process */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Our Event Planning Process
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to creating unforgettable events
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {planningSteps.map((step, index) => (
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

      {/* What We Handle */}
      <Section padding="lg" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div data-aos="fade-right">
              <Heading level={2} variant="section" className="mb-6">
                What We Handle For You
              </Heading>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Venue Selection & Booking</h3>
                    <p className="text-gray-600">Find and secure the perfect venue that fits your event requirements and budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Vendor Coordination</h3>
                    <p className="text-gray-600">Manage relationships with caterers, decorators, entertainment, and other service providers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Timeline Management</h3>
                    <p className="text-gray-600">Create detailed timelines and ensure everything runs smoothly on your event day.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Budget Management</h3>
                    <p className="text-gray-600">Help you stay within budget while maximizing the impact of your event.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Day-of Coordination</h3>
                    <p className="text-gray-600">On-site management to handle any last-minute issues and ensure flawless execution.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-medium">Event Showcase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Singapore Venues */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Singapore Venue Expertise
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We have extensive knowledge of Singapore's best event venues and locations
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center" data-aos="fade-up">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Corporate Venues
              </Heading>
              <p className="text-gray-600">
                Hotels, conference centers, and business facilities in Marina Bay, Orchard, and CBD areas.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Unique Locations
              </Heading>
              <p className="text-gray-600">
                Gardens, heritage sites, rooftop venues, and unique spaces for memorable celebrations.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Local Partnerships
              </Heading>
              <p className="text-gray-600">
                Strong relationships with Singapore's top venues, vendors, and service providers.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" className="bg-primary-500">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level={2} variant="section" className="text-white mb-6">
            Ready to Plan Your Perfect Event?
          </Heading>
          <p className="text-xl text-primary-100 mb-8">
            Let us handle all the details while you focus on enjoying your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Start Planning
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
