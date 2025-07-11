import React, { useState, useRef } from 'react';
import { arrow_back, arrow_forward } from '~/assets';
import { serviceImages } from '~/data/serviceImages';

export function Services() {
  const [current, setCurrent] = useState(0);
  const length = serviceImages.length;
  const touchStartX = useRef<number | null>(null);

  // REMOVER Y COLOCAR EN UTILS
  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // REMOVER Y COLOCAR EN UTILS
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (diff > 50) {
      setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    } else if (diff < -50) {
      setCurrent((prev) => (prev + 1) % length);
    }
    touchStartX.current = null;
  };

  return (
    <section className="w-full max-w-3xl mx-auto py-10 px-4 h-[800px]">
      <div className="block sm:hidden relative h-full">
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {serviceImages[current].type === 'image' ? (
            <img
              src={serviceImages[current].src}
              alt={serviceImages[current].title}
              className="w-full h-full object-contain absolute inset-0 z-0"
            />
          ) : (
            <video
              src={serviceImages[current].src}
              controls
              className="w-full h-full object-contain absolute inset-0 z-0"
            />
          )}
          {/* Puntos indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {serviceImages.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`block w-3 h-3 rounded-full cursor-pointer ${idx === current ? 'bg-primary' : "bg-black dark:bg-white"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden sm:block h-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex items-center justify-center">
          {serviceImages[current].type === 'image' ? (
            <img
              src={serviceImages[current].src}
              alt={serviceImages[current].title}
              className="w-full h-full object-contain absolute inset-0 z-0"
            />
          ) : (
            <video
              src={serviceImages[current].src}
              controls
              className="w-full h-full object-contain absolute inset-0 z-0"
            />
          )}


          {/* Flechas navegación */}
          <button
            onClick={() => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 bg-white dark:bg-black"
            aria-label="Anterior"
          >
            <img src={arrow_back} className='' />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 bg-white dark:bg-black"
            aria-label="Siguiente"
          >
            <img src={arrow_forward} className='' />
          </button>


          {/* Puntos indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {serviceImages.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`block w-3 h-3 rounded-full cursor-pointer ${idx === current ? 'bg-primary' : "bg-black dark:bg-white"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}