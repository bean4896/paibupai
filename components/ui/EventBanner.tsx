import Section from './Section'
import Heading from './Heading'
import Button from './Button'
import Image from 'next/image'

interface EventData {
  isActive: boolean
  title: string
  subtitle: string
  description: string
  date: string
  location: string
  ctaText: string
  ctaLink: string
  backgroundImage?: string
  badge?: string
}

interface EventBannerProps {
  event: EventData
}

export default function EventBanner({ event }: EventBannerProps) {
  if (!event.isActive) {
    return null
  }

  return (
    <Section
      padding="none"
      className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 pointer-events-none -z-10" />
      
      {event.backgroundImage && (
        <Image
          src={event.backgroundImage}
          alt={event.title}
          fill
          className="object-cover"
        />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {event.badge && (
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6" data-aos="fade-up">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {event.badge}
            </div>
          )}

          {/* Main Content */}
          <Heading
            level={1}
            variant="display"
            className="text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {event.title}
          </Heading>

          <Heading
            level={2}
            variant="section"
            className="text-primary-100 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {event.subtitle}
          </Heading>

          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            {event.description}
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center text-white">
              <svg className="w-5 h-5 mr-2 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">{event.date}</span>
            </div>
            <div className="flex items-center text-white">
              <svg className="w-5 h-5 mr-2 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">{event.location}</span>
            </div>
          </div>

          {/* CTA Button */}
          <div data-aos="fade-up" data-aos-delay="500">
            <Button 
              href={event.ctaLink} 
              variant="secondary"
              className="bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 shadow-lg"
            >
              {event.ctaText}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
    </Section>
  )
}
