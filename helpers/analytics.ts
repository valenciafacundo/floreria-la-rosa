import posthog from 'posthog-js'

/**
 * Capa de analítica sobre PostHog. Todos los eventos son no-op si no hay
 * NEXT_PUBLIC_POSTHOG_KEY configurada, así el sitio funciona igual sin la clave.
 */
function enabled(): boolean {
  return typeof window !== 'undefined' && Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY)
}

/** Visita a la página de detalle de un producto. */
export function trackProductView(props: {
  slug: string
  nombre: string
  ocasion: string
}) {
  if (enabled()) posthog.capture('producto_visto', props)
}

/**
 * Clic en un botón de WhatsApp. Es el evento clave: proxy de "producto deseado"
 * porque la venta se cierra fuera del sitio.
 */
export function trackWhatsAppClick(props: {
  origen: 'catalogo_card' | 'detalle' | 'general'
  producto?: string
  slug?: string
  ocasion?: string
}) {
  if (enabled()) posthog.capture('clic_whatsapp', props)
}

/** Uso del filtro por ocasión en el catálogo. */
export function trackOccasionFilter(ocasion: string) {
  if (enabled()) posthog.capture('filtro_ocasion', { ocasion })
}
