import Image from 'next/image'
import { StaticImageData } from 'next/image'

export interface GalleryItemProps {
  image: StaticImageData
  authorName: string
  authorHandle: string
  authorImage: StaticImageData
  likes: string
  href: string
  className?: string
  categories?: string[]
  currentCategory?: string
}

export default function GalleryItem({
  image,
  authorName,
  authorHandle,
  authorImage,
  likes,
  href,
  className = '',
  categories = ['0'],
  currentCategory = '0'
}: GalleryItemProps) {
  const isVisible = categories.includes(currentCategory) || currentCategory === '0'
  
  return (
    <a 
      className={`relative group hover:shadow-xl transition duration-150 ease-in-out ${className}`}
      style={!isVisible ? { display: 'none' } : {}}
      href={href}
    >
      <Image 
        className="w-full aspect-square object-cover" 
        src={image} 
        width="352" 
        height="352" 
        alt={`Gallery item by ${authorName}`} 
      />
      
      {/* Content on hover */}
      <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
        {/* Backdrop */}
        <div className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
        
        {/* Content */}
        <div className="relative flex justify-between">
          {/* Left side */}
          <div className="flex items-center">
            <Image 
              className="shrink-0 w-10 h-10 rounded-full mr-4" 
              src={authorImage} 
              width={40} 
              height={40} 
              alt={authorName} 
            />
            <div className="truncate">
              <div className="font-bold text-white truncate">{authorName}</div>
              <div className="text-xs text-white opacity-60 truncate">@{authorHandle}</div>
            </div>
          </div>
          
          {/* Right side */}
          <div className="flex flex-nowrap items-center ml-2">
            <button className="text-rose-500 hover:text-rose-600">
              <span className="sr-only">Like</span>
              <svg className="fill-current" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z" fillRule="nonzero" />
              </svg>
            </button>
            <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">{likes}</div>
          </div>
        </div>
      </div>
    </a>
  )
}
