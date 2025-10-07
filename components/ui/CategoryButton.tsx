import { ReactNode } from 'react'

export interface CategoryButtonProps {
  children: ReactNode
  count: string | number
  isActive: boolean
  onClick: () => void
  className?: string
}

export default function CategoryButton({
  children,
  count,
  isActive,
  onClick,
  className = ''
}: CategoryButtonProps) {
  return (
    <button 
      className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
        isActive ? 'bg-primary-100 border-primary-300' : 'bg-white border-gray-200'
      } ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        <span>{children}</span>
        <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
          isActive ? 'text-white bg-primary-300' : 'text-gray-400 bg-gray-100'
        }`}>
          {count}
        </span>
      </div>
    </button>
  )
}
