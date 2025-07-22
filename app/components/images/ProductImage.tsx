import React from 'react'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
  variant?: 'blurred' | 'gradient' | 'pattern' | 'solid'
}

export function ProductImage({
  src,
  alt,
  className = '',
  variant = 'blurred',
}: ProductImageProps) {
  const renderVariant = () => {
    switch (variant) {
      case 'blurred':
        return (
          <div className={`relative overflow-hidden ${className}`}>
            {/* Fondo difuminado */}
            <div
              className='absolute inset-0 bg-cover bg-center filter blur-md scale-110 opacity-60'
              style={{ backgroundImage: `url(${src})` }}
            />
            {/* Overlay */}
            <div className='absolute inset-0 bg-black/20' />
            {/* Imagen principal */}
            <img
              src={src}
              alt={alt}
              className='relative z-10 w-full h-full object-contain'
            />
          </div>
        )
      case 'gradient':
        return (
          <div className={`relative overflow-hidden ${className}`}>
            {/* Gradiente de fondo basado en colores de la imagen */}
            <div className='absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900' />
            {/* Imagen principal */}
            <img
              src={src}
              alt={alt}
              className='relative z-10 w-full h-full object-contain'
            />
          </div>
        )
      case 'pattern':
        return (
          <div className={`relative overflow-hidden ${className}`}>
            {/* Patrón de fondo */}
            <div className='absolute inset-0 opacity-10'>
              <div
                className='w-full h-full bg-repeat bg-[length:20px_20px]'
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
                }}
              />
            </div>
            {/* Imagen principal */}
            <img
              src={src}
              alt={alt}
              className='relative z-10 w-full h-full object-contain'
            />
          </div>
        )
      case 'solid':
      default:
        return (
          <div
            className={`relative overflow-hidden bg-gray-100 dark:bg-gray-800 ${className}`}
          >
            <img src={src} alt={alt} className='w-full h-full object-contain' />
          </div>
        )
    }
  }

  return renderVariant()
}
