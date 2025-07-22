import React from 'react'

interface BannerTitleProps {
  children: React.ReactNode
  className?: string
}

export function BannerTitle({ children, className = '' }: BannerTitleProps) {
  return (
    <div
      className={`w-full flex justify-center my-8 shadow-lg bg-black dark:bg-white h-full items-center ${className}`}
    >
      <h2 className='text-3xl md:text-4xl font-extrabold text-center text-primary px-4 py-2 bg-black dark:bg-white animate-shake'>
        {children}
      </h2>
    </div>
  )
}
