'use client'

import { useState } from 'react'

export default function LoginForm({ configured }: { configured: boolean }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError('')
    setPending(true)

    const response = await fetch('/api/internal/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    const payload = (await response.json().catch(() => null)) as { error?: string } | null

    setPending(false)
    if (!response.ok) {
      setError(payload?.error || 'Could not sign in.')
      return
    }

    window.location.assign('/internal')
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-black/5 bg-white p-8">
      {!configured ? (
        <p className="text-sm leading-relaxed text-muted">
          Set <code className="text-ink">INTERNAL_PASSWORD</code> in the environment, then reload this page.
        </p>
      ) : null}

      <label htmlFor="internal-password" className="block text-[11px] tracking-[0.18em] text-muted uppercase">
        Password
      </label>
      <input
        id="internal-password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        disabled={!configured || pending}
        className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-ink outline-none focus:border-accent"
      />

      {error ? <p className="mt-4 text-sm text-accent">{error}</p> : null}

      <button
        type="submit"
        disabled={!configured || pending || !password}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full border-2 border-accent bg-coffee px-6 py-3 font-cabinet-grotesk text-sm font-bold tracking-[0.16em] text-cream uppercase transition hover:bg-coffee-soft disabled:opacity-50"
      >
        {pending ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  )
}
