import React, { useState, useRef } from 'react';
import { plans } from '~/data/plans';

export function TrainingPlans() {
	const [current, setCurrent] = useState(0);
	const touchStartX = useRef<number | null>(null);

	// REMOVER Y COLOCAR EN UTILS
	// Funciones para swipe
	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		touchStartX.current = e.touches[0].clientX;
	};

	// REMOVER Y COLOCAR EN UTILS
	const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
		if (touchStartX.current === null) return;
		const touchEndX = e.changedTouches[0].clientX;
		const diff = touchEndX - touchStartX.current;
		if (diff > 50) {
			// Swipe derecha
			setCurrent((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
		} else if (diff < -50) {
			// Swipe izquierda
			setCurrent((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
		}
		touchStartX.current = null;
	};

	return (
		<div>
			<section className="w-full max-w-7xl mx-auto py-10 px-4">
				{/* Carrusel touch en mobile */}
				<div className="block sm:hidden relative">
					<div
						className="flex justify-center items-end h-80"
						onTouchStart={handleTouchStart}
						onTouchEnd={handleTouchEnd}
					>
						<div className="rounded-2xl shadow-lg flex flex-col items-center overflow-hidden w-full h-80 bg-secondary dark:bg-secondary/60">
							<img
								src={plans[current].img}
								alt={plans[current].name}
								className="w-full h-40 object-cover"
							/>
							<div className="p-6 flex flex-col items-center w-full flex-1">
								<h3 className="text-xl font-bold mb-2 text-center text-white">
									{plans[current].name}
								</h3>
								<div className="flex items-center mb-1">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className={`w-5 h-5 ${i < plans[current].stars
												? 'text-primary'
												: 'text-white'
												}`}
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
										</svg>
									))}
									<span className="ml-2 text-white text-sm">
										({plans[current].reviews} reviews)
									</span>
								</div>
								<div className="flex-1" />
								<button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-full shadow border border-white hover:bg-primary transition">
									MORE INFO
								</button>
							</div>
						</div>
					</div>
					{/* Indicadores */}
					<div className="flex justify-center gap-2 mt-3">
						{plans.map((_, idx) => (
							<span
								key={idx}
								className={`block w-2 h-2 rounded-full ${idx === current ? 'bg-primary' : "bg-black dark:bg-white"
									}`}
							/>
						))}
					</div>
				</div>
				{/* Grid en pantallas mayores */}
				<div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
					{plans.map((plan, idx) => (
						<div
							key={idx}
							className="rounded-2xl shadow-lg flex flex-col items-center overflow-hidden bg-secondary dark:bg-secondary/60 h-80"
						>
							<img
								src={plan.img}
								alt={plan.name}
								className="w-full h-40 object-cover"
							/>
							<div className="p-6 flex flex-col items-center w-full flex-1">
								<h3 className="text-xl font-bold mb-2 text-center text-white">
									{plan.name}
								</h3>
								<div className="flex items-center mb-1">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className={`w-5 h-5 ${i < plan.stars
												? 'text-primary'
												: 'text-white'
												}`}
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
										</svg>
									))}
									<span className="ml-2 text-white text-sm">
										({plan.reviews} reviews)
									</span>
								</div>
								<div className="flex-1" />
								<button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-full shadow border border-white hover:bg-primary transition">
									MORE INFO
								</button>
							</div>
						</div>
					))}
				</div>
			</section>
			<div className="w-full flex justify-center mt-8 mb-8">
				<button className="px-8 py-3 bg-black text-white font-semibold rounded-full shadow border border-white hover:bg-primary transition">
					MORE PLANS
				</button>
			</div>
		</div>
	);
}