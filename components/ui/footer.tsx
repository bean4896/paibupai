import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          {/* Top area */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-12 md:mb-6">
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="inline-flex group mb-8 sm:mb-0" href="/" aria-label="Paibupai">
                <Image
                  src="/logo_paibupai.png"
                  alt="Paibupai Logo"
                  width={3553}
                  height={3547}
                  className="h-[100px] w-auto transition duration-150 ease-in-out group-hover:opacity-80"
                />
              </Link>
            </div>
          </div>
          {/* Bottom area */}
          <div className="text-center md:flex md:items-center md:justify-between mb-8 md:mb-6">
            {/* Social links */}
            <SocialLinks className="mb-4 md:order-2 md:ml-4 md:mb-0" />
            
            {/* Left links */}
            <div className="text-sm font-medium md:order-1 space-x-6 mb-2 md:mb-0">
              <a className="text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline" href="/about">
                About
              </a>
              <a className="text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline" href="/services">
                Services
              </a>
              <a className="text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline" href="/blog">
                Blog
              </a>
              <a className="text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline" href="/contact">
                Contact
              </a>
            </div>
          </div>
          {/* Bottom notes */}
          <div className="text-xs text-gray-400 text-center md:text-left">
            © 2024 Paibupai Photography. All rights reserved. Professional photography services in Singapore.
            We are committed to delivering exceptional visual content for your business and personal needs.
            For inquiries about our services or to discuss your photography requirements, please{' '}
            <a className="font-medium text-primary-500 decoration-primary-500 underline-offset-2 hover:underline" href="/contact">
              contact us
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}
