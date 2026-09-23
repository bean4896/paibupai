'use client'

import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '@/lib/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-20 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#1ebe5d] md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
