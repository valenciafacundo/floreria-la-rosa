// Configuración de PostHog.
//
// La "Project API Key" (phc_...) es una clave PÚBLICA de cliente: viaja incrustada
// en el JavaScript del sitio de todas formas, así que NO es un secreto y es seguro
// tenerla en el repo. Se deja como fallback porque las variables de entorno de
// Netlify no se estaban incrustando en el build; si se definen igual tienen prioridad.
export const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ||
  'phc_vicDbSGhWgbuj4sguTM5YaPm66dgGRB4XskKHLK7inn8'

// Los eventos salen por el propio dominio en vez de us.i.posthog.com: los
// bloqueadores tienen ese dominio en sus listas y cortan el envío sin aviso.
//
// La ruta está acoplada a las reglas de netlify.toml; si cambia una, cambia la
// otra. Por eso no se puede pisar por variable de entorno: un valor apuntando al
// dominio real desactivaría el proxy en silencio, que es justo lo que no queremos.
export const POSTHOG_HOST = '/eventos'

// PostHog vive acá. El proxy solo transporta los eventos; la interfaz (toolbar,
// enlaces a las grabaciones) necesita la dirección real.
export const POSTHOG_UI_HOST = 'https://us.posthog.com'

// Solo medimos en producción, para no ensuciar los datos con desarrollo local.
export const ANALYTICS_ENABLED = process.env.NODE_ENV === 'production'
