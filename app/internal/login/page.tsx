import { internalPasswordConfigured } from '@/lib/internal/auth'
import LoginForm from './LoginForm'

export const dynamic = 'force-dynamic'

export default function InternalLoginPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-16">
      <p className="text-[11px] tracking-[0.22em] text-accent uppercase">Internal</p>
      <h1 className="font-cabinet-grotesk mt-3 text-3xl font-extrabold tracking-tight text-ink">PAIBUPAI</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">Booking dashboard and homepage banners. Not linked from the public site.</p>
      <div className="mt-8">
        <LoginForm configured={internalPasswordConfigured()} />
      </div>
    </div>
  )
}
