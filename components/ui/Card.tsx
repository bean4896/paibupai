import { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'outlined' | 'dark'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
  hover?: boolean
}

const cardVariants = {
  default: 'bg-white',
  elevated: 'bg-white shadow-lg',
  outlined: 'bg-white border border-gray-200',
  dark: 'bg-gray-800 text-white'
}

const cardPadding = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  hover = false
}: CardProps) {
  const baseClasses = cardVariants[variant]
  const paddingClasses = cardPadding[padding]
  const hoverClasses = hover ? 'hover:shadow-xl transition duration-150 ease-in-out' : ''
  
  const classes = `${baseClasses} ${paddingClasses} ${hoverClasses} ${className}`.trim()

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
