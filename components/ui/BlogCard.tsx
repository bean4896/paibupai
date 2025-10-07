import Image from 'next/image'
import { StaticImageData } from 'next/image'

export interface BlogCardProps {
  image: string | StaticImageData
  title: string
  excerpt: string
  authorName: string
  authorImage: string | StaticImageData
  href: string
  date?: string
  className?: string
}

export default function BlogCard({
  image,
  title,
  excerpt,
  authorName,
  authorImage,
  href,
  date,
  className = ''
}: BlogCardProps) {
  return (
    <article className={`h-full flex flex-col space-y-5 ${className}`}>
      {/* Image */}
      <a className="block group overflow-hidden" href={href}>
        <Image 
          className="w-full aspect-[7/4] object-cover group-hover:scale-105 transition duration-700 ease-out" 
          src={image} 
          width={347} 
          height={198} 
          alt={title} 
        />
      </a>
      
      {/* Content */}
      <div className="grow flex flex-col">
        <header>
          <h3 className="h4 font-cabinet-grotesk font-bold mb-2">
            <a 
              className="inline-block decoration-primary-500 decoration-2 underline-offset-2 hover:underline" 
              href={href}
            >
              {title}
            </a>
          </h3>
        </header>
        
        <p className="text-gray-500 grow">{excerpt}</p>
        
        <footer className="flex items-center justify-between text-sm mt-4">
          <div className="flex items-center">
            <a href="#0">
              <Image 
                className="rounded-full shrink-0 mr-3" 
                src={authorImage} 
                width={32} 
                height={32} 
                alt={authorName} 
              />
            </a>
            <div>
              <span className="text-gray-500">By</span>{' '}
              <a 
                className="font-medium decoration-primary-500 decoration-2 underline-offset-2 hover:underline" 
                href="#0"
              >
                {authorName}
              </a>
            </div>
          </div>
          {date && (
            <div className="text-gray-400 text-xs">
              {date}
            </div>
          )}
        </footer>
      </div>
    </article>
  )
}
