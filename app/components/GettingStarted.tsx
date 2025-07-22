import React, { useState, useRef } from 'react'
import { cardImages } from '~/data/cardImages' // Assuming you have a data file for card images

export function GettingStarted() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  // IDs de las secciones a las que se hará scroll
  const sectionIds = [
    'training-programs',
    'media',
    'training-content',
    'video-content',
  ]

  // REMOVER Y COLOCAR EN UTILS
  // Funciones para swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  // REMOVER Y COLOCAR EN UTILS
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchEndX - touchStartX.current
    if (diff > 50) {
      // Swipe derecha
      setCurrent((prev) => (prev === 0 ? cardImages.length - 1 : prev - 1))
    } else if (diff < -50) {
      // Swipe izquierda
      setCurrent((prev) => (prev === cardImages.length - 1 ? 0 : prev + 1))
    }
    touchStartX.current = null
  }

  // Función para hacer scroll a la sección correspondiente
  const handleCardClick = (idx: number) => {
    const section = document.getElementById(sectionIds[idx])
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='w-full max-w-7xl mx-auto py-8 px-4'>
      {/* Carrusel solo en mobile */}
      <div className='block sm:hidden relative'>
        <div
          className='flex justify-center items-end h-64'
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className='relative rounded-xl overflow-hidden shadow-lg h-64 w-full flex items-end group cursor-pointer'
            style={{
              backgroundImage: `url(${cardImages[current].img})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => handleCardClick(current)}
          >
            <h3 className='relative w-full text-center text-white text-xl font-bold pb-6 z-10'>
              {cardImages[current].title}
            </h3>
          </div>
        </div>
        {/* Indicadores */}
        <div className='flex justify-center gap-2 mt-3'>
          {cardImages.map((_, idx) => (
            <span
              key={idx}
              className={`block w-2 h-2 rounded-full ${
                idx === current ? 'bg-primary' : 'bg-black dark:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Grid en pantallas mayores */}
      <div className='hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6'>
        {cardImages.map((card, idx) => (
          <div
            key={card.title}
            className='relative rounded-xl overflow-hidden shadow-lg h-64 flex items-end group cursor-pointer'
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => handleCardClick(idx)}
          >
            <h3 className='relative w-full text-center text-white text-xl font-bold pb-6 z-10'>
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
