import React from 'react';
import { useParallax } from '~/hooks/useParallax';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Componente wrapper reutilizable para aplicar efectos parallax
 * Velocidad configurable
 * Usa transformaciones CSS para mejor rendimiento
 */
export function ParallaxWrapper({
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxWrapperProps) {
  const scrollY = useParallax();
  console.log("ParallaxWrapper scrollY:", scrollY);
  const transform = `translateY(${scrollY * speed}px)`;
  console.log("ParallaxWrapper transform:", transform);

  return (
    <div
      className={`will-change-transform ${className}`}
      style={{
        transform,
      }}
    >
      {children}
    </div>
  );
}
