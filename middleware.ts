import { NextResponse, type NextRequest } from 'next/server'
import { INTERNAL_COOKIE, isInternalCookieValid } from '@/lib/internal/auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/interal' || pathname.startsWith('/interal/')) {
    const next = pathname.replace(/^\/interal/, '/internal') || '/internal'
    return NextResponse.redirect(new URL(next, request.url))
  }

  const isInternalPage = pathname === '/internal' || pathname.startsWith('/internal/')
  const isInternalApi = pathname.startsWith('/api/internal')
  const isLoginPage = pathname === '/internal/login'
  const isLoginApi = pathname === '/api/internal/login'

  if (!isInternalPage && !isInternalApi) {
    return NextResponse.next()
  }

  if (isLoginPage || isLoginApi) {
    return NextResponse.next()
  }

  const authed = await isInternalCookieValid(request.cookies.get(INTERNAL_COOKIE)?.value)
  if (authed) {
    return NextResponse.next()
  }

  if (isInternalApi) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.redirect(new URL('/internal/login', request.url))
}

export const config = {
  matcher: ['/internal', '/internal/:path*', '/interal', '/interal/:path*', '/api/internal/:path*'],
}
