import { Link } from "react-router";
import { useState } from "react";
import { logotipo_celeste_negro, logotipo_blanco_celeste } from "~/assets";
import { useTheme } from "~/context/ThemeProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();
  const logoURL = dark ? logotipo_celeste_negro : logotipo_blanco_celeste;

  return (
    <nav className="dark:bg-white bg-black fixed w-full z-30 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo centrado */}
          <div className="absolute left-0 flex items-center h-full">
            {/* Toggle modo claro/oscuro */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                // Icono sol (modo claro)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 4.636M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              ) : (
                // Icono luna (modo oscuro)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 dark:text-black text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Link to="/" className="flex items-center justify-center">
              <img src={logoURL} alt="lastrainer_logo" className="w-auto" />
            </Link>
          </div>
          <div className="absolute right-0 flex h-full items-center">
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
            SUMMER SALE
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-white dark:text-black font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            TRAINING PROGRAMS
          </Link>
        </div>
      )}
    </nav>
  );
}
