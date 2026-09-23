'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

function homeHash(isHomePage: boolean, hash: string) {
  return isHomePage ? hash : `/${hash}`
}

const desktopNavLinkClass =
  'font-cabinet-grotesk text-[12px] font-bold tracking-[0.16em] text-[#1C1816] uppercase transition hover:text-[#FF5722] md:text-[13px]'

const mobileNavLinkClass =
  'font-cabinet-grotesk text-[15px] font-bold tracking-[0.18em] text-[#1C1816] uppercase transition hover:text-[#FF5722]'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isServicesPage = pathname.startsWith('/services')
  const isAboutPage = pathname.startsWith('/about')
  const isWorkPage = pathname.startsWith('/portfolio')
  const stickyHeader = isHomePage || isServicesPage || isAboutPage || isWorkPage
  const menuRef = useRef<HTMLDetailsElement>(null)

  const closeMenu = () => {
    menuRef.current?.removeAttribute('open')
    document.body.style.overflow = ''
  }

  useEffect(() => {
    closeMenu()
  }, [pathname])

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    const onToggle = () => {
      document.body.style.overflow = menu.open ? 'hidden' : ''
    }

    menu.addEventListener('toggle', onToggle)
    return () => {
      menu.removeEventListener('toggle', onToggle)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <header
      className={
        stickyHeader
          ? 'sticky top-0 z-30 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md'
          : 'absolute top-0 z-30 w-full has-[[open]]:border-b has-[[open]]:border-gray-100 has-[[open]]:bg-white'
      }
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-28 md:py-4">
          <div className="mr-4 shrink-0">
            <Link className="group block" href="/" aria-label="Paibupai" onClick={closeMenu}>
              <Image
                src="/logo_paibupai.png"
                alt="Paibupai Logo"
                width={3553}
                height={3547}
                className="h-12 w-auto transition duration-150 ease-in-out group-hover:opacity-80 md:h-[100px]"
                priority
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-4 sm:gap-6 md:flex md:gap-8">
            <Link
              href="/services"
              className={`${desktopNavLinkClass} ${isServicesPage ? 'text-[#FF5722]' : ''}`}
            >
              Our Service
            </Link>
            <Link
              href="/portfolio"
              className={`${desktopNavLinkClass} ${isWorkPage ? 'text-[#FF5722]' : ''}`}
            >
              Our Work
            </Link>
            <Link
              href="/about"
              className={`${desktopNavLinkClass} ${isAboutPage ? 'text-[#FF5722]' : ''}`}
            >
              About
            </Link>
            <a href={homeHash(isHomePage, '#clients')} className={desktopNavLinkClass}>
              Our Client
            </a>
            <a
              href={homeHash(isHomePage, '#book')}
              className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[#FF5722] bg-[#1C1816] px-4 py-2.5 font-cabinet-grotesk text-[12px] font-bold tracking-[0.16em] text-[#FAF9F6] uppercase shadow-[0_8px_20px_rgba(28,24,22,0.18)] transition duration-200 hover:bg-[#2A2421] sm:px-5 md:text-[13px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722] transition-transform duration-200 group-hover:scale-125" />
              Book Us
              <span aria-hidden="true" className="text-[#FF5722] transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </nav>

          <details ref={menuRef} className="group relative z-40 shrink-0 md:hidden">
            <summary
              className="relative flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full [&::-webkit-details-marker]:hidden"
              aria-label="Menu"
            >
              <span className="absolute h-[1.5px] w-5 bg-[#1C1816] transition duration-200 -translate-y-1.5 group-open:translate-y-0 group-open:rotate-45" />
              <span className="absolute h-[1.5px] w-5 bg-[#1C1816] transition duration-200 group-open:opacity-0" />
              <span className="absolute h-[1.5px] w-5 bg-[#1C1816] transition duration-200 translate-y-1.5 group-open:translate-y-0 group-open:-rotate-45" />
            </summary>

            <div className="fixed top-16 right-0 bottom-0 left-0 z-20 bg-[#1C1816]/40" onClick={closeMenu} />
            <nav className="fixed top-16 right-0 left-0 z-30 border-b border-gray-100 bg-white">
              <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8">
                <Link
                  href="/services"
                  className={`${mobileNavLinkClass} ${isServicesPage ? 'text-[#FF5722]' : ''}`}
                  onClick={closeMenu}
                >
                  Our Service
                </Link>
                <Link
                  href="/portfolio"
                  className={`${mobileNavLinkClass} ${isWorkPage ? 'text-[#FF5722]' : ''}`}
                  onClick={closeMenu}
                >
                  Our Work
                </Link>
                <Link
                  href="/about"
                  className={`${mobileNavLinkClass} ${isAboutPage ? 'text-[#FF5722]' : ''}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
                <a
                  href={homeHash(isHomePage, '#clients')}
                  className={mobileNavLinkClass}
                  onClick={closeMenu}
                >
                  Our Client
                </a>
                <a
                  href={homeHash(isHomePage, '#book')}
                  className="inline-flex w-fit items-center gap-2.5 rounded-full border-2 border-[#FF5722] bg-[#1C1816] px-5 py-3 font-cabinet-grotesk text-[13px] font-bold tracking-[0.16em] text-[#FAF9F6] uppercase"
                  onClick={closeMenu}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
                  Book Us
                  <span aria-hidden="true" className="text-[#FF5722]">
                    →
                  </span>
                </a>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
