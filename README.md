# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

## Component Enhancements

### 🎨 **Resumen de las Mejoras Implementadas:**

#### **1. Componente Básico (`ImageWithBlurredBackground`)** ✨

- **Fondo difuminado**: La misma imagen de fondo con blur
- **Configuraciones personalizables**: Intensidad de blur, opacidad, sombras
- **Efectos hover**: Escala suave y brillo
- **Gradientes**: Overlay con gradiente para mejor legibilidad

#### **2. Componente Versátil (`ProductImage`)** 🔧

Incluye 4 variantes:

- **`blurred`**: Fondo difuminado (por defecto)
- **`gradient`**: Gradiente elegante
- **`pattern`**: Patrón geométrico sutil
- **`solid`**: Fondo sólido simple

### 📋 **Cómo Usar Cada Variante:**

#### **Opción 1: Básico Mejorado** (Recomendado)

```tsx
<ImageWithBlurredBackground
  src={product.img}
  alt={product.name}
  className='w-full h-40'
  blurIntensity='md'
  showShadow={true}
/>
```

#### **Opción 2: Con Control Total**

```tsx
<ImageWithBlurredBackground
  src={product.img}
  alt={product.name}
  className='w-full h-40'
  blurIntensity='xl'
  overlayOpacity={0.3}
  showShadow={true}
/>
```

#### **Opción 3: Variantes Múltiples**

```tsx
<ProductImage
  src={product.img}
  alt={product.name}
  className='w-full h-40'
  variant='gradient' // o "blurred", "pattern", "solid"
/>
```

### 🚀 **Beneficios de Cada Enfoque:**

✅ **Mejor experiencia visual**: Las imágenes ya no se ven "flotando"  
✅ **Fondos cohesivos**: Cada imagen tiene un fondo relacionado  
✅ **Efectos hover suaves**: Interacciones elegantes  
✅ **Configuración flexible**: Puedes ajustar intensidad y efectos  
✅ **Rendimiento optimizado**: Uso eficiente de CSS transforms  
✅ **Responsive**: Funciona en todos los tamaños de pantalla

### Parallax Effect Implementation

The project includes a complete parallax scrolling effect implementation with the following components:

- **`useParallax` Hook**: Optimized scroll listening with requestAnimationFrame
- **`ParallaxWrapper`**: Reusable component for applying parallax effects
- **`ParallaxImage`**: Specialized image for background use

#### Features:

- **Traditional Parallax Effect**: Background moves slower than content
- **Full Viewport Coverage**: Carousel covers entire viewport
- **Responsive Design**: Works on all screen sizes
- **Performance Optimized**: Uses CSS transforms and requestAnimationFrame
- **Smooth Animations**: Uninterrupted transitions

---

Built with ❤️ using React Router.
