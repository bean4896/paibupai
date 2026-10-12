import { NextResponse } from 'next/server'
import {
  INTERNAL_COOKIE,
  INTERNAL_COOKIE_MAX_AGE,
  internalPasswordConfigured,
  internalToken,
} from '@/lib/internal/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  if (!internalPasswordConfigured()) {
    return NextResponse.json(
      { error: 'INTERNAL_PASSWORD is not set. Add it in Vercel Environment Variables.' },
      { status: 503 },
    )
  }

  const body = (await request.json().catch(() => null)) as { password?: unknown } | null
  const password = typeof body?.password === 'string' ? body.password : ''
  const expected = process.env.INTERNAL_PASSWORD?.trim() || ''

  if (!password || password !== expected) {
    return NextResponse.json({ error: 'Wrong password.' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set({
    name: INTERNAL_COOKIE,
    value: await internalToken(password),
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: INTERNAL_COOKIE_MAX_AGE,
  })
  return response
}
