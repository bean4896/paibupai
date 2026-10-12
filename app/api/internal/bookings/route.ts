import { NextResponse } from 'next/server'
import { bookingStorageKind, BookingStorageError, deleteBookings, listBookings } from '@/lib/booking/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    return NextResponse.json({
      bookings: await listBookings(),
      storage: bookingStorageKind(),
    })
  } catch (error) {
    const message = error instanceof BookingStorageError ? error.message : 'Could not load bookings.'
    return NextResponse.json({ error: message }, { status: 503 })
  }
}

export async function DELETE(request: Request) {
  const body = (await request.json().catch(() => null)) as { ids?: unknown } | null
  const ids = Array.isArray(body?.ids) ? body.ids.filter((id): id is string => typeof id === 'string') : []
  if (!ids.length) {
    return NextResponse.json({ error: 'Pick at least one booking to delete.' }, { status: 400 })
  }

  try {
    const result = await deleteBookings(ids)
    return NextResponse.json({
      ok: true,
      deleted: result.deleted,
      bookings: result.bookings,
      storage: bookingStorageKind(),
    })
  } catch (error) {
    const message = error instanceof BookingStorageError ? error.message : 'Could not delete bookings.'
    return NextResponse.json({ error: message }, { status: 503 })
  }
}
