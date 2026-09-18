import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './css/style.css'
import ClientLayout from './client-layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const cabinet = localFont({
  src: [
    {
      path: '../public/fonts/CabinetGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/CabinetGrotesk-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/CabinetGrotesk-Extrabold.woff2',
      weight: '800',
    },
  ],
  variable: '--font-cabinet-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Paibupai Photography - Professional Photography Services in Singapore',
  description: 'Premier photography agency in Singapore specializing in photo shooting, social media marketing, and event planning. Capture your moments with Paibupai.',
  keywords: ['photography Singapore', 'event photography', 'professional photographer', 'photo shoot', 'social media content', 'corporate photography'],
  authors: [{ name: 'Paibupai Photography' }],
  openGraph: {
    title: 'Paibupai Photography - Professional Photography Services in Singapore',
    description: 'Premier photography agency in Singapore specializing in photo shooting, social media marketing, and event planning.',
    type: 'website',
    locale: 'en_SG',
    siteName: 'Paibupai Photography',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paibupai Photography - Professional Photography Services in Singapore',
    description: 'Premier photography agency in Singapore specializing in photo shooting, social media marketing, and event planning.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cabinet.variable} font-inter antialiased bg-white text-gray-800 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  )
}
