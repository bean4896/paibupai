'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import {
  formatLongDate,
  holidayName,
  isSunday,
  parseSingaporeDate,
  todayInSingapore,
  type SlotId,
} from '@/lib/booking/config'
import { sendBookingViaFormSubmit } from '@/lib/booking/formsubmit'

const businessTypes = [
  'Corporate Brand',
  'SME',
  'Chain Store',
  'F&B',
  'Real Estate',
  'Founder / Personal IP',
  'Manufacturing',
  'Other',
]
const serviceInterests = [
  'Content Strategy & Studio',
  'Social Media Marketing',
  'Live Streaming',
  'Signage / Offline',
  'Academy / Training',
  '12-Month Partnership',
]

const fieldClass =
  'w-full rounded-lg border border-white/12 bg-white/4 px-4 py-3 text-sm text-cream outline-none focus:border-accent'
const selectClass =
  'w-full rounded-lg border border-white/12 bg-coffee-soft px-4 py-3 text-sm text-cream outline-none focus:border-accent'

type SlotState = {
  id: SlotId
  label: string
  capacity: number
  booked: number
  remaining: number
}

function toIsoDate(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function monthLabel(year: number, month: number) {
  return new Intl.DateTimeFormat('en-SG', { month: 'long', year: 'numeric' }).format(new Date(year, month, 1))
}

export default function BookingForm() {
  const today = todayInSingapore()
  const todayDate = parseSingaporeDate(today)
  const [monthCursor, setMonthCursor] = useState({ year: todayDate.getFullYear(), month: todayDate.getMonth() })
  const [date, setDate] = useState('')
  const [slotId, setSlotId] = useState<SlotId | ''>('')
  const [slots, setSlots] = useState<SlotState[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState<{ date: string; slot: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const days = useMemo(() => {
    const first = new Date(monthCursor.year, monthCursor.month, 1)
    const startWeekday = (first.getDay() + 6) % 7
    const lastDate = new Date(monthCursor.year, monthCursor.month + 1, 0).getDate()
    const cells: Array<{ iso: string; day: number } | null> = []
    for (let i = 0; i < startWeekday; i += 1) cells.push(null)
    for (let day = 1; day <= lastDate; day += 1) {
      cells.push({ iso: toIsoDate(monthCursor.year, monthCursor.month, day), day })
    }
    return cells
  }, [monthCursor])

  const canGoPrev =
    monthCursor.year > todayDate.getFullYear() ||
    (monthCursor.year === todayDate.getFullYear() && monthCursor.month > todayDate.getMonth())

  useEffect(() => {
    if (!date) {
      setSlots([])
      setSlotId('')
      return
    }

    let cancelled = false
    setLoadingSlots(true)
    setError('')

    fetch(`/api/booking/availability?date=${date}`)
      .then(async (response) => {
        const payload = await response.json()
        if (cancelled) return
        if (!response.ok) {
          setSlots([])
          setError(payload.error || 'Could not load remaining slots. Please try again.')
          return
        }
        setSlots(Array.isArray(payload.slots) ? payload.slots : [])
        setSlotId('')
      })
      .catch(() => {
        if (!cancelled) setError('Could not load remaining slots. Please try again.')
      })
      .finally(() => {
        if (!cancelled) setLoadingSlots(false)
      })

    return () => {
      cancelled = true
    }
  }, [date])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!date || !slotId) {
      setError('Please pick a date and time slot.')
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/booking/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          businessType: data.get('businessType'),
          serviceInterest: data.get('serviceInterest'),
          date,
          slotId,
          remark: data.get('remark'),
        }),
      })
      const payload = await response.json()

      if (Array.isArray(payload.slots)) setSlots(payload.slots)

      if (!response.ok) {
        setSlotId('')
        setError(payload.error || 'Could not submit the booking.')
        return
      }

      if (!payload.emailSent) {
        const availability = Array.isArray(payload.slots) ? payload.slots : []
        void sendBookingViaFormSubmit({
          name: String(data.get('name') || ''),
          phone: String(data.get('phone') || ''),
          businessType: String(data.get('businessType') || ''),
          serviceInterest: String(data.get('serviceInterest') || ''),
          date,
          slotId,
          remark: String(data.get('remark') || ''),
          availability,
        }).catch((error) => {
          console.error('[booking] FormSubmit failed', error)
        })
      }

      const slot = slots.find((item) => item.id === slotId)
      setSuccess({ date, slot: slot?.label || slotId })
      formRef.current?.reset()
      setDate('')
      setSlotId('')
      setSlots([])
    } catch {
      setError('Could not submit the booking. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="cta-name" className="mb-2 block text-xs tracking-wide text-cream/60">
          Name
        </label>
        <input id="cta-name" name="name" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="cta-phone" className="mb-2 block text-xs tracking-wide text-cream/60">
          Phone / WhatsApp
        </label>
        <input id="cta-phone" name="phone" required className={fieldClass} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cta-business" className="mb-2 block text-xs tracking-wide text-cream/60">
            Business Type
          </label>
          <select id="cta-business" name="businessType" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {businessTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cta-service" className="mb-2 block text-xs tracking-wide text-cream/60">
            Service Interest
          </label>
          <select id="cta-service" name="serviceInterest" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {serviceInterests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs tracking-wide text-cream/60">Preferred date</p>
        <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() =>
                setMonthCursor((current) =>
                  current.month === 0
                    ? { year: current.year - 1, month: 11 }
                    : { year: current.year, month: current.month - 1 },
                )
              }
              disabled={!canGoPrev}
              className="rounded-full px-3 py-1 text-sm text-cream/70 disabled:opacity-30"
              aria-label="Previous month"
            >
              ←
            </button>
            <p className="font-cabinet-grotesk text-sm font-bold tracking-wide">{monthLabel(monthCursor.year, monthCursor.month)}</p>
            <button
              type="button"
              onClick={() =>
                setMonthCursor((current) =>
                  current.month === 11
                    ? { year: current.year + 1, month: 0 }
                    : { year: current.year, month: current.month + 1 },
                )
              }
              className="rounded-full px-3 py-1 text-sm text-cream/70"
              aria-label="Next month"
            >
              →
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] tracking-wide text-cream/40">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((label) => (
              <div key={label} className="py-1">
                {label}
              </div>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-7 gap-1">
            {days.map((cell, index) => {
              if (!cell) return <div key={`empty-${index}`} />
              const closedSunday = isSunday(cell.iso)
              const holiday = holidayName(cell.iso)
              const past = cell.iso < today
              const disabled = closedSunday || Boolean(holiday) || past
              const selected = date === cell.iso
              return (
                <button
                  key={cell.iso}
                  type="button"
                  disabled={disabled}
                  onClick={() => setDate(cell.iso)}
                  className={`flex h-10 flex-col items-center justify-center rounded-lg text-xs transition ${
                    selected
                      ? 'bg-accent text-white'
                      : disabled
                        ? 'cursor-not-allowed text-cream/25'
                        : 'text-cream hover:bg-white/8'
                  }`}
                >
                  {cell.day}
                  {holiday ? <span className="text-[8px] leading-none text-cream/35">PH</span> : null}
                </button>
              )
            })}
          </div>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-cream/40">
          Monday–Saturday only. Sundays and public holidays are closed. If you need those dates, please call us.
        </p>
      </div>

      <div>
        <p className="mb-2 text-xs tracking-wide text-cream/60">Appointment slot</p>
        {!date ? (
          <p className="text-sm text-cream/45">Pick a date to see remaining slots.</p>
        ) : loadingSlots ? (
          <p className="text-sm text-cream/45">Checking remaining slots…</p>
        ) : (
          <div className="grid gap-2">
            {slots.map((slot) => {
              const full = slot.remaining <= 0
              const selected = slotId === slot.id
              return (
                <button
                  key={slot.id}
                  type="button"
                  disabled={full}
                  onClick={() => setSlotId(slot.id)}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition ${
                    selected
                      ? 'border-accent bg-accent text-white'
                      : full
                        ? 'cursor-not-allowed border-white/8 text-cream/30'
                        : 'border-white/12 text-cream hover:border-accent'
                  }`}
                >
                  <span>{slot.label}</span>
                  <span className={`text-xs ${selected ? 'text-white/80' : 'text-cream/45'}`}>
                    {full ? 'Fully booked' : `${slot.remaining} of ${slot.capacity} left`}
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="cta-remark" className="mb-2 block text-xs tracking-wide text-cream/60">
          Remark
        </label>
        <textarea
          id="cta-remark"
          name="remark"
          rows={3}
          placeholder="Anything we should know before the meeting"
          className={`${fieldClass} resize-none placeholder:text-cream/25`}
        />
      </div>

      {error ? <p className="text-sm text-accent">{error}</p> : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-[#e64a19] disabled:opacity-60"
      >
        {submitting ? 'SENDING…' : 'GET YOUR CONTENT PLAN'}
      </button>
    </form>

    <Dialog open={Boolean(success)} onClose={() => setSuccess(null)} className="relative z-50">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-3xl bg-[#FAF9F6] p-8 text-[#2C2825] shadow-2xl">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5722] text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12.5 9.5 17 19 7" />
            </svg>
          </div>
          <DialogTitle className="font-cabinet-grotesk text-2xl font-extrabold tracking-tight">
            Booking received
          </DialogTitle>
          <p className="mt-3 text-sm leading-relaxed text-[#8A847C]">
            {success ? `${formatLongDate(success.date)} · ${success.slot}` : ''}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#8A847C]">
            We&apos;ll follow up based on your business type and needs.
          </p>
          <button
            type="button"
            onClick={() => setSuccess(null)}
            className="mt-7 inline-flex rounded-full bg-[#1C1816] px-6 py-2.5 text-sm font-medium tracking-wide text-[#FAF9F6]"
          >
            Close
          </button>
        </DialogPanel>
      </div>
    </Dialog>
    </>
  )
}
