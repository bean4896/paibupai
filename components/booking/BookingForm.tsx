'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import {
  earliestBookableDate,
  formatCustomerCode,
  formatLongDate,
  holidayName,
  isSunday,
  parseSingaporeDate,
  type CustomerPrefix,
  type CustomerType,
  type SlotId,
} from '@/lib/booking/config'

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
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/50 hover:border-black/20 focus:border-accent focus:ring-2 focus:ring-accent/15'
const selectClass =
  'w-full cursor-pointer rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none transition hover:border-black/20 focus:border-accent focus:ring-2 focus:ring-accent/15'
const labelClass = 'mb-2 block text-[11px] tracking-[0.14em] uppercase text-muted'

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
  const firstOpen = earliestBookableDate()
  const firstOpenDate = parseSingaporeDate(firstOpen)
  const [monthCursor, setMonthCursor] = useState({
    year: firstOpenDate.getFullYear(),
    month: firstOpenDate.getMonth(),
  })
  const [date, setDate] = useState('')
  const [slotId, setSlotId] = useState<SlotId | ''>('')
  const [customerType, setCustomerType] = useState<CustomerType>('new')
  const [codePrefix, setCodePrefix] = useState<CustomerPrefix>('P')
  const [codeNumber, setCodeNumber] = useState('')
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
    monthCursor.year > firstOpenDate.getFullYear() ||
    (monthCursor.year === firstOpenDate.getFullYear() && monthCursor.month > firstOpenDate.getMonth())

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

  const formattedCode = customerType === 'existing' ? formatCustomerCode(codePrefix, codeNumber) : null

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!date || !slotId) {
      setError('Please pick a date and time slot.')
      return
    }
    if (!customerType) {
      setError('Please tell us if you are a new or existing customer.')
      return
    }

    const customerCode =
      customerType === 'existing' ? formatCustomerCode(codePrefix, codeNumber) : ''
    if (customerType === 'existing' && !customerCode) {
      setError('Enter a valid client code: P001–P500 or IP001–IP200.')
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
          customerType,
          customerCode,
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

      const slot = slots.find((item) => item.id === slotId)
      setSuccess({ date, slot: slot?.label || slotId })
      formRef.current?.reset()
      setDate('')
      setSlotId('')
      setSlots([])
      setCustomerType('new')
      setCodePrefix('P')
      setCodeNumber('')
    } catch {
      setError('Could not submit the booking. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_16px_48px_rgba(28,24,22,0.06)] md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cta-name" className={labelClass}>
            Name
          </label>
          <input id="cta-name" name="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="cta-phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input id="cta-phone" name="phone" required className={fieldClass} />
        </div>
      </div>

      <div>
        <p className={labelClass}>Customer</p>
        <div className="grid gap-2 sm:grid-cols-2" role="radiogroup" aria-label="Customer type">
          {(
            [
              { value: 'new', label: 'New customer' },
              { value: 'existing', label: 'Existing customer' },
            ] as const
          ).map((option) => {
            const selected = customerType === option.value
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => {
                  setCustomerType(option.value)
                  if (option.value === 'new') setCodeNumber('')
                }}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  selected
                    ? 'border-accent bg-accent text-white shadow-[0_8px_20px_rgba(255,87,34,0.22)]'
                    : 'border-accent/50 bg-white text-ink hover:border-accent'
                }`}
              >
                {option.label}
              </button>
            )
          })}
        </div>
      </div>

      {customerType === 'existing' ? (
        <div>
          <label htmlFor="cta-client-code" className={labelClass}>
            Client code
          </label>
          <div className="flex overflow-hidden rounded-xl border border-accent/50 bg-white transition focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15">
            <div className="flex border-r border-accent/30">
              {(['P', 'IP'] as const).map((prefix) => {
                const selected = codePrefix === prefix
                return (
                  <button
                    key={prefix}
                    type="button"
                    onClick={() => setCodePrefix(prefix)}
                    className={`min-w-14 px-4 py-3 text-sm font-semibold transition ${
                      selected ? 'bg-accent text-white' : 'text-muted hover:bg-warm hover:text-ink'
                    }`}
                    aria-pressed={selected}
                  >
                    {prefix}
                  </button>
                )
              })}
            </div>
            <input
              id="cta-client-code"
              inputMode="numeric"
              autoComplete="off"
              maxLength={3}
              value={codeNumber}
              onChange={(event) => setCodeNumber(event.target.value.replace(/\D/g, '').slice(0, 3))}
              placeholder="Your client code"
              className="min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/50"
            />
            {formattedCode ? (
              <span className="flex items-center pr-4 font-cabinet-grotesk text-sm font-bold tracking-wide text-coffee">
                {formattedCode}
              </span>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cta-business" className={labelClass}>
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
          <label htmlFor="cta-service" className={labelClass}>
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
        <p className={labelClass}>Preferred date</p>
        <div className="max-w-xl rounded-2xl border border-black/5 bg-warm p-4 md:p-5">
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
              className="rounded-full px-3 py-1 text-sm text-ink transition hover:bg-white disabled:opacity-30"
              aria-label="Previous month"
            >
              ←
            </button>
            <p className="font-cabinet-grotesk text-sm font-bold tracking-wide text-coffee">
              {monthLabel(monthCursor.year, monthCursor.month)}
            </p>
            <button
              type="button"
              onClick={() =>
                setMonthCursor((current) =>
                  current.month === 11
                    ? { year: current.year + 1, month: 0 }
                    : { year: current.year, month: current.month + 1 },
                )
              }
              className="rounded-full px-3 py-1 text-sm text-ink transition hover:bg-white"
              aria-label="Next month"
            >
              →
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] tracking-wide text-muted">
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
              const past = cell.iso < firstOpen
              const disabled = closedSunday || Boolean(holiday) || past
              const selected = date === cell.iso
              return (
                <button
                  key={cell.iso}
                  type="button"
                  disabled={disabled}
                  onClick={() => setDate(cell.iso)}
                  className={`flex h-10 flex-col items-center justify-center rounded-lg text-xs outline-none transition ${
                    selected
                      ? 'bg-accent font-semibold text-white'
                      : disabled
                        ? 'cursor-not-allowed text-coffee/25'
                        : 'cursor-pointer text-ink hover:bg-white'
                  }`}
                >
                  {cell.day}
                  {holiday ? <span className="text-[8px] leading-none text-muted">PH</span> : null}
                </button>
              )
            })}
          </div>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-muted">
          Monday–Saturday only, from 1 October 2026. Sundays and public holidays are closed. If you need those dates, please call us.
        </p>
      </div>

      <div>
        <p className={labelClass}>Appointment slot</p>
        {!date ? (
          <p className="text-sm text-muted">Pick a date to see appointment times.</p>
        ) : loadingSlots ? (
          <p className="text-sm text-muted">Loading times…</p>
        ) : (
          <div className="grid gap-2 sm:grid-cols-2">
            {slots.map((slot) => {
              const full = slot.remaining <= 0
              const selected = slotId === slot.id
              return (
                <button
                  key={slot.id}
                  type="button"
                  disabled={full}
                  onClick={() => setSlotId(slot.id)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                    selected
                      ? 'border-accent bg-accent text-white shadow-[0_8px_20px_rgba(255,87,34,0.18)]'
                      : full
                        ? 'cursor-not-allowed border-accent/20 bg-warm text-coffee/30'
                        : 'cursor-pointer border-accent/50 bg-white text-ink hover:border-accent'
                  }`}
                >
                  {slot.label}
                </button>
              )
            })}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="cta-remark" className={labelClass}>
          Remark
        </label>
        <textarea
          id="cta-remark"
          name="remark"
          rows={3}
          placeholder="Anything we should know before the meeting"
          className={`${fieldClass} resize-none`}
        />
      </div>

      {error ? <p className="text-sm text-accent">{error}</p> : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center gap-2.5 rounded-full border-2 border-accent bg-coffee px-7 py-3 font-cabinet-grotesk text-sm font-bold tracking-[0.16em] text-cream uppercase transition hover:bg-coffee-soft disabled:opacity-60"
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
            className="mt-7 inline-flex rounded-full border-2 border-accent bg-[#1C1816] px-6 py-2.5 text-sm font-medium tracking-wide text-[#FAF9F6]"
          >
            Close
          </button>
        </DialogPanel>
      </div>
    </Dialog>
    </>
  )
}
