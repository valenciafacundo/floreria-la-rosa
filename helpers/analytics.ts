import posthog from 'posthog-js'
import { ANALYTICS_ENABLED } from '@/helpers/posthog-config'

/**
 * Capa de analítica sobre PostHog. Los eventos son no-op fuera de producción,
 * así el desarrollo local no ensucia los datos.
 */
function enabled(): boolean {
  return typeof window !== 'undefined' && ANALYTICS_ENABLED
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
 * Desde dónde se abrió un canal de contacto. Los dos primeros llevan producto
 * asociado; el resto son consultas generales y dicen qué CTA funciona.
 */
export type OrigenContacto =
  | 'catalogo_card'
  | 'detalle'
  | 'boton_flotante'
  | 'hero'
  | 'header_movil'
  | 'footer'
  | 'contacto'

/**
 * Clic en un botón de WhatsApp. Es el evento clave: proxy de "producto deseado"
 * porque la venta se cierra fuera del sitio.
 */
export function trackWhatsAppClick(props: {
  origen: OrigenContacto
  producto?: string
  slug?: string
  ocasion?: string
}) {
  if (enabled()) posthog.capture('clic_whatsapp', props)
}

/**
 * Clic en un enlace de teléfono. En mobile —tres de cada cuatro visitas— es
 * intención de llamar, así que cuenta como conversión igual que WhatsApp.
 */
export function trackPhoneClick(props: { origen: OrigenContacto }) {
  if (enabled()) posthog.capture('clic_telefono', props)
}

/** Uso del filtro por ocasión en el catálogo. */
export function trackOccasionFilter(ocasion: string) {
  if (enabled()) posthog.capture('filtro_ocasion', { ocasion })
}
