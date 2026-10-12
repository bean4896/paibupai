import { NextResponse } from 'next/server'
import { bannerStorageKind, getBanners, saveBanners } from '@/lib/banners/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({
    banners: await getBanners(),
    storage: bannerStorageKind(),
  })
}

export async function PUT(request: Request) {
  const body = (await request.json().catch(() => null)) as { banners?: unknown } | null
  if (!body) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  try {
    const banners = await saveBanners(body.banners)
    return NextResponse.json({ ok: true, banners, storage: bannerStorageKind() })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not save banners.'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
