import React from 'react'
import Link from 'next/link'
import { socialMediaConfig } from '@/lib/social-config'

interface SocialLink {
  name: string
  href: string
  icon: React.JSX.Element
  ariaLabel: string
}

interface SocialLinksProps {
  className?: string
  iconClassName?: string
}

export default function SocialLinks({ className = '', iconClassName = '' }: SocialLinksProps) {
  const socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      href: socialMediaConfig.instagram.url,
      ariaLabel: 'Follow us on Instagram',
      icon: (
        <svg className={`w-8 h-8 fill-current ${iconClassName}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20.145" cy="11.892" r="1" />
          <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
          <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: socialMediaConfig.tiktok.url,
      ariaLabel: 'Follow us on TikTok',
      icon: (
        <svg className={`w-8 h-8 fill-current ${iconClassName}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 0 0 2.189 5.213l-.002-.002A8.77 8.77 0 0 0 29 8.45l.028.002v5.036a13.327 13.327 0 0 1-5.331-1.247l.082.034a15.385 15.385 0 0 1-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 0 1-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 0 1-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 0 1-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 0 0-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 0 0 4.382 3.586h-.009a4.198 4.198 0 0 0 3.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: socialMediaConfig.facebook.url,
      ariaLabel: 'Follow us on Facebook',
      icon: (
        <svg className={`w-8 h-8 fill-current ${iconClassName}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
        </svg>
      ),
    },
  ]

  return (
    <ul className={`inline-flex ${className}`}>
      {socialLinks.map((social, index) => (
        <li key={social.name} className={index > 0 ? 'ml-4' : ''}>
          <Link
            href={social.href}
            className="flex justify-center items-center text-primary-500 bg-primary-100 hover:text-white hover:bg-primary-500 rounded-full transition duration-150 ease-in-out"
            aria-label={social.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}
