'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isInternal = pathname.startsWith('/internal') || pathname.startsWith('/interal')

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    })
  })

  if (isInternal) {
    return <main className="grow">{children}</main>
  }

  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}
