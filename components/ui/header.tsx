'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function homeHash(isHomePage: boolean, hash: string) {
  return isHomePage ? hash : `/${hash}`
}

const navLinkClass =
  'font-cabinet-grotesk text-[12px] font-bold tracking-[0.16em] text-[#1C1816] uppercase transition hover:text-[#FF5722] md:text-[13px]'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header
      className={
        isHomePage
          ? 'sticky top-0 w-full z-30 bg-white/95 backdrop-blur-md border-b border-gray-100'
          : 'absolute w-full z-30'
      }
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24 md:h-28 py-4">
          <div className="shrink-0 mr-4 p-2">
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

          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <a href={homeHash(isHomePage, '#services')} className={navLinkClass}>
              Our Service
            </a>
            <a href={homeHash(isHomePage, '#clients')} className={navLinkClass}>
              Our Client
            </a>
            <a
              href={homeHash(isHomePage, '#book')}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#1C1816] px-4 py-2.5 font-cabinet-grotesk text-[12px] font-bold tracking-[0.16em] text-[#FAF9F6] uppercase shadow-[0_8px_20px_rgba(28,24,22,0.18)] transition duration-200 hover:bg-[#2A2421] sm:px-5 md:text-[13px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722] transition-transform duration-200 group-hover:scale-125" />
              Book Us
              <span aria-hidden="true" className="text-[#FF5722] transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
