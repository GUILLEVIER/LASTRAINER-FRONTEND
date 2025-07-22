import { useState } from 'react'
import { CarouselBackgroundImage } from './images/CarouselBackgroundImage'

interface FreeClassPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function FreeClassPopup({ isOpen, onClose }: FreeClassPopupProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar los datos
    console.log('Datos del formulario:', formData)
    alert('¡Solicitud enviada exitosamente!')
    onClose()
    setFormData({ nombre: '', apellido: '', correo: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Fondo con CarouselBackgroundImage */}
      <div className="absolute inset-0 overflow-hidden">
        <CarouselBackgroundImage />
      </div>
      
      {/* Contenido del popup */}
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 max-w-md w-full mx-4 relative z-10 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          ¡Solicita tu Clase Gratis!
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
              placeholder="Ingresa tu nombre"
            />
          </div>
          
          <div>
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
              placeholder="Ingresa tu apellido"
            />
          </div>
          
          <div>
            <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
              placeholder="ejemplo@correo.com"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Clase Gratis
          </button>
        </form>
      </div>
    </div>
  )
}