# UTILIZACIÓN DE SSR (Server Side Rendering) (Servidor con Node.js)
# COMANDOS:
# docker build -t ai_legal_react_router_builder:1.0 .
# docker run -d -p 3000:3000 --name ai_legal_react_router_container ai_legal_react_router_builder:1.0
# Etapa 1: Instalación de dependencias de desarrollo
FROM node:20-alpine AS development-dependencies-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Etapa 2: Instalación de dependencias de producción
FROM node:20-alpine AS production-dependencies-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Etapa 3: Construcción de la aplicación
FROM node:20-alpine AS build-env
WORKDIR /app
COPY . ./
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
RUN npm run build

# Etapa 4: Imagen final
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
EXPOSE 3000
CMD ["npm", "start"]

# UTILIZACIÓN DE Nginx
# COMANDOS:
# docker build -t ai_legal_react_router_builder:1.0 .
# docker run -d -p 8080:80 --name ai_legal_react_router_container ai_legal_react_router_builder:1.0
# Dockerfile para una aplicación React con React Router y Nginx
# Etapa 1: Construcción de la aplicación
FROM node:22-alpine AS development-dependencies-env-nginx
# Establecer el directorio de trabajo
WORKDIR /lastrainer-react-router-nginx
# Copiar los archivos de configuración de npm
COPY package.json package-lock.json ./
# Instalar las dependencias
RUN npm install
# Copiar el resto de los archivos de la aplicación
COPY . ./
# Construir la aplicación
RUN npm run build
# Etapa 2: Servir la aplicación
FROM nginx:alpine
# Copiar la configuración personalizada de Nginx
COPY default.conf /etc/nginx/conf.d/default.conf
# Copiar los archivos construidos desde la etapa anterior
COPY --from=development-dependencies-env-nginx /lastrainer-react-router-nginx/build/client /usr/share/nginx/html
# Exponer el puerto en el que Nginx estará escuchando
EXPOSE 80
# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]