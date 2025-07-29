import React, { useState } from 'react'
import { imagotipo_blanco_celeste_blanco, imagotipo_negro_celeste_celeste } from '~/assets'
import { useTheme } from '~/context/ThemeProvider'
import { TrainingQuizPopup } from './TrainingQuizPopup'

export function TrainingPlansQuiz() {
  const { dark } = useTheme()
  const backgroundImage = dark ? imagotipo_blanco_celeste_blanco : imagotipo_negro_celeste_celeste
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  const handleOpenQuiz = () => {
    setIsQuizOpen(true)
  }

  const handleCloseQuiz = () => {
    setIsQuizOpen(false)
  }

  return (
    <>
      <section className="w-full max-w-3xl mx-auto py-10 px-4">
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl h-80 flex flex-col justify-end items-center bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 w-full text-center pb-8">
            <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
              Realice la PRUEBA para encontrar el mejor programa
            </h2>
            <p className="text-lg text-white mb-4 drop-shadow">¡Transforma tu rendimiento!</p>
            <button
              onClick={handleOpenQuiz}
              className="px-6 py-2 bg-black text-white font-semibold rounded-full shadow border border-white hover:bg-primary transition"
            >
              INICIAR PRUEBA
            </button>
          </div>
        </div>
      </section>

      <TrainingQuizPopup isOpen={isQuizOpen} onClose={handleCloseQuiz} />
    </>
  )
}
