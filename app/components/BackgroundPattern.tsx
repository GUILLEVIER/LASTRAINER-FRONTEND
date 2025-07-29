import { patron_03_v, patron_02_v } from '~/assets'
import { useTheme } from '~/context/ThemeProvider'

export function BackgroundPattern() {
  const { dark } = useTheme()
  const backgroundImage = dark ? patron_02_v : patron_03_v

  return (
    <div
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 300px',
        opacity: dark ? 0.08 : 0.08,
      }}
    />
  )
}
