import { promises as fs } from 'fs'
import path from 'path'
import { get, put } from '@vercel/blob'
import { DEFAULT_BANNERS, normalizeBanners, type BannerSlide } from './types'

export type { BannerSlide } from './types'
export { DEFAULT_BANNERS, isSafeBannerHref, isSafeBannerSrc, MAX_BANNERS, normalizeBanners } from './types'

type StoreShape = { banners: BannerSlide[] }

const FILE_PATH = path.join(process.cwd(), 'data', 'banners.json')
const BLOB_PATH = 'site/banners.json'

function emptyStore(): StoreShape {
  return { banners: DEFAULT_BANNERS }
}

function blobEnabled() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID)
}

function onVercel() {
  return process.env.VERCEL === '1'
}

export function bannerStorageKind(): 'blob' | 'file' | 'defaults' {
  if (blobEnabled()) return 'blob'
  if (onVercel()) return 'defaults'
  return 'file'
}

async function readFileStore(): Promise<StoreShape> {
  try {
    const raw = await fs.readFile(FILE_PATH, 'utf8')
    return { banners: normalizeBanners((JSON.parse(raw) as StoreShape).banners) }
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
  return { banners: normalizeBanners((JSON.parse(raw) as StoreShape).banners) }
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

export async function getBanners(): Promise<BannerSlide[]> {
  try {
    const kind = bannerStorageKind()
    if (kind === 'blob') return (await readBlobStore()).banners
    if (kind === 'file') return (await readFileStore()).banners
  } catch (error) {
    console.error('[banners] read failed', error)
  }
  return DEFAULT_BANNERS
}

export async function saveBanners(input: unknown) {
  const banners = normalizeBanners(input)
  if (!banners.length) {
    throw new Error('Add at least one banner.')
  }

  const store = { banners }
  const kind = bannerStorageKind()
  if (kind === 'blob') await writeBlobStore(store)
  else if (kind === 'file') await writeFileStore(store)
  else {
    throw new Error('Banner storage is not configured for Vercel. Use the project Blob store.')
  }

  return banners
}
