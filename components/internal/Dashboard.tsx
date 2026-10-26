'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  formatLongDate,
  slotLabelForDate,
  slotsForDate,
  TIME_SLOTS,
  todayInSingapore,
  upcomingOpenDates,
  type SlotId,
} from '@/lib/booking/config'
import { DEFAULT_BANNERS, MAX_BANNERS, type BannerSlide } from '@/lib/banners/types'

type BookingRow = {
  id: string
  createdAt: string
  name: string
  phone: string
  customerType: 'new' | 'existing'
  customerCode: string
  businessType: string
  serviceInterest: string
  date: string
  slotId: SlotId
  remark: string
}

type DashboardProps = {
  banners: BannerSlide[]
  bookings: BookingRow[]
  bannerStorage: string
  bookingStorage: string
}

function formatWhen(iso: string) {
  return new Intl.DateTimeFormat('en-SG', {
    timeZone: 'Asia/Singapore',
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(iso))
}

function emptyBanner(index: number): BannerSlide {
  return {
    id: `banner-${Date.now()}-${index}`,
    src: '',
    alt: '',
    href: '#book',
  }
}

function occupancy(rows: BookingRow[], date: string) {
  return slotsForDate(date).map((slot) => {
    const booked = rows.filter((item) => item.date === date && item.slotId === slot.id).length
    return { ...slot, booked, remaining: Math.max(0, slot.capacity - booked) }
  })
}

export default function Dashboard({ banners, bookings, bannerStorage, bookingStorage }: DashboardProps) {
  const router = useRouter()
  const today = todayInSingapore()
  const [slides, setSlides] = useState<BannerSlide[]>(banners.length ? banners : DEFAULT_BANNERS)
  const [rows, setRows] = useState<BookingRow[]>(bookings)
  const [saving, setSaving] = useState(false)
  const [deletingId, setDeletingId] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [dateFilter, setDateFilter] = useState('')
  const [slotFilter, setSlotFilter] = useState('')
  const [range, setRange] = useState<'upcoming' | 'all'>('upcoming')

  const openDates = useMemo(() => upcomingOpenDates(14, today), [today])

  const upcomingCount = useMemo(() => rows.filter((item) => item.date >= today).length, [rows, today])
  const todayCount = useMemo(() => rows.filter((item) => item.date === today).length, [rows, today])

  const filteredBookings = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return [...rows]
      .filter((item) => (range === 'upcoming' ? item.date >= today : true))
      .filter((item) => (dateFilter ? item.date === dateFilter : true))
      .filter((item) => (slotFilter ? item.slotId === slotFilter : true))
      .filter((item) => {
        if (!needle) return true
        return [item.name, item.phone, item.customerCode, item.businessType, item.serviceInterest, item.remark]
          .join(' ')
          .toLowerCase()
          .includes(needle)
      })
      .sort((a, b) => a.date.localeCompare(b.date) || a.slotId.localeCompare(b.slotId) || b.createdAt.localeCompare(a.createdAt))
  }, [dateFilter, query, range, rows, slotFilter, today])

  function updateSlide(index: number, patch: Partial<BannerSlide>) {
    setSlides((current) => current.map((slide, i) => (i === index ? { ...slide, ...patch } : slide)))
  }

  async function saveBanners() {
    setSaving(true)
    setError('')
    setMessage('')
    const response = await fetch('/api/internal/banners', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ banners: slides }),
    })
    const payload = (await response.json().catch(() => null)) as
      | { error?: string; banners?: BannerSlide[] }
      | null
    setSaving(false)
    if (!response.ok) {
      setError(payload?.error || 'Could not save banners.')
      return
    }
    if (payload?.banners) setSlides(payload.banners)
    setMessage('Homepage banners saved.')
    router.refresh()
  }

  async function removeBooking(id: string) {
    setDeletingId(id)
    setError('')
    const response = await fetch('/api/internal/bookings', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: [id] }),
    })
    const payload = (await response.json().catch(() => null)) as
      | { error?: string; bookings?: BookingRow[] }
      | null
    setDeletingId('')
    if (!response.ok) {
      setError(payload?.error || 'Could not delete that booking.')
      return
    }
    if (payload?.bookings) setRows(payload.bookings)
    router.refresh()
  }

  async function signOut() {
    await fetch('/api/internal/logout', { method: 'POST' })
    router.replace('/internal/login')
    router.refresh()
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-accent uppercase">Internal</p>
          <h1 className="font-cabinet-grotesk mt-2 text-3xl font-extrabold tracking-tight">Booking dashboard</h1>
          <p className="mt-2 text-sm text-muted">
            From Nov: Mon–Fri 4/4/2 · Sat 3/3/2 · Sun 1/1. Afternoon 3:15–6:30. Storage: {bookingStorage}.
          </p>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="rounded-full border border-black/10 px-4 py-2 text-xs tracking-wide text-ink hover:border-accent/50"
        >
          Sign out
        </button>
      </header>

      {error ? <p className="mt-6 text-sm text-accent">{error}</p> : null}
      {message ? <p className="mt-6 text-sm text-ink">{message}</p> : null}

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        <article className="rounded-2xl border border-black/5 bg-white p-5">
          <p className="text-[11px] tracking-[0.16em] text-muted uppercase">All bookings</p>
          <p className="font-cabinet-grotesk mt-2 text-3xl font-extrabold">{rows.length}</p>
        </article>
        <article className="rounded-2xl border border-black/5 bg-white p-5">
          <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Upcoming</p>
          <p className="font-cabinet-grotesk mt-2 text-3xl font-extrabold">{upcomingCount}</p>
        </article>
        <article className="rounded-2xl border border-black/5 bg-white p-5">
          <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Today</p>
          <p className="font-cabinet-grotesk mt-2 text-3xl font-extrabold">{todayCount}</p>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="font-cabinet-grotesk text-2xl font-bold">Next 14 open days</h2>
        <p className="mt-1 text-sm text-muted">Filled seats against the current three windows.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {openDates.map((date) => {
            const slots = occupancy(rows, date)
            const taken = slots.reduce((sum, slot) => sum + slot.booked, 0)
            return (
              <button
                key={date}
                type="button"
                onClick={() => {
                  setDateFilter(date)
                  setRange('all')
                }}
                className={`rounded-2xl border bg-white p-4 text-left transition ${
                  dateFilter === date ? 'border-accent' : 'border-black/5 hover:border-black/15'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{formatLongDate(date)}</p>
                    <p className="mt-1 text-xs text-muted">{taken} booked</p>
                  </div>
                  {date === today ? (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] tracking-wide text-accent uppercase">
                      Today
                    </span>
                  ) : null}
                </div>
                <ul className="mt-4 grid gap-2">
                  {slots.map((slot) => (
                    <li key={slot.id} className="flex items-center justify-between text-xs">
                      <span className="text-muted">{slot.label}</span>
                      <span className={slot.remaining === 0 ? 'font-semibold text-accent' : 'text-ink'}>
                        {slot.booked}/{slot.capacity}
                        {slot.remaining === 0 ? ' full' : ''}
                      </span>
                    </li>
                  ))}
                </ul>
              </button>
            )
          })}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-cabinet-grotesk text-2xl font-bold">Bookings</h2>
            <p className="mt-1 text-sm text-muted">
              {filteredBookings.length} shown
              {dateFilter ? ` · ${dateFilter}` : ''}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setRange('upcoming')}
              className={`rounded-full border px-3 py-2 text-xs tracking-wide ${
                range === 'upcoming' ? 'border-accent bg-accent/10 text-ink' : 'border-black/10 text-muted'
              }`}
            >
              Upcoming
            </button>
            <button
              type="button"
              onClick={() => setRange('all')}
              className={`rounded-full border px-3 py-2 text-xs tracking-wide ${
                range === 'all' ? 'border-accent bg-accent/10 text-ink' : 'border-black/10 text-muted'
              }`}
            >
              All
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_180px_180px]">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            placeholder="Search name, phone, code, remark"
          />
          <input
            type="date"
            value={dateFilter}
            onChange={(event) => setDateFilter(event.target.value)}
            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent"
          />
          <select
            value={slotFilter}
            onChange={(event) => setSlotFilter(event.target.value)}
            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent"
          >
            <option value="">All slots</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot.id} value={slot.id}>
                {slot.label}
              </option>
            ))}
          </select>
        </div>

        {dateFilter || slotFilter || query ? (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setDateFilter('')
              setSlotFilter('')
            }}
            className="mt-3 text-xs tracking-wide text-muted hover:text-accent"
          >
            Clear filters
          </button>
        ) : null}

        {filteredBookings.length === 0 ? (
          <p className="mt-6 rounded-2xl border border-black/5 bg-white p-6 text-sm text-muted">No bookings in this view.</p>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-black/5 bg-white">
            <table className="min-w-[960px] w-full text-left text-sm">
              <thead className="bg-warm text-[11px] tracking-[0.14em] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium">Date / slot</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Phone</th>
                  <th className="px-4 py-3 font-medium">Client</th>
                  <th className="px-4 py-3 font-medium">Business</th>
                  <th className="px-4 py-3 font-medium">Service</th>
                  <th className="px-4 py-3 font-medium">Remark</th>
                  <th className="px-4 py-3 font-medium">Submitted</th>
                  <th className="px-4 py-3 font-medium" />
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="border-t border-black/5 align-top">
                    <td className="px-4 py-3">
                      <div className="font-medium">{booking.date}</div>
                      <div className="text-muted">{slotLabelForDate(booking.date, booking.slotId)}</div>
                    </td>
                    <td className="px-4 py-3 font-medium">{booking.name}</td>
                    <td className="px-4 py-3">{booking.phone}</td>
                    <td className="px-4 py-3">
                      {booking.customerType === 'existing' ? booking.customerCode || 'Existing' : 'New'}
                    </td>
                    <td className="px-4 py-3">{booking.businessType}</td>
                    <td className="px-4 py-3">{booking.serviceInterest}</td>
                    <td className="px-4 py-3 text-muted">{booking.remark || '—'}</td>
                    <td className="px-4 py-3 text-muted">{formatWhen(booking.createdAt)}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        disabled={deletingId === booking.id}
                        onClick={() => removeBooking(booking.id)}
                        className="text-xs tracking-wide text-muted hover:text-accent disabled:opacity-40"
                      >
                        {deletingId === booking.id ? 'Deleting…' : 'Delete'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-cabinet-grotesk text-2xl font-bold">Homepage banners</h2>
            <p className="mt-1 text-sm text-muted">
              Image URL or local path like <code>/static/banner1.jpg</code>. Storage: {bannerStorage}.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={slides.length >= MAX_BANNERS}
              onClick={() => setSlides((current) => [...current, emptyBanner(current.length + 1)])}
              className="rounded-full border border-black/10 px-4 py-2 text-xs tracking-wide disabled:opacity-40"
            >
              Add slide
            </button>
            <button
              type="button"
              onClick={saveBanners}
              disabled={saving}
              className="rounded-full border-2 border-accent bg-coffee px-4 py-2 text-xs font-bold tracking-wide text-cream uppercase disabled:opacity-50"
            >
              {saving ? 'Saving…' : 'Save banners'}
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          {slides.map((slide, index) => (
            <article key={slide.id} className="grid gap-4 rounded-2xl border border-black/5 bg-white p-5 md:grid-cols-[220px_1fr]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-warm">
                {slide.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={slide.src} alt={slide.alt || 'Banner preview'} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-muted">No image</div>
                )}
              </div>
              <div className="grid gap-3">
                <label className="text-[11px] tracking-[0.16em] text-muted uppercase">
                  Image URL
                  <input
                    value={slide.src}
                    onChange={(event) => updateSlide(index, { src: event.target.value })}
                    className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
                    placeholder="https://… or /static/banner1.jpg"
                  />
                </label>
                <label className="text-[11px] tracking-[0.16em] text-muted uppercase">
                  Alt text
                  <input
                    value={slide.alt}
                    onChange={(event) => updateSlide(index, { alt: event.target.value })}
                    className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
                  />
                </label>
                <div className="flex flex-wrap items-end gap-3">
                  <label className="min-w-[200px] flex-1 text-[11px] tracking-[0.16em] text-muted uppercase">
                    Click through
                    <input
                      value={slide.href}
                      onChange={(event) => updateSlide(index, { href: event.target.value })}
                      className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
                      placeholder="#book"
                    />
                  </label>
                  <button
                    type="button"
                    disabled={slides.length <= 1}
                    onClick={() => setSlides((current) => current.filter((_, i) => i !== index))}
                    className="rounded-full border border-black/10 px-3 py-2 text-xs text-muted disabled:opacity-40"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
