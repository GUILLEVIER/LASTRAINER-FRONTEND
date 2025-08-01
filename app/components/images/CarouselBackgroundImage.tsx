import React, { useEffect, useState } from 'react'
import { carouselImages } from '../../data/carouselImages'

export function CarouselBackgroundImage() {
  const [current, setCurrent] = useState(0)
  const length = carouselImages.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % length)
    }, 2000)
    return () => clearInterval(timer)
  }, [length])

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="w-full h-full">
        {carouselImages.map((img, idx) => (
          <img
            key={idx}
            src={img.srcSet['640w']}
            alt={img.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
    </div>
  )
}
