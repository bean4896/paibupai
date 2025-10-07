import { Metadata } from 'next'
import { Section, Heading } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Blog - Paibupai Photography',
  description: 'Read our latest photography tips, Singapore event coverage, and creative insights from Paibupai\'s photography experts.',
}

export default function Blog() {

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
              Photography{' '}
              <span className="text-primary-500">Insights & Tips</span>
            </Heading>
            
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              Stay updated with the latest photography trends, Singapore event coverage, and professional insights from our team.
            </p>
          </div>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're working on creating amazing photography content for you. Stay tuned for professional tips, Singapore event coverage, and creative insights!
              </p>
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-900 mb-2">What to Expect</h4>
                <ul className="text-sm text-primary-800 text-left space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Photography tips and techniques
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Singapore event coverage and stories
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Behind-the-scenes insights
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Industry trends and updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
