import Image from 'next/image'

type ServicePhotoProps = {
  src: string
  alt: string
  className?: string
  position?: string
  crop?: string
  tightCrop?: string
  tight?: boolean
  sizes?: string
  priority?: boolean
}

export default function ServicePhoto({
  src,
  alt,
  className = '',
  position = 'object-center',
  crop = 'scale-125 origin-center',
  tightCrop,
  tight = false,
  sizes = '(min-width: 1152px) 560px, 100vw',
  priority = false,
}: ServicePhotoProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-coffee ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${position} ${tight ? tightCrop ?? crop : crop}`}
        sizes={sizes}
      />
    </div>
  )
}

export const photos = {
  onset: {
    src: '/static/banner3.jpg',
    alt: 'On-set filming at Paibupai — founder on camera with director and lighting',
    position: 'object-left',
    crop: 'scale-[1.45] origin-left',
    tightCrop: 'scale-[2.7] origin-left',
  },
  talent: {
    src: '/static/banner3.jpg',
    alt: 'Talent on camera in the Paibupai studio',
    position: 'object-[22%_55%]',
    crop: 'scale-[1.55] origin-[22%_55%]',
    tightCrop: 'scale-[2.85] origin-[18%_58%]',
  },
  lighting: {
    src: '/static/banner3.jpg',
    alt: 'Lighting and directing on a Paibupai shoot',
    position: 'object-left',
    crop: 'scale-[1.7] origin-[12%_10%]',
    tightCrop: 'scale-[2.7] origin-[22%_42%]',
  },
  director: {
    src: '/static/banner3.jpg',
    alt: 'Director reviewing shots on set at Paibupai',
    position: 'object-[16%_36%]',
    crop: 'scale-[1.65] origin-[16%_34%]',
    tightCrop: 'scale-[2.35] origin-[16%_34%]',
  },
  studio: {
    src: '/static/banner1.jpg',
    alt: 'Content planning and filming in the Paibupai studio',
    position: 'object-right',
    crop: 'scale-[1.45] origin-right',
    tightCrop: 'scale-[2.7] origin-right',
  },
  camera: {
    src: '/static/banner1.jpg',
    alt: 'Camera and lighting on a Paibupai production',
    position: 'object-[94%_86%]',
    crop: 'scale-[1.7] origin-[94%_86%]',
    tightCrop: 'scale-[2.45] origin-[94%_86%]',
  },
  board: {
    src: '/static/banner1.jpg',
    alt: 'Visual direction and references on set',
    position: 'object-[80%_6%]',
    crop: 'scale-[1.8] origin-[80%_4%]',
    tightCrop: 'scale-[2.8] origin-[88%_8%]',
  },
  crew: {
    src: '/static/banner1.jpg',
    alt: 'Crew setting lights in the Paibupai studio',
    position: 'object-[94%_4%]',
    crop: 'scale-[1.75] origin-[94%_4%]',
    tightCrop: 'scale-[2.45] origin-[94%_4%]',
  },
} as const

export const photoGallery = [
  photos.onset,
  photos.studio,
  photos.talent,
  photos.board,
  photos.camera,
  photos.lighting,
  photos.director,
  photos.crew,
] as const
