import { NextResponse } from 'next/server'
import { dateClosedReason, holidayName } from '@/lib/booking/config'
import { BookingStorageError, getSlotAvailability } from '@/lib/booking/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get('date') || ''
  const closed = dateClosedReason(date)

  if (closed) {
    return NextResponse.json({
      date,
      bookable: false,
      reason: closed,
      holidayName: holidayName(date),
      slots: [],
    })
  }

  try {
    const slots = await getSlotAvailability(date)
    return NextResponse.json({
      date,
      bookable: true,
      reason: null,
      holidayName: null,
      slots,
    })
  } catch (error) {
    const message = error instanceof BookingStorageError ? error.message : 'Could not load remaining slots.'
    console.error('[booking] availability failed', error)
    return NextResponse.json({ error: message, date, bookable: false, slots: [] }, { status: 503 })
  }
}
