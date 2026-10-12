import { promises as fs } from 'fs'
import path from 'path'
import { get, put } from '@vercel/blob'
import { getSlot, isSlotId, TIME_SLOTS, type SlotId } from './config'

export type BookingRecord = {
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

type StoreShape = { bookings: BookingRecord[] }

const FILE_PATH = path.join(process.cwd(), 'data', 'bookings.json')
const BLOB_PATH = 'bookings/bookings.json'
const REDIS_PREFIX = 'paibupai:booking:'

let writeChain: Promise<unknown> = Promise.resolve()

function withLock<T>(fn: () => Promise<T>) {
  const run = writeChain.then(fn, fn)
  writeChain = run.then(
    () => undefined,
    () => undefined,
  )
  return run
}

function emptyStore(): StoreShape {
  return { bookings: [] }
}

function redisEnabled() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}

function blobEnabled() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID)
}

function onVercel() {
  return process.env.VERCEL === '1'
}

export function bookingStorageKind(): 'redis' | 'blob' | 'file' | 'unconfigured' {
  if (redisEnabled()) return 'redis'
  if (blobEnabled()) return 'blob'
  if (onVercel()) return 'unconfigured'
  return 'file'
}

export class BookingStorageError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BookingStorageError'
  }
}

async function redisCommand<T>(command: (string | number)[]): Promise<T> {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) throw new Error('Redis is not configured')

  const response = await fetch(`${url.replace(/\/$/, '')}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([command]),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Redis ${response.status}`)
  }

  const payload = (await response.json()) as Array<{ result: T }>
  return payload[0]?.result
}

async function redisPipeline(commands: (string | number)[][]) {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) throw new Error('Redis is not configured')

  const response = await fetch(`${url.replace(/\/$/, '')}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Redis ${response.status}`)
  }

  return (await response.json()) as Array<{ result: unknown }>
}

async function readFileStore(): Promise<StoreShape> {
  try {
    const raw = await fs.readFile(FILE_PATH, 'utf8')
    const parsed = JSON.parse(raw) as StoreShape
    return { bookings: Array.isArray(parsed.bookings) ? parsed.bookings : [] }
  } catch {
    return emptyStore()
  }
}

async function writeFileStore(store: StoreShape) {
  await fs.mkdir(path.dirname(FILE_PATH), { recursive: true })
  await fs.writeFile(FILE_PATH, `${JSON.stringify(store, null, 2)}\n`, 'utf8')
}

async function readBlobStore(): Promise<StoreShape> {
  const result = await get(BLOB_PATH, { access: 'private', useCache: false })
  if (!result || result.statusCode !== 200 || !result.stream) {
    return emptyStore()
  }

  const raw = await new Response(result.stream).text()
  const parsed = JSON.parse(raw) as StoreShape
  return { bookings: Array.isArray(parsed.bookings) ? parsed.bookings : [] }
}

async function writeBlobStore(store: StoreShape) {
  await put(BLOB_PATH, JSON.stringify(store), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 0,
  })
}

async function readJsonStore(): Promise<StoreShape> {
  const kind = bookingStorageKind()
  if (kind === 'blob') return readBlobStore()
  if (kind === 'file') return readFileStore()
  throw new BookingStorageError(
    'Booking storage is not configured for Vercel. Create a private Blob store in the project Storage tab.',
  )
}

async function writeJsonStore(store: StoreShape) {
  const kind = bookingStorageKind()
  if (kind === 'blob') return writeBlobStore(store)
  if (kind === 'file') return writeFileStore(store)
  throw new BookingStorageError(
    'Booking storage is not configured for Vercel. Create a private Blob store in the project Storage tab.',
  )
}

export type SlotAvailability = {
  id: SlotId
  label: string
  capacity: number
  booked: number
  remaining: number
}

function countsFromBookings(bookings: BookingRecord[], date: string): SlotAvailability[] {
  return TIME_SLOTS.map((slot) => {
    const booked = bookings.filter((item) => item.date === date && item.slotId === slot.id).length
    return {
      id: slot.id,
      label: slot.label,
      capacity: slot.capacity,
      booked,
      remaining: Math.max(0, slot.capacity - booked),
    }
  })
}

export async function getSlotAvailability(date: string): Promise<SlotAvailability[]> {
  if (bookingStorageKind() === 'redis') {
    const results = await redisPipeline(TIME_SLOTS.map((slot) => ['GET', `${REDIS_PREFIX}${date}:${slot.id}`]))
    return TIME_SLOTS.map((slot, index) => {
      const booked = Number(results[index]?.result ?? 0) || 0
      return {
        id: slot.id,
        label: slot.label,
        capacity: slot.capacity,
        booked,
        remaining: Math.max(0, slot.capacity - booked),
      }
    })
  }

  const store = await readJsonStore()
  return countsFromBookings(store.bookings, date)
}

