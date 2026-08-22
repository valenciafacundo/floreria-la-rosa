// Configuración de PostHog.
//
// La "Project API Key" (phc_...) es una clave PÚBLICA de cliente: viaja incrustada
// en el JavaScript del sitio de todas formas, así que NO es un secreto y es seguro
// tenerla en el repo. Se deja como fallback porque las variables de entorno de
// Netlify no se estaban incrustando en el build; si se definen igual tienen prioridad.
export const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ||
  'phc_vicDbSGhWgbuj4sguTM5YaPm66dgGRB4XskKHLK7inn8'

export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

// Solo medimos en producción, para no ensuciar los datos con desarrollo local.
export const ANALYTICS_ENABLED = process.env.NODE_ENV === 'production'
