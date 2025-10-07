'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header({ nav = true }: {
  nav?: boolean
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ]

  const services = [
    { name: 'Photo Shooting', href: '/services/photoshooting' },
    { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
    { name: 'Event Planning', href: '/services/event-planning' },
  ]

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24 md:h-28 py-4">
          {/* Site branding */}
          <div className="shrink-0 mr-6 p-2">
            {/* Logo */}
            <Link className="block group" href="/" aria-label="Paibupai">
              <Image
                src="/logo_paibupai.png"
                alt="Paibupai Logo"
                width={3553}
                height={3547}
                className="h-[100px] w-auto transition duration-150 ease-in-out group-hover:opacity-80 md:h-[100px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          {nav && (
            <>
              <nav className="hidden lg:flex grow">
                <ul className="flex grow justify-center space-x-8">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      {item.name === 'Services' ? (
                        <div className="relative group">
                          <Link
                            className={`font-medium px-3 py-2 flex items-center transition duration-150 ease-in-out ${
                              isHomePage 
                                ? 'text-white hover:text-primary-200' 
                                : 'text-gray-600 hover:text-primary-600'
                            }`}
                            href={item.href}
                          >
                            {item.name}
                            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </Link>
                          {/* Services dropdown */}
                          <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="py-2">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition duration-150 ease-in-out"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          className={`font-medium px-3 py-2 flex items-center transition duration-150 ease-in-out ${
                            isHomePage 
                              ? 'text-white hover:text-primary-200' 
                              : 'text-gray-600 hover:text-primary-600'
                          }`}
                          href={item.href}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                
                {/* CTA button */}
                <div className="flex items-center">
                  <Link className="btn-sm text-white bg-primary-500 hover:bg-primary-600 shadow-sm" href="/contact">
                    Contact Us
                  </Link>
                </div>
              </nav>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`focus:outline-none ${
                    isHomePage
                      ? 'text-white hover:text-primary-200 focus:text-primary-200'
                      : 'text-gray-600 hover:text-primary-600 focus:text-primary-600'
                  }`}
                  aria-label="Toggle mobile menu"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile menu */}
        {nav && mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.name === 'Services' ? (
                    <div>
                      <button
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition duration-150 ease-in-out"
                      >
                        {item.name}
                        <svg 
                          className={`h-4 w-4 transition-transform duration-200 ${servicesExpanded ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {servicesExpanded && (
                        <div className="pl-4 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-md transition duration-150 ease-in-out"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition duration-150 ease-in-out"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-md transition duration-150 ease-in-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}