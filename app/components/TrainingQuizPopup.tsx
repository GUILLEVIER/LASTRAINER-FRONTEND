import { useState } from 'react'
import { CarouselBackgroundImage } from './images/CarouselBackgroundImage'

interface TrainingQuizPopupProps {
  isOpen: boolean
  onClose: () => void
}

interface QuizData {
  nombre: string
  apellido: string
  correo: string
  experiencia: string
  objetivo: string
  modalidad: string
  frecuencia: string
  limitaciones: string
}

const questions = [
  {
    id: 'experiencia',
    label: '¿Cuál es tu nivel de experiencia en entrenamiento?',
    type: 'select' as const,
    options: [
      { value: '', label: 'Selecciona una opción' },
      { value: 'principiante', label: 'Principiante (0-6 meses)' },
      { value: 'intermedio', label: 'Intermedio (6 meses - 2 años)' },
      { value: 'avanzado', label: 'Avanzado (2+ años)' },
      { value: 'competitivo', label: 'Nivel competitivo' },
    ],
  },
  {
    id: 'objetivo',
    label: '¿Cuál es tu objetivo principal?',
    type: 'select' as const,
    options: [
      { value: '', label: 'Selecciona una opción' },
      { value: 'fuerza', label: 'Aumentar fuerza y potencia' },
      { value: 'resistencia', label: 'Mejorar resistencia cardiovascular' },
      { value: 'hipertrofia', label: 'Ganar masa muscular' },
      { value: 'perdida_peso', label: 'Pérdida de peso y tonificación' },
      { value: 'rendimiento', label: 'Mejorar rendimiento deportivo' },
      { value: 'tecnica', label: 'Perfeccionar técnica en movimientos olímpicos' },
    ],
  },
  {
    id: 'modalidad',
    label: '¿Qué modalidad de entrenamiento te interesa más?',
    type: 'select' as const,
    options: [
      { value: '', label: 'Selecciona una opción' },
      { value: 'crossfit', label: 'CrossFit' },
      { value: 'olimpico', label: 'Levantamiento Olímpico (Snatch, Clean & Jerk)' },
      { value: 'powerlifting', label: 'Powerlifting (Peso Muerto, Sentadilla, Press de Banca)' },
      { value: 'funcional', label: 'Entrenamiento Funcional' },
      { value: 'hiit', label: 'Entrenamiento HIIT' },
      { value: 'combinado', label: 'Combinación de modalidades' },
    ],
  },
  {
    id: 'frecuencia',
    label: '¿Con qué frecuencia puedes entrenar por semana?',
    type: 'select' as const,
    options: [
      { value: '', label: 'Selecciona una opción' },
      { value: '2-3', label: '2-3 veces por semana' },
      { value: '4-5', label: '4-5 veces por semana' },
      { value: '6+', label: '6 o más veces por semana' },
    ],
  },
  {
    id: 'limitaciones',
    label: '¿Tienes alguna lesión o limitación física?',
    type: 'textarea' as const,
    placeholder: 'Describe cualquier lesión previa o limitación que debamos considerar...',
  },
]

