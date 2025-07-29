import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outlined'
  hoverable?: boolean
}

export function Card({
  children,
  className = '',
  variant = 'default',
  hoverable = false,
}: CardProps) {
  const baseClasses = 'rounded-2xl overflow-hidden'

  const variantClasses = {
    default: 'bg-white dark:bg-gray-800',
    elevated: 'bg-white dark:bg-gray-800 shadow-lg',
    outlined: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
  }

  const hoverClasses = hoverable
    ? 'transform transition-transform duration-300 hover:scale-105 cursor-pointer'
    : ''

  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`

  return <div className={classes}>{children}</div>
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}
