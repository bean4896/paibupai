export const metadata = {
  title: 'Photo Shooting Services - Paibupai Photography',
  description: 'Professional photo shooting services in Singapore including corporate photography, portraits, events, and product photography. Expert photographers for all your needs.',
}

import { Section, Heading, Button, Card } from '@/components/ui'

const photoServices = [
  {
    title: "Corporate Photography",
    description: "Professional business photography for companies, executives, and corporate events.",
    features: [
      "Executive Portraits",
      "Team Photos",
      "Office Environment Shots",
      "Corporate Events",
      "Annual Reports"
    ],
    price: "From $500"
  },
  {
    title: "Portrait Photography",
    description: "Personal and professional portrait sessions for individuals and families.",
    features: [
      "Individual Portraits",
      "Family Photos",
      "Professional Headshots",
      "Lifestyle Portraits",
      "Studio Sessions"
    ],
    price: "From $300"
  },
  {
    title: "Event Photography",
    description: "Complete coverage of corporate events, conferences, and special occasions.",
    features: [
      "Corporate Events",
      "Conferences",
      "Product Launches",
      "Awards Ceremonies",
      "Networking Events"
    ],
    price: "From $800"
  },
  {
    title: "Product Photography",
    description: "High-quality product photography for e-commerce and marketing materials.",
    features: [
      "E-commerce Photos",
      "Product Catalogs",
      "Lifestyle Shots",
      "White Background",
      "Detail Shots"
    ],
    price: "From $200"
  }
]

const portfolioItems = [
  {
    title: "Corporate Event Coverage",
    description: "Singapore Tech Conference 2024",
    category: "Events"
  },
  {
    title: "Executive Portraits",
    description: "Fortune 500 Company Leadership",
    category: "Corporate"
  },
  {
    title: "Product Photography",
    description: "E-commerce Fashion Brand",
    category: "Product"
  },
  {
    title: "Family Portrait Session",
    description: "Luxury Residential Shoot",
    category: "Portrait"
  }
]

export default function PhotoShooting() {
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
              <span className="text-primary-500">Photo Shooting</span>
            </Heading>
            
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              Expert photography services for corporate events, portraits, products, and special occasions in Singapore.
            </p>
            
            <Button href="/contact" variant="primary" className="mb-8" data-aos="fade-up" data-aos-delay="200">
              Book Your Session
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Photo Shooting Services
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive photography solutions tailored to your specific needs and requirements
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {photoServices.map((service, index) => (
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

      {/* Portfolio Preview */}
      <Section padding="lg" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Recent Work
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse of our recent photography projects in Singapore
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <span className="text-primary-600 font-medium">Portfolio Image</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div data-aos="fade-right">
              <Heading level={2} variant="section" className="mb-6">
                Our Photo Shooting Process
              </Heading>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">We discuss your vision, requirements, and preferred style to understand your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Planning & Preparation</h3>
                    <p className="text-gray-600">We plan the shoot details, scout locations, and prepare all necessary equipment.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Photo Session</h3>
                    <p className="text-gray-600">Professional execution with attention to lighting, composition, and capturing the perfect moments.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Post-Production & Delivery</h3>
                    <p className="text-gray-600">Professional editing, retouching, and delivery of high-resolution images within 5-7 business days.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-medium">Process Showcase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Equipment & Expertise */}
      <Section padding="lg" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Professional Equipment & Expertise
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use state-of-the-art equipment and techniques to deliver exceptional results
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center" data-aos="fade-up">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Professional Cameras
              </Heading>
              <p className="text-gray-600">
                Latest Canon and Sony professional cameras with high-resolution sensors for crisp, detailed images.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Studio Lighting
              </Heading>
              <p className="text-gray-600">
                Professional studio lighting equipment for perfect illumination in any environment or setting.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Expert Editing
              </Heading>
              <p className="text-gray-600">
                Professional post-production using Adobe Creative Suite for color correction, retouching, and enhancement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" className="bg-primary-500">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level={2} variant="section" className="text-white mb-6">
            Ready to Book Your Photo Session?
          </Heading>
          <p className="text-xl text-primary-100 mb-8">
            Contact us today to discuss your photography needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Get Quote
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
