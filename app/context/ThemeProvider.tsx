import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  dark: false,
  toggleTheme: () => { }
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      console.log('Media Query:', mediaQuery);
      mediaQuery.addEventListener('change', (e) => {
        console.log('Dark mode preference changed:', e.matches);
        setIsDark(e.matches);
      });
      setIsDark(mediaQuery.matches);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}