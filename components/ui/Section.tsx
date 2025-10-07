import { ReactNode } from 'react'

export interface SectionProps {
  children: ReactNode
  variant?: 'default' | 'gray' | 'dark'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  container?: boolean
}

const sectionVariants = {
  default: '',
  gray: 'bg-gray-50',
  dark: 'bg-gray-800 text-white'
}

const sectionPadding = {
  none: '',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-20'
}

export default function Section({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  container = true,
}: SectionProps) {
  const variantClasses = sectionVariants[variant]
  const paddingClasses = sectionPadding[padding]
  const containerClasses = container ? `max-w-6xl mx-auto px-4 sm:px-6` : ''
  
  const classes = `${variantClasses} ${paddingClasses} ${className}`.trim()

  return (
    <section className={classes}>
      {container ? (
        <div className={containerClasses}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
