# Portafolio Profesional 2025

Portafolio web profesional construido con Next.js 14 y Tailwind CSS, optimizado para procesos de contratación.

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deploy:** Vercel
- **Email:** Resend / SendGrid

## Estructura del Proyecto

```
portfolio/
├── app/                    # Páginas y rutas (App Router)
├── components/             # Componentes React
│   └── ui/                # Componentes UI reutilizables
├── lib/                   # Funciones helper y utilidades
├── data/                  # Datos en JSON (proyectos)
├── public/                # Assets estáticos
│   └── images/
│       └── projects/      # Screenshots de proyectos
└── .env.local            # Variables de entorno
```

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

Copiar `.env.example` a `.env.local` y configurar:

```bash
RESEND_API_KEY=tu_api_key
CONTACT_EMAIL=tu@email.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Build

```bash
npm run build
npm start
```

## Actualizar Contenido

### Agregar Proyecto

1. Agregar imágenes en `public/images/projects/`
2. Editar `data/projects.json` con nueva entrada
3. Commit y push (deploy automático en Vercel)

### Actualizar CV

1. Reemplazar `public/resume.pdf`
2. Commit y push

## Deploy en Vercel

1. Conectar repositorio GitHub a Vercel
2. Configurar variables de entorno en Vercel dashboard
3. Deploy automático en cada push a main

## Características

- ✅ Mobile-first responsive
- ✅ Accesibilidad WCAG 2.2
- ✅ Performance optimizada (< 3s carga)
- ✅ SEO y Open Graph
- ✅ Formulario de contacto funcional
- ✅ 3-5 proyectos como casos de estudio

## Licencia

MIT
