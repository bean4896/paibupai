import Dashboard from '@/components/internal/Dashboard'
import { bannerStorageKind, getBanners } from '@/lib/banners/store'
import { bookingStorageKind, listBookings } from '@/lib/booking/store'

export const dynamic = 'force-dynamic'

export default async function InternalPage() {
  const [banners, bookings] = await Promise.all([getBanners(), listBookings()])

  return (
    <Dashboard
      banners={banners}
      bookings={bookings}
      bannerStorage={bannerStorageKind()}
      bookingStorage={bookingStorageKind()}
    />
  )
}
