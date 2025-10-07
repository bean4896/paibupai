import type { Metadata } from 'next'
import '@/app/css/style.css'
import ClientLayout from './client-layout'

export const metadata: Metadata = {
  title: 'Paibupai Photography - Professional Photography Services in Singapore',
  description: 'Premier photography services in Singapore specializing in event photography, social media content, and professional photoshoots. Capture your moments with Paibupai.',
  keywords: ['photography Singapore', 'event photography', 'professional photographer', 'photo shoot', 'social media content', 'corporate photography'],
  authors: [{ name: 'Paibupai Photography' }],
  openGraph: {
    title: 'Paibupai Photography - Professional Photography Services in Singapore',
    description: 'Premier photography services in Singapore specializing in event photography, social media content, and professional photoshoots.',
    type: 'website',
    locale: 'en_SG',
    siteName: 'Paibupai Photography',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paibupai Photography - Professional Photography Services in Singapore',
    description: 'Premier photography services in Singapore specializing in event photography, social media content, and professional photoshoots.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter tracking-tight text-gray-900 antialiased">
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  )
}