export function TrainingQuizPopup({ isOpen, onClose }: TrainingQuizPopupProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [quizData, setQuizData] = useState<QuizData>({
    nombre: '',
    apellido: '',
    correo: '',
    experiencia: '',
    objetivo: '',
    modalidad: '',
    frecuencia: '',
    limitaciones: '',
  })

  const totalSteps = 3 // Datos personales + preguntas
  const isPersonalDataStep = currentStep === 0
  const isQuizStep = currentStep === 1
  const isResultsStep = currentStep === 2

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isPersonalDataStep) {
      if (!quizData.nombre || !quizData.apellido || !quizData.correo) {
        alert('Por favor completa todos los campos personales')
        return
      }
      setCurrentStep(1)
    } else if (isQuizStep) {
      if (
        !quizData.experiencia ||
        !quizData.objetivo ||
        !quizData.modalidad ||
        !quizData.frecuencia
      ) {
        alert('Por favor responde todas las preguntas de la encuesta')
        return
      }
      setCurrentStep(2)
    } else {
      // Enviar datos finales
      console.log('Datos completos de la encuesta:', quizData)
      alert('¡Encuesta completada! Te contactaremos pronto con recomendaciones personalizadas.')
      onClose()
      resetForm()
    }
  }

  const resetForm = () => {
    setCurrentStep(0)
    setQuizData({
      nombre: '',
      apellido: '',
      correo: '',
      experiencia: '',
      objetivo: '',
      modalidad: '',
      frecuencia: '',
      limitaciones: '',
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setQuizData({
      ...quizData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getRecommendation = () => {
    const { experiencia, objetivo, modalidad } = quizData

    if (modalidad === 'crossfit' && objetivo === 'resistencia') {
      return 'Te recomendamos nuestro programa de CrossFit enfocado en resistencia cardiovascular y metabólica.'
    } else if (modalidad === 'olimpico' && experiencia === 'principiante') {
      return 'Te sugerimos comenzar con nuestro programa básico de Levantamiento Olímpico con enfoque en técnica.'
    } else if (modalidad === 'powerlifting' && objetivo === 'fuerza') {
      return 'Nuestro programa de Powerlifting y Peso Muerto es perfecto para maximizar tu fuerza.'
    } else {
      return 'Basado en tus respuestas, diseñaremos un programa personalizado que combine las mejores técnicas para tus objetivos.'
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Fondo con CarouselBackgroundImage */}
      <div className="absolute inset-0 overflow-hidden">
        <CarouselBackgroundImage />
      </div>

      {/* Contenido del popup */}
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 max-w-2xl w-full mx-4 relative z-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>

        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Paso {currentStep + 1} de {totalSteps}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(((currentStep + 1) / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step content */}
        {isPersonalDataStep && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              ENCUESTA DE ENTRENAMIENTO
            </h2>
            <p className="text-center text-gray-600 mb-6">Primero, cuéntanos un poco sobre ti</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={quizData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-black"
                  placeholder="Ingresa tu nombre"
                />
              </div>

              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                  Apellido *
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={quizData.apellido}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-black"
                  placeholder="Ingresa tu apellido"
                />
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={quizData.correo}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-black"
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-black text-white font-semibold rounded-full shadow border border-white hover:bg-primary transition-colors duration-300"
              >
                CONTINUAR
              </button>
            </form>
          </>
        )}

        {isQuizStep && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              PREGUNTAS SOBRE ENTRENAMIENTO
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Ayúdanos a diseñar el programa perfecto para ti
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {questions.map(question => (
                <div key={question.id}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {question.label} *
                  </label>
                  {question.type === 'select' ? (
                    <select
                      name={question.id}
                      value={quizData[question.id as keyof QuizData]}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-black"
                    >
                      {question.options?.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <textarea
                      name={question.id}
                      value={quizData[question.id as keyof QuizData]}
                      onChange={handleChange}
                      placeholder={question.placeholder}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-black resize-none"
                    />
                  )}
                </div>
              ))}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 px-8 py-3 bg-gray-500 text-white font-semibold rounded-full shadow hover:bg-gray-600 transition-colors duration-300"
                >
                  ATRÁS
                </button>
                <button
                  type="submit"
                  className="flex-1 px-8 py-3 bg-black text-white font-semibold rounded-full shadow border border-white hover:bg-primary transition-colors duration-300"
                >
                  VER RESULTADOS
                </button>
              </div>
            </form>
          </>
        )}

        {isResultsStep && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              ¡RESULTADOS DE TU ENCUESTA!
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Recomendación Personalizada:
              </h3>
              <p className="text-blue-700">{getRecommendation()}</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Resumen de tus respuestas:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Experiencia:</strong> {quizData.experiencia}
                </li>
                <li>
                  <strong>Objetivo:</strong> {quizData.objetivo}
                </li>
                <li>
                  <strong>Modalidad preferida:</strong> {quizData.modalidad}
                </li>
                <li>
                  <strong>Frecuencia:</strong> {quizData.frecuencia}
                </li>
                {quizData.limitaciones && (
                  <li>
                    <strong>Limitaciones:</strong> {quizData.limitaciones}
                  </li>
                )}
              </ul>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full px-8 py-3 bg-black text-white font-semibold rounded-full shadow border border-white hover:bg-primary transition-colors duration-300"
            >
              ¡CONTACTAR PARA PLAN PERSONALIZADO!
            </button>
          </>
        )}
      </div>
    </div>
  )
}
