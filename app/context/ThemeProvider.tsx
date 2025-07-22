import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  dark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  dark: false,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setIsDark] = useState<boolean>(false)

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev
      // Persistir en localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newValue ? 'dark' : 'light')
        // Aplicar clase dark al documento
        if (newValue) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
      return newValue
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      console.log('Media Query:', mediaQuery)
      mediaQuery.addEventListener('change', (e) => {
        console.log('Dark mode preference changed:', e.matches)
        setIsDark(e.matches)
      })
      setIsDark(mediaQuery.matches)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
