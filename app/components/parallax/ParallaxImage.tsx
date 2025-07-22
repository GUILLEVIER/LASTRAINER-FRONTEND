import React from 'react';
import { ParallaxWrapper } from './ParallaxWrapper';
import { lastrainer_1 } from "../../assets";

/**
 * Imagen de fondo fijo con efecto parallax
 * Overlay semi-transparente para mejorar legibilidad
 * Posicionamiento absoluto y z-index negativo
 */
export function ParallaxImage() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <ParallaxWrapper speed={0.2} className="w-full h-full">
        <div className="w-full h-full">
          <img
            src={lastrainer_1}
            alt="Parallax Background"
            className="w-full h-full object-contain"
          />
        </div>
      </ParallaxWrapper>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
    </div>
  );
}
