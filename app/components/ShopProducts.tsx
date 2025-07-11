import React, { useState, useRef } from 'react';
import { products } from '~/data/products';

export function ShopProducts() {
  const [current, setCurrent] = useState(0);
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
      setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    } else if (diff < -50) {
      setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }
    touchStartX.current = null;
  };

  return (
    <div>
      {/* Carrusel en mobile */}
      <section className="w-full max-w-7xl mx-auto py-10 px-4">
        <div className="block sm:hidden relative">
          <div
            className="flex justify-center items-end h-80"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80 w-full flex flex-col items-end group cursor-pointer bg-secondary dark:bg-secondary/60">
              <img src={products[current].img} alt={products[current].name} className="w-full h-40 object-cover" />
              <div className="p-6 flex flex-col items-center w-full flex-1">
                <h3 className="text-lg font-bold mb-2 text-center text-white">{products[current].name}</h3>
                <p className="text-primary font-black text-xl mb-2">{products[current].price}</p>
                <button className="mt-2 px-6 py-2 bg-black text-white font-semibold rounded-full shadow border border-white hover:bg-primary transition">ADD CART</button>
              </div>
            </div>
          </div>
          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-3">
            {products.map((_, idx) => (
              <span key={idx} className={`block w-2 h-2 rounded-full ${idx === current ? 'bg-primary' : "bg-black dark:bg-white"}`} />
            ))}
          </div>
        </div>
        {/* Grid en pantallas mayores */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg h-80 flex flex-col items-end group cursor-pointer bg-secondary dark:bg-secondary/60">
              <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-6 flex flex-col items-center w-full flex-1">
                <h3 className="text-lg font-bold mb-2 text-center text-white">{product.name}</h3>
                <p className="text-primary font-black text-xl mb-2">{product.price}</p>
                <button className="mt-2 px-6 py-2 bg-black text-white font-semibold rounded-full shadow border border-white hover:bg-primary transition">ADD CART</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full flex justify-center mt-8 mb-8">
        <button className="px-8 py-3 bg-black text-white font-semibold rounded-full shadow border border-white hover:bg-primary transition">
          MORE PRODUCTS
        </button>
      </div>
    </div>
  );
}