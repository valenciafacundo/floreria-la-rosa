export const SITE_URL = 'https://floreria-la-rosa.netlify.app'
export const WHATSAPP_NUMBER = '5493875312819'
export const PHONE_NUMBER = '(387) 5312819'
export const PHONE_HREF = 'tel:+543875312819'

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export function productUrl(slug: string): string {
  return `${SITE_URL}/productos/${slug}`
}

export function whatsappForProduct(productName: string, slug?: string): string {
  const productLink = slug ? `\n${productUrl(slug)}` : ''

  return buildWhatsAppUrl(
    `Hola! Me interesa este producto: ${productName}. ¿Podrían pasarme disponibilidad y precio actualizado? Gracias!${productLink}`,
  )
}

export const generalWhatsAppUrl = buildWhatsAppUrl(
  '¡Hola! Quisiera consultar disponibilidad de ramos y arreglos florales.',
)

export const catalogWhatsAppUrl = buildWhatsAppUrl(
  '¡Hola! Estuve viendo el catálogo y me gustaría hacer una consulta.',
)
