export const BOOKING_EMAIL = process.env.BOOKING_EMAIL || 'muxinphotographer@gmail.com'
export const BOOKING_TZ = 'Asia/Singapore'

export const TIME_SLOTS = [
  { id: 'morning', label: '9:45 AM – 12:45 PM', capacity: 3 },
  { id: 'midday', label: '12:00 PM – 2:00 PM', capacity: 1 },
  { id: 'afternoon', label: '2:45 PM – 5:45 PM', capacity: 3 },
  { id: 'evening', label: '6:30 PM – 9:00 PM', capacity: 1 },
  { id: 'fullday', label: 'Full day', capacity: 2 },
] as const

export type SlotId = (typeof TIME_SLOTS)[number]['id']

export const SLOT_IDS = TIME_SLOTS.map((slot) => slot.id)

export function isSlotId(value: string): value is SlotId {
  return SLOT_IDS.includes(value as SlotId)
}

export function getSlot(id: SlotId) {
  const slot = TIME_SLOTS.find((item) => item.id === id)
  if (!slot) throw new Error(`Unknown slot: ${id}`)
  return slot
}

/** Singapore gazette holidays + weekday-in-lieu dates, 2026–2027. */
export const SG_HOLIDAYS: Record<string, string> = {
  '2026-01-01': "New Year's Day",
  '2026-02-17': 'Chinese New Year',
  '2026-02-18': 'Chinese New Year',
  '2026-03-21': 'Hari Raya Puasa',
  '2026-04-03': 'Good Friday',
  '2026-05-01': 'Labour Day',
  '2026-05-27': 'Hari Raya Haji',
  '2026-05-31': 'Vesak Day',
  '2026-06-01': 'Vesak Day (observed)',
  '2026-08-09': 'National Day',
  '2026-08-10': 'National Day (observed)',
  '2026-11-08': 'Deepavali',
  '2026-11-09': 'Deepavali (observed)',
  '2026-12-25': 'Christmas Day',
  '2027-01-01': "New Year's Day",
  '2027-02-06': 'Chinese New Year',
  '2027-02-07': 'Chinese New Year',
  '2027-02-08': 'Chinese New Year (observed)',
  '2027-03-10': 'Hari Raya Puasa',
  '2027-03-26': 'Good Friday',
  '2027-05-01': 'Labour Day',
  '2027-05-17': 'Hari Raya Haji',
  '2027-05-20': 'Vesak Day',
  '2027-08-09': 'National Day',
  '2027-10-28': 'Deepavali',
  '2027-12-25': 'Christmas Day',
}

export const BOOKING_OPENS_ON = '2026-09-30'

export function todayInSingapore() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: BOOKING_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
}

export function earliestBookableDate() {
  const today = todayInSingapore()
  return today > BOOKING_OPENS_ON ? today : BOOKING_OPENS_ON
}

export function parseSingaporeDate(isoDate: string) {
  return new Date(`${isoDate}T12:00:00+08:00`)
}

export function weekdayInSingapore(isoDate: string) {
  return parseSingaporeDate(isoDate).getDay()
}

export function isSunday(isoDate: string) {
  return weekdayInSingapore(isoDate) === 0
}

export function holidayName(isoDate: string) {
  return SG_HOLIDAYS[isoDate] ?? null
}

export function dateClosedReason(isoDate: string): 'past' | 'sunday' | 'holiday' | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return 'past'
  if (isoDate < earliestBookableDate()) return 'past'
  if (isSunday(isoDate)) return 'sunday'
  if (holidayName(isoDate)) return 'holiday'
  return null
}

export function formatLongDate(isoDate: string) {
  return new Intl.DateTimeFormat('en-SG', {
    timeZone: BOOKING_TZ,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(parseSingaporeDate(isoDate))
}
