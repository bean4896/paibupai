export type BannerSlide = {
  id: string
  src: string
  alt: string
  href: string
}

export const DEFAULT_BANNERS: BannerSlide[] = [
  {
    id: 'banner-1',
    src: '/static/banner1.jpg',
    alt: 'One Year of Content — 12-month content plan and social media posting management',
    href: '#book',
  },
  {
    id: 'banner-3',
    src: '/static/banner3.jpg',
    alt: 'Make Your Business Seen — Paibupai one-stop content team in Singapore',
    href: '#book',
  },
]

export const MAX_BANNERS = 8

export function isSafeBannerSrc(src: string) {
  const value = src.trim()
  if (!value || value.length > 2000) return false
  if (value.startsWith('/') && !value.startsWith('//')) return true
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

export function isSafeBannerHref(href: string) {
  const value = href.trim()
  if (!value || value.length > 500) return false
  if (value.startsWith('#') || (value.startsWith('/') && !value.startsWith('//'))) return true
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

export function normalizeBanners(input: unknown): BannerSlide[] {
  if (!Array.isArray(input)) return DEFAULT_BANNERS

  const banners = input
    .map((item, index) => {
      if (!item || typeof item !== 'object') return null
      const record = item as Record<string, unknown>
      const src = typeof record.src === 'string' ? record.src.trim() : ''
      const alt = typeof record.alt === 'string' ? record.alt.trim() : ''
      const href = typeof record.href === 'string' && record.href.trim() ? record.href.trim() : '#book'
      const id = typeof record.id === 'string' && record.id.trim() ? record.id.trim() : `banner-${index + 1}`
      if (!isSafeBannerSrc(src) || !isSafeBannerHref(href)) return null
      return { id, src, alt: alt || 'Paibupai campaign', href }
    })
    .filter((item): item is BannerSlide => Boolean(item))
    .slice(0, MAX_BANNERS)

  return banners.length > 0 ? banners : DEFAULT_BANNERS
}
