import React, { useEffect, useState } from "react";
import { carouselImages } from "../data/carouselImages";

export function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = carouselImages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3500);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="relative w-full h-[30vh] max-h-[400px] min-h-[200px] overflow-hidden">
      {carouselImages.map((img, idx) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        />
      ))}
    </div>
  );
}
