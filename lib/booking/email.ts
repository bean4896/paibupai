import nodemailer from 'nodemailer'
import { BOOKING_EMAIL, formatLongDate, getSlot, type SlotId } from './config'
import type { SlotAvailability } from './store'

type BookingMail = {
  name: string
  phone: string
  customerType: 'new' | 'existing'
  customerCode: string
  businessType: string
  serviceInterest: string
  date: string
  slotId: SlotId
  remark: string
  availability: SlotAvailability[]
}

function customerLine(input: BookingMail) {
  if (input.customerType === 'existing') {
    return `Existing customer · ${input.customerCode}`
  }
  return 'New customer'
}

function remainingLines(availability: SlotAvailability[]) {
  return availability
    .map((slot) => {
      const left = `${slot.remaining}/${slot.capacity} left`
      return `• ${slot.label}: ${left}${slot.remaining === 0 ? ' — FULL' : ''}`
    })
    .join('\n')
}

function buildMessage(input: BookingMail) {
  const slot = getSlot(input.slotId)
  const taken = input.availability.find((item) => item.id === input.slotId)
  const takenLine = taken ? `${taken.remaining}/${taken.capacity} left after this booking` : ''

  return [
    'New Paibupai booking',
    '',
    `Name: ${input.name}`,
    `Phone / WhatsApp: ${input.phone}`,
    `Customer: ${customerLine(input)}`,
    `Business type: ${input.businessType}`,
    `Service interest: ${input.serviceInterest}`,
    `Date: ${formatLongDate(input.date)} (${input.date})`,
    `Time slot: ${slot.label}`,
    `This slot now: ${takenLine}`,
    `Remark: ${input.remark.trim() || '—'}`,
    '',
    `Remaining slots on ${input.date}:`,
    remainingLines(input.availability),
  ].join('\n')
}

function buildHtml(input: BookingMail) {
  const slot = getSlot(input.slotId)
  const taken = input.availability.find((item) => item.id === input.slotId)
  const rows = [
    ['Name', input.name],
    ['Phone / WhatsApp', input.phone],
    ['Customer', customerLine(input)],
    ['Business type', input.businessType],
    ['Service interest', input.serviceInterest],
    ['Date', `${formatLongDate(input.date)} (${input.date})`],
    ['Time slot', slot.label],
    ['This slot now', taken ? `${taken.remaining}/${taken.capacity} left` : '—'],
    ['Remark', input.remark.trim() || '—'],
  ]

  const remaining = input.availability
    .map((item) => {
      const status = item.remaining === 0 ? 'FULL' : `${item.remaining}/${item.capacity} left`
      return `<tr><td style="padding:8px 0;border-bottom:1px solid #eee;">${item.label}</td><td style="padding:8px 0;border-bottom:1px solid #eee;text-align:right;">${status}</td></tr>`
    })
    .join('')

  return `
    <div style="font-family:Arial,sans-serif;color:#2C2825;max-width:560px;">
      <h2 style="margin:0 0 16px;">New Paibupai booking</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#8A847C;width:160px;">${label}</td><td style="padding:8px 0;border-bottom:1px solid #eee;">${value}</td></tr>`,
          )
          .join('')}
      </table>
      <h3 style="margin:24px 0 8px;">Remaining slots on ${input.date}</h3>
      <table style="width:100%;border-collapse:collapse;">${remaining}</table>
    </div>
  `
}

async function sendViaGmail(subject: string, text: string, html: string) {
  const user = process.env.GMAIL_USER || BOOKING_EMAIL
  const pass = process.env.GMAIL_APP_PASSWORD
  if (!pass) return false

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  })

  await transporter.sendMail({
    from: `Paibupai Booking <${user}>`,
    to: BOOKING_EMAIL,
    subject,
    text,
    html,
  })

  return true
}

async function sendViaResend(subject: string, text: string, html: string) {
  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) return false

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'Paibupai Booking <booking@paibupai.sg>',
      to: [BOOKING_EMAIL],
      subject,
      text,
      html,
    }),
  })

  if (!response.ok) {
    throw new Error(`Resend failed: ${response.status} ${await response.text()}`)
  }

  return true
}

export async function sendBookingEmail(input: BookingMail) {
  const slot = getSlot(input.slotId)
  const text = buildMessage(input)
  const html = buildHtml(input)
  const subject = `Paibupai booking — ${input.date} ${slot.label}`

  if (await sendViaResend(subject, text, html)) return true
  if (await sendViaGmail(subject, text, html)) return true

  console.warn('[booking] No email provider configured. Set RESEND_API_KEY on Vercel.')
  return false
}