function parseBookingRecord(value: unknown): BookingRecord | null {
  if (!value || typeof value !== 'object') return null
  const item = value as Partial<BookingRecord>
  const slotId = typeof item.slotId === 'string' ? item.slotId : ''
  if (
    typeof item.id !== 'string' ||
    typeof item.createdAt !== 'string' ||
    typeof item.name !== 'string' ||
    typeof item.phone !== 'string' ||
    typeof item.date !== 'string' ||
    !isSlotId(slotId)
  ) {
    return null
  }

  return {
    id: item.id,
    createdAt: item.createdAt,
    name: item.name,
    phone: item.phone,
    customerType: item.customerType === 'existing' ? 'existing' : 'new',
    customerCode: typeof item.customerCode === 'string' ? item.customerCode : '',
    businessType: typeof item.businessType === 'string' ? item.businessType : '',
    serviceInterest: typeof item.serviceInterest === 'string' ? item.serviceInterest : '',
    date: item.date,
    slotId,
    remark: typeof item.remark === 'string' ? item.remark : '',
  }
}

export async function listBookings(): Promise<BookingRecord[]> {
  const kind = bookingStorageKind()
  if (kind === 'unconfigured') return []

  if (kind === 'redis') {
    const rows = (await redisCommand<string[] | null>(['LRANGE', `${REDIS_PREFIX}log`, 0, 499])) ?? []
    return rows
      .map((row) => {
        try {
          return parseBookingRecord(JSON.parse(row))
        } catch {
          return null
        }
      })
      .filter((item): item is BookingRecord => Boolean(item))
  }

  const store = await readJsonStore()
  return [...store.bookings].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export async function deleteBookings(ids: string[]) {
  const uniqueIds = [...new Set(ids.filter(Boolean))]
  if (!uniqueIds.length) return { deleted: 0, bookings: await listBookings() }

  return withLock(async () => {
    if (bookingStorageKind() === 'redis') {
      const rows = (await redisCommand<string[] | null>(['LRANGE', `${REDIS_PREFIX}log`, 0, 499])) ?? []
      const keep: string[] = []
      let deleted = 0
      const decr = new Map<string, number>()

      for (const row of rows) {
        try {
          const parsed = parseBookingRecord(JSON.parse(row))
          if (parsed && uniqueIds.includes(parsed.id)) {
            deleted += 1
            const key = `${REDIS_PREFIX}${parsed.date}:${parsed.slotId}`
            decr.set(key, (decr.get(key) ?? 0) + 1)
            continue
          }
        } catch {
          // keep unreadable rows
        }
        keep.push(row)
      }

      const commands: (string | number)[][] = [['DEL', `${REDIS_PREFIX}log`]]
      if (keep.length) {
        commands.push(['RPUSH', `${REDIS_PREFIX}log`, ...keep.reverse()])
      }
      for (const [key, count] of decr) {
        commands.push(['DECRBY', key, count])
      }
      if (commands.length > 1 || keep.length === 0) {
        await redisPipeline(commands)
      }

      return { deleted, bookings: await listBookings() }
    }

    const store = await readJsonStore()
    const next = store.bookings.filter((item) => !uniqueIds.includes(item.id))
    const deleted = store.bookings.length - next.length
    if (deleted) {
      await writeJsonStore({ bookings: next })
    }
    return { deleted, bookings: [...next].sort((a, b) => b.createdAt.localeCompare(a.createdAt)) }
  })
}

export async function addBooking(input: Omit<BookingRecord, 'id' | 'createdAt'>) {
  return withLock(async () => {
    const slot = getSlot(input.slotId)

    if (bookingStorageKind() === 'redis') {
      const key = `${REDIS_PREFIX}${input.date}:${input.slotId}`
      const booked = Number((await redisCommand<string | number | null>(['GET', key])) ?? 0) || 0
      if (booked >= slot.capacity) {
        return { ok: false as const, availability: await getSlotAvailability(input.date) }
      }

      await redisPipeline([
        ['INCR', key],
        [
          'LPUSH',
          `${REDIS_PREFIX}log`,
          JSON.stringify({
            ...input,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
          }),
        ],
      ])

      return { ok: true as const, availability: await getSlotAvailability(input.date) }
    }

    const store = await readJsonStore()
    const booked = store.bookings.filter((item) => item.date === input.date && item.slotId === input.slotId).length
    if (booked >= slot.capacity) {
      return { ok: false as const, availability: countsFromBookings(store.bookings, input.date) }
    }

    store.bookings.push({
      ...input,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    })
    await writeJsonStore(store)

    return { ok: true as const, availability: countsFromBookings(store.bookings, input.date) }
  })
}
