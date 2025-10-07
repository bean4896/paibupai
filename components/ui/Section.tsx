import { ReactNode } from 'react'

export interface SectionProps {
  children: ReactNode
  variant?: 'default' | 'gray' | 'dark'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  container?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '6xl'
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

const containerMaxWidth = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '6xl': 'max-w-6xl'
}

export default function Section({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  container = true,
  maxWidth = '6xl'
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
