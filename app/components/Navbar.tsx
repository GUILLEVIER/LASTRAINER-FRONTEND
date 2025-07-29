import { Link } from 'react-router'
import { useState } from 'react'
import { logotipo_celeste_negro, logotipo_blanco_celeste } from '~/assets'
import { useTheme } from '~/context/ThemeProvider'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { dark } = useTheme()
  const logoURL = dark ? logotipo_celeste_negro : logotipo_blanco_celeste

  return (
    <nav className="dark:bg-white bg-black fixed w-full z-30 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center h-full">
            <Link to="/" className="w-80">
              <img
                src={logoURL}
                alt="lastrainer_logo"
                className="transition-transform hover:scale-105"
              />
            </Link>
          </div>
          <div className="absolute right-0 flex items-center h-full ">
            <button
              onClick={() => setOpen(!open)}
              className="dark:text-black text-white hover:text-primary focus:outline-none"
              aria-label="Abrir menú"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-white dark:text-black font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            PROGRAMAS ONLINE
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-white dark:text-black font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            PROGRAMAS PRESENCIALES
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-white dark:text-black font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            CLASE GRATUITA
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-white dark:text-black font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            VENTA DE PRODUCTOS
          </Link>
        </div>
      )}
    </nav>
  )
}
