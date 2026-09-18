import { NextResponse } from 'next/server'
import { dateClosedReason, isSlotId } from '@/lib/booking/config'
import { sendBookingEmail } from '@/lib/booking/email'
import { addBooking, BookingStorageError } from '@/lib/booking/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function readString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null
  if (!body) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const name = readString(body.name)
  const phone = readString(body.phone)
  const businessType = readString(body.businessType)
  const serviceInterest = readString(body.serviceInterest)
  const date = readString(body.date)
  const slotId = readString(body.slotId)
  const remark = readString(body.remark)

  if (!name || !phone || !businessType || !serviceInterest || !date || !isSlotId(slotId)) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }

  const closed = dateClosedReason(date)
  if (closed) {
    return NextResponse.json(
      { error: 'That date is closed. Please pick a Monday–Saturday working day.' },
      { status: 400 },
    )
  }

  let result
  try {
    result = await addBooking({
      name,
      phone,
      businessType,
      serviceInterest,
      date,
      slotId,
      remark,
    })
  } catch (error) {
    const message = error instanceof BookingStorageError ? error.message : 'Could not save this booking.'
    console.error('[booking] storage failed', error)
    return NextResponse.json({ error: message }, { status: 503 })
  }

  if (!result.ok) {
    return NextResponse.json(
      {
        error: 'That time slot is fully booked. Please pick another slot.',
        slots: result.availability,
      },
      { status: 409 },
    )
  }

  try {
    await sendBookingEmail({
      name,
      phone,
      businessType,
      serviceInterest,
      date,
      slotId,
      remark,
      availability: result.availability,
    })
  } catch (error) {
    console.error('[booking] email failed', error)
    return NextResponse.json(
      {
        error: 'Booking was saved, but the notification email failed. Please follow up manually.',
        slots: result.availability,
        saved: true,
      },
      { status: 502 },
    )
  }

  const taken = result.availability.find((item) => item.id === slotId)

  return NextResponse.json({
    ok: true,
    date,
    slotId,
    remaining: taken?.remaining ?? 0,
    slots: result.availability,
  })
}
