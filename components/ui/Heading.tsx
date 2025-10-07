import React, { ReactNode } from 'react'

export interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: 'default' | 'display' | 'section'
  className?: string
  center?: boolean
}

const headingVariants = {
  default: '',
  display: 'font-cabinet-grotesk',
  section: 'font-cabinet-grotesk'
}

const headingSizes = {
  1: 'h1',
  2: 'h2', 
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
}

export default function Heading({
  children,
  level = 2,
  variant = 'default',
  className = '',
  center = false
}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements
  const variantClasses = headingVariants[variant]
  const sizeClasses = headingSizes[level]
  const centerClasses = center ? 'text-center' : ''
  
  const classes = `${sizeClasses} ${variantClasses} ${centerClasses} ${className}`.trim()

  return (
    <Tag className={classes}>
      {children}
    </Tag>
  )
}
