import { ReactNode } from 'react'
import Card from './Card'
import Button from './Button'
import Badge from './Badge'

export interface PricingCardProps {
  title: string
  price: string | number
  period?: string
  description: string
  features: string[]
  buttonText: string
  buttonHref: string
  popular?: boolean
  className?: string
  variant?: 'default' | 'dark'
}

export default function PricingCard({
  title,
  price,
  period = '/mo',
  description,
  features,
  buttonText,
  buttonHref,
  popular = false,
  className = '',
  variant = 'default'
}: PricingCardProps) {
  const isDark = variant === 'dark'
  
  return (
    <Card 
      variant={isDark ? 'dark' : 'default'} 
      className={`relative flex flex-col h-full ${className}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 mr-6 -mt-4">
          <Badge variant="success">Most Popular</Badge>
        </div>
      )}
      
      <div className="mb-6">
        <div className={`font-cabinet-grotesk text-xl font-semibold mb-1 ${isDark ? 'text-gray-100' : ''}`}>
          {title}
        </div>
        
        <div className={`font-cabinet-grotesk inline-flex items-baseline mb-2 ${isDark ? 'text-gray-100' : ''}`}>
          {typeof price === 'number' ? (
            <>
              <span className="text-3xl font-medium text-gray-400">$</span>
              <span className="text-5xl font-bold">{price}</span>
              <span className="font-medium text-gray-400">{period}</span>
            </>
          ) : (
            <span className="text-5xl font-bold">{price}</span>
          )}
        </div>
        
        <div className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {description}
        </div>
        
        <Button 
          href={buttonHref} 
          variant="primary" 
          fullWidth
        >
          {buttonText}
        </Button>
      </div>
      
      <div className={`font-medium mb-4 ${isDark ? 'text-gray-100' : ''}`}>
        {isDark ? 'All free features, plus:' : 'Features include:'}
      </div>
      
      <ul className={`space-y-3 grow ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg 
              className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" 
              viewBox="0 0 12 12" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
