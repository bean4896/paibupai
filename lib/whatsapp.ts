export const WHATSAPP_E164 = '6586862765'

type BookingWhatsAppPayload = {
  name: string
  phone: string
  customerType: 'new' | 'existing'
  customerCode: string
  businessType: string
  serviceInterest: string
  dateLabel: string
  slot: string
  remark: string
}

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_E164}`
  if (!text?.trim()) return base
  return `${base}?text=${encodeURIComponent(text)}`
}

export function bookingWhatsAppMessage(input: BookingWhatsAppPayload) {
  const customer =
    input.customerType === 'existing' && input.customerCode
      ? `Existing customer · ${input.customerCode}`
      : 'New customer'

  return [
    'Hi Paibupai, I just submitted a booking request.',
    '',
    `Name: ${input.name}`,
    `Phone / WhatsApp: ${input.phone}`,
    `Customer: ${customer}`,
    `Business type: ${input.businessType}`,
    `Service interest: ${input.serviceInterest}`,
    `Preferred date: ${input.dateLabel}`,
    `Appointment slot: ${input.slot}`,
    `Remark: ${input.remark.trim() || '—'}`,
  ].join('\n')
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hi Paibupai, I would like to enquire about your content services.'
