export const INTERNAL_COOKIE = 'pb_internal'
export const INTERNAL_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

export function internalPasswordConfigured() {
  return Boolean(process.env.INTERNAL_PASSWORD?.trim())
}

export async function internalToken(password = process.env.INTERNAL_PASSWORD?.trim() || '') {
  if (!password) return ''
  const data = new TextEncoder().encode(`paibupai-internal:${password}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export async function isInternalCookieValid(value: string | undefined) {
  const expected = await internalToken()
  return Boolean(expected) && Boolean(value) && value === expected
}
