import React from 'react'

interface ImageWithBlurredBackgroundProps {
  src: string
  alt: string
  className?: string
  overlayOpacity?: number
  blurIntensity?: 'sm' | 'md' | 'lg' | 'xl'
  showShadow?: boolean
}

export function ImageWithBlurredBackground({
  src,
  alt,
  className = '',
  overlayOpacity = 0.2,
  blurIntensity = 'md',
  showShadow = true,
}: ImageWithBlurredBackgroundProps) {
  const blurClasses = {
    sm: 'blur-sm',
    md: 'blur-md',
    lg: 'blur-lg',
    xl: 'blur-xl',
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Fondo difuminado con la misma imagen */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${blurClasses[blurIntensity]} scale-110 opacity-60 transition-all duration-500`}
        style={{ backgroundImage: `url(${src})` }}
      />

      {/* Gradiente overlay para mejor integración */}
      <div
        className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20'
        style={{ opacity: overlayOpacity }}
      />

      {/* Imagen principal */}
      <img
        src={src}
        alt={alt}
        className={`relative z-10 w-full h-full object-contain transition-transform duration-300 hover:scale-105 ${
          showShadow ? 'drop-shadow-2xl' : ''
        }`}
      />

      {/* Efecto de brillo sutil en hover */}
      <div className='absolute inset-0 bg-white/0 hover:bg-white/5 transition-all duration-300 z-20' />
    </div>
  )
}
