import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'
import type { Route } from './+types/root'
import './app.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ThemeProvider } from './context/ThemeProvider'

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@300;400;500;600;700&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='LASTRAINER - Metodologías innovadoras en fitness y entrenamiento personalizado en Chile. Programas de Olympic Weightlifting, CrossFit y más.'
        />
        <meta
          name='keywords'
          content='fitness, entrenamiento, gym, Chile, Olympic Weightlifting, CrossFit, entrenamiento personalizado'
        />
        <meta name='author' content='LASTRAINER' />
        <meta
          property='og:title'
          content='LASTRAINER - Fitness Innovador en Chile'
        />
        <meta
          property='og:description'
          content='Metodologías innovadoras en fitness y entrenamiento personalizado'
        />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#1EE2E2' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className='pt-16'>{children}</main>
          <Footer />
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className='pt-16 p-4 container mx-auto'>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='w-full p-4 overflow-x-auto'>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
