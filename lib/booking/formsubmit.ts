import { BOOKING_EMAIL, formatLongDate, getSlot, type SlotId } from './config'
import type { SlotAvailability } from './store'

type BookingNotice = {
  name: string
  phone: string
  businessType: string
  serviceInterest: string
  date: string
  slotId: SlotId
  remark: string
  availability: SlotAvailability[]
}

function remainingLines(availability: SlotAvailability[]) {
  return availability
    .map((slot) => {
      const left = `${slot.remaining}/${slot.capacity} left`
      return `• ${slot.label}: ${left}${slot.remaining === 0 ? ' — FULL' : ''}`
    })
    .join('\n')
}

export async function sendBookingViaFormSubmit(input: BookingNotice) {
  const slot = getSlot(input.slotId)
  const subject = `Paibupai booking — ${input.date} ${slot.label}`
  const message = [
    'New Paibupai booking',
    '',
    `Name: ${input.name}`,
    `Phone / WhatsApp: ${input.phone}`,
    `Business type: ${input.businessType}`,
    `Service interest: ${input.serviceInterest}`,
    `Date: ${formatLongDate(input.date)} (${input.date})`,
    `Time slot: ${slot.label}`,
    `Remark: ${input.remark.trim() || '—'}`,
    '',
    `Remaining slots on ${input.date}:`,
    remainingLines(input.availability),
  ].join('\n')

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(BOOKING_EMAIL)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: subject,
      _template: 'box',
      _captcha: false,
      name: input.name,
      phone: input.phone,
      businessType: input.businessType,
      serviceInterest: input.serviceInterest,
      date: `${formatLongDate(input.date)} (${input.date})`,
      timeSlot: slot.label,
      remark: input.remark.trim() || '—',
      remainingToday: remainingLines(input.availability),
      message,
    }),
  })

  const payload = (await response.json().catch(() => null)) as { success?: string | boolean } | null
  return payload?.success === true || payload?.success === 'true'
}
