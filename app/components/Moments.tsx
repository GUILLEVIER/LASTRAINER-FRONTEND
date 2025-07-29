import React, { useState, useRef, useEffect } from 'react'
import { arrow_back, arrow_forward } from '~/assets'
import { momentImagesAndVideos } from '~/data/momentImagesAndVideos'
import { loadInstagramEmbed } from '~/utils/instagramEmbed'

export function Moments() {
  const [current, setCurrent] = useState(0)
  const length = momentImagesAndVideos.length
  const touchStartX = useRef<number | null>(null)

  // Cargar Instagram embed cuando hay contenido de Instagram
  useEffect(() => {
    const currentItem = momentImagesAndVideos[current]
    if (currentItem.type === 'instagram') {
      loadInstagramEmbed()
    }
  }, [current])

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchEndX - touchStartX.current
    if (diff > 50) {
      setCurrent(prev => (prev === 0 ? length - 1 : prev - 1))
    } else if (diff < -50) {
      setCurrent(prev => (prev + 1) % length)
    }
    touchStartX.current = null
  }

  const renderContent = (item: (typeof momentImagesAndVideos)[0]) => {
    switch (item.type) {
      case 'image':
        return (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-contain absolute inset-0 z-0"
          />
        )
      case 'video':
        return (
          <video
            src={item.src}
            controls
            className="w-full h-full object-contain absolute inset-0 z-0"
            playsInline
            preload="none"
          />
        )
      case 'instagram':
        return (
          <div className="w-full h-full flex items-center justify-center absolute inset-0 z-0">
            <iframe
              src={item.embedUrl}
              width="400"
              height="600"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              className="max-w-full max-h-full"
            />
          </div>
        )
      case 'youtube':
        return (
          <div className="w-full h-full flex items-center justify-center absolute inset-0 z-0">
            <iframe
              src={item.embedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full max-w-full max-h-full rounded-lg"
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="w-full max-w-3xl mx-auto py-10 px-4 h-[800px]">
      <div className="block sm:hidden relative h-full">
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {renderContent(momentImagesAndVideos[current])}
          {/* Puntos indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {momentImagesAndVideos.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`block w-3 h-3 rounded-full cursor-pointer ${
                  idx === current ? 'bg-primary' : 'bg-black dark:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden sm:block h-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex items-center justify-center">
          {renderContent(momentImagesAndVideos[current])}

          {/* Flechas navegación */}
          <button
            onClick={() => setCurrent(prev => (prev === 0 ? length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 bg-transparent dark:bg-transparent"
            aria-label="Anterior"
          >
            <img src={arrow_back} className="" />
          </button>
          <button
            onClick={() => setCurrent(prev => (prev + 1) % length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 bg-transparent dark:bg-transparent"
            aria-label="Siguiente"
          >
            <img src={arrow_forward} className="" />
          </button>

          {/* Puntos indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {momentImagesAndVideos.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`block w-3 h-3 rounded-full cursor-pointer ${
                  idx === current ? 'bg-primary' : 'bg-black dark:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
