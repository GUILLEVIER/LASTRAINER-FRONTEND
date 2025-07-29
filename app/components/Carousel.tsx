import React, { useEffect, useState, useCallback } from 'react'
import { carouselImages } from '../data/carouselImages'

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const length = carouselImages.length

  const goToNext = useCallback(() => {
    setCurrent(prev => (prev + 1) % length)
  }, [length])

  const goToSlide = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(goToNext, 10000)
    return () => clearInterval(timer)
  }, [isPlaying, goToNext])

  const handleMouseEnter = () => setIsPlaying(false)
  const handleMouseLeave = () => setIsPlaying(true)

  return (
    <div
      className="relative w-full h-[60vh] max-h-[600px] min-h-[400px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {carouselImages.map((img, idx) => (
        <picture
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${idx === current ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {/* Optimización de imágenes por dispositivo */}
          <source srcSet={img.srcSet['1024w']} media="(min-width: 1024px)" type="image/jpeg" />
          <source
            srcSet={img.srcSet['768w']}
            media="(min-width: 768px) and (max-width: 1023px)"
            type="image/jpeg"
          />
          <source srcSet={img.srcSet['640w']} media="(max-width: 767px)" type="image/jpeg" />
          {/* Fallback optimizado para móviles */}
          <img
            src={img.srcSet['640w']}
            alt={img.alt}
            className="w-full h-full object-cover object-center"
            loading={idx === 0 ? 'eager' : 'lazy'}
            decoding={idx === 0 ? 'sync' : 'async'}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 100vw"
          />
          {/* Overlay con gradiente mejorado */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />

          {/* Contenido del texto */}
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white px-8 md:px-16 animate-fade-in">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg max-w-4xl leading-tight">
              {img.title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed drop-shadow-md opacity-90">
              {img.description}
            </p>
          </div>
        </picture>
      ))}

      {/* Indicadores de posición mejorados */}

      {/* <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3'>
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              idx === current
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div> */}

      {/* Botones de navegación para desktop */}
      {/* <div className='hidden md:flex absolute inset-y-0 left-0 items-center'>
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))
          }
          className='ml-4 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary'
          aria-label='Imagen anterior'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
      </div> */}

      {/* <div className='hidden md:flex absolute inset-y-0 right-0 items-center'>
        <button
          onClick={goToNext}
          className='mr-4 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary'
          aria-label='Siguiente imagen'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div> */}
    </div>
  )
}
