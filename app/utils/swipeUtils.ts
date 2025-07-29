import { useRef, useCallback, useState, useEffect } from 'react'

export interface SwipeHandlers {
  handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void
  handleTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => void
}

export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold: number = 50
): SwipeHandlers {
  const touchStartX = useRef<number | null>(null)
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }, [])
  const handleTouchEnd = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchEndX - touchStartX.current
    if (diff > threshold) {
      onSwipeRight()
    } else if (diff < -threshold) {
      onSwipeLeft()
    }
    touchStartX.current = null
  }, [onSwipeLeft, onSwipeRight, threshold])
  return { handleTouchStart, handleTouchEnd }
}

// Función de utilidad para navegación de carrusel
export function createCarouselNavigation(length: number) {
  return {
    next: (current: number) => (current + 1) % length,
    previous: (current: number) => (current === 0 ? length - 1 : current - 1),
  }
}

// Hook para carrusel completo
export function useCarousel(length: number, autoPlay: boolean = false, interval: number = 5000) {
  const [current, setCurrent] = useState(0)
  const { next, previous } = createCarouselNavigation(length)
  const goToNext = useCallback(() => setCurrent(prev => next(prev)), [next])
  const goToPrevious = useCallback(() => setCurrent(prev => previous(prev)), [previous])
  const goToSlide = useCallback((index: number) => setCurrent(index), [])
  const swipeHandlers = useSwipe(goToNext, goToPrevious)
  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, goToNext])

  return {
    current,
    goToNext,
    goToPrevious,
    goToSlide,
    swipeHandlers,
  }
}
