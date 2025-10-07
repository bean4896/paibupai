export const metadata = {
  title: 'About - Paibupai Photography',
  description: 'Learn about Paibupai, Singapore\'s premier photography agency specializing in creative visual storytelling and professional photography services.',
}

import { Section, Heading, Button } from '@/components/ui'
import Image from 'next/image'

export default function About() {
  return (
    <>233
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
              Capturing Singapore's{' '}
              <span className="text-primary-500">Creative Spirit</span>
            </Heading>
            
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              We are Paibupai, Singapore's premier photography agency dedicated to bringing your vision to life through stunning visual storytelling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Button href="/contact" variant="primary">
                Get In Touch
              </Button>
              <Button href="/services" variant="secondary">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Story Section */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div data-aos="fade-right">
              <Heading level={2} variant="section" className="mb-6">
                Our Story
              </Heading>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in Singapore, Paibupai has been at the forefront of creative photography for over a decade. 
                  We specialize in capturing the unique essence of Singapore's vibrant culture and modern lifestyle.
                </p>
                <p>
                  Our team of talented photographers and creative professionals work together to deliver exceptional 
                  visual content that tells your story in the most compelling way possible.
                </p>
                <p>
                  From corporate events to social media campaigns, we bring creativity, professionalism, and 
                  Singapore's distinctive flair to every project we undertake.
                </p>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-medium">Team Photo Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section padding="lg" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Our Values
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Paibupai
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center" data-aos="fade-up">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Creativity
              </Heading>
              <p className="text-gray-600">
                We push boundaries and explore new perspectives to create unique, memorable visual experiences.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Quality
              </Heading>
              <p className="text-gray-600">
                Every project receives our full attention to detail and commitment to delivering exceptional results.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <Heading level={3} variant="section" className="mb-3">
                Community
              </Heading>
              <p className="text-gray-600">
                We believe in building lasting relationships with our clients and contributing to Singapore's creative community.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="section" className="mb-4">
              Meet Our Team
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented professionals passionate about visual storytelling
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center" data-aos="fade-up">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-medium">Team Member 1</span>
                </div>
              </div>
              <Heading level={4} variant="section" className="mb-2">
                Sarah Chen
              </Heading>
              <p className="text-primary-600 font-medium mb-2">Lead Photographer</p>
              <p className="text-gray-600 text-sm">
                Specializing in corporate and event photography with 8+ years of experience in Singapore.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-medium">Team Member 2</span>
                </div>
              </div>
              <Heading level={4} variant="section" className="mb-2">
                Marcus Lim
              </Heading>
              <p className="text-primary-600 font-medium mb-2">Creative Director</p>
              <p className="text-gray-600 text-sm">
                Expert in social media marketing and visual storytelling with a passion for Singapore culture.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-medium">Team Member 3</span>
                </div>
              </div>
              <Heading level={4} variant="section" className="mb-2">
                Priya Sharma
              </Heading>
              <p className="text-primary-600 font-medium mb-2">Event Coordinator</p>
              <p className="text-gray-600 text-sm">
                Specializing in event planning and coordination with deep knowledge of Singapore venues.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" className="bg-primary-500">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level={2} variant="section" className="text-white mb-6">
            Ready to Work With Us?
          </Heading>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss your photography needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Get In Touch
            </Button>
            <Button href="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-500">
              View Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
