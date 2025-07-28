import React, { useEffect, useState, useCallback } from 'react'
import { carouselImages, type CarouselImage } from '../data/carouselImages'
import { imagotipo_blanco_celeste_blanco, logotipo_negro_celeste, imagotipo_blanco_celeste_celeste } from '../assets'

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const length = carouselImages.length

  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length)
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
      className='relative w-full h-[60vh] max-h-[600px] min-h-[400px] overflow-hidden'
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
          <source
            srcSet={imagotipo_blanco_celeste_celeste}
            media='(width >= 640px) and (width < 768px)'
          />
          <source
            srcSet={imagotipo_blanco_celeste_blanco}
            media="(width >= 768px) and (width < 1024px)" />
          <source
            srcSet={logotipo_negro_celeste}
            media="(width >= 1024px)"
          />
          {/* Imagen en Mobile */}
          <img
            src={img.src}
            alt={img.alt}
            className='w-full h-full object-cover'
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
          {/* Overlay con gradiente mejorado */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50' />

          {/* Contenido del texto */}
          <div className='absolute inset-0 flex flex-col justify-end items-center text-center text-white px-8 md:px-16 animate-fade-in'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg max-w-4xl leading-tight'>
              {img.title}
            </h2>
            <p className='text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed drop-shadow-md opacity-90'>
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
