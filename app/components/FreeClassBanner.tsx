interface FreeClassBannerProps {
  onClick: () => void
}

export function FreeClassBanner({ onClick }: FreeClassBannerProps) {
  return (
    <div
      onClick={onClick}
      className='relative bg-gradient-to-r from-[#1fe3e3] via-[#f74759] to-[#1fe3e3] rounded-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden'
    >
      {/* Efecto de brillo animado */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse'></div>
      {/* Contenido del banner */}
      <div className='relative z-10 text-center'>
        <div className='inline-flex items-center justify-center mb-4'>
          <span className='text-6xl'>🎉</span>
        </div>
        <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg'>
          CLASE GRATIS
        </h2>
        <p className='text-xl text-white mb-6 font-semibold drop-shadow-md'>
          ¡Descubre todo lo que podemos ofrecerte!
        </p>
        <div className='inline-flex items-center bg-white text-secondary font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200'>
          <span className='mr-2'>🚀</span>
          <span>¡HAZ CLICK PARA SOLICITAR!</span>
          <span className='ml-2'>✨</span>
        </div>
      </div>
    </div>
  )
}
