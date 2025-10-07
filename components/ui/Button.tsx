import Link from 'next/link'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

const buttonVariants = {
  primary: 'text-white bg-primary-500 hover:bg-primary-600 shadow-sm',
  secondary: 'text-gray-600 bg-white hover:bg-primary-100 hover:text-primary-600 shadow-sm',
  outline: 'text-primary-500 bg-transparent border border-primary-500 hover:bg-primary-50',
  ghost: 'text-gray-600 bg-transparent hover:bg-gray-100'
}

const buttonSizes = {
  sm: 'btn-sm',
  md: 'btn',
  lg: 'btn-lg'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false
}: ButtonProps) {
  const baseClasses = `${buttonSizes[size]} ${buttonVariants[variant]}`
  const widthClasses = fullWidth ? 'w-full' : ''
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  const classes = `${baseClasses} ${widthClasses} ${disabledClasses} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
