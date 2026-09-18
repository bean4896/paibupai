import { partnerLogos, type PartnerLogo } from '@/data/partner-logos'

const TILE_H = 56
const MIN_W = 72
const MAX_W = 200

function tileWidth(logo: PartnerLogo) {
  const aspect = logo.width / logo.height
  return Math.min(MAX_W, Math.max(MIN_W, Math.round(TILE_H * aspect)))
}

function splitRows(logos: PartnerLogo[], count: number) {
  const rows: PartnerLogo[][] = Array.from({ length: count }, () => [])
  logos.forEach((logo, index) => {
    rows[index % count].push(logo)
  })
  return rows
}

function srcOf(src: string) {
  const parts = src.split('/')
  parts[parts.length - 1] = encodeURIComponent(parts[parts.length - 1])
  return parts.join('/')
}

function LogoTile({ logo }: { logo: PartnerLogo }) {
  const width = tileWidth(logo)
  const plate = logo.kind === 'plate'

  return (
    <div
      className={`flex shrink-0 items-center justify-center ${
        plate ? 'overflow-hidden rounded-xl bg-white shadow-[0_1px_0_rgba(28,24,22,0.04)]' : ''
      }`}
      style={{ width, height: TILE_H }}
    >
      <img
        src={srcOf(logo.src)}
        alt=""
        width={logo.width}
        height={logo.height}
        loading="eager"
        decoding="async"
        className={plate ? 'h-full w-full object-cover' : 'h-[50px] w-auto max-w-[92%] object-contain'}
      />
    </div>
  )
}

function MarqueeRow({
  logos,
  duration,
  reverse = false,
}: {
  logos: PartnerLogo[]
  duration: string
  reverse?: boolean
}) {
  const track = [...logos, ...logos]

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className={`flex w-max items-center gap-10 md:gap-12 ${
          reverse ? 'animate-partner-marquee-reverse' : 'animate-partner-marquee'
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: duration }}
      >
        {track.map((logo, index) => (
          <LogoTile key={`${logo.src}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  )
}

export default function PartnerLogos() {
  const [rowOne, rowTwo, rowThree] = splitRows(partnerLogos, 3)

  return (
    <section className="bg-warm pb-20 md:pb-28" aria-label="Brands we work with">
      <div className="group space-y-7">
        <MarqueeRow logos={rowOne} duration="48s" />
        <MarqueeRow logos={rowTwo} duration="62s" reverse />
        <MarqueeRow logos={rowThree} duration="55s" />
      </div>
    </section>
  )
}
