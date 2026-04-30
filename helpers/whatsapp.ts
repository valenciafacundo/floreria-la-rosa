// Reemplazá este número por el real de la florería (formato internacional sin +).
export const WHATSAPP_NUMBER = '5491100000000'
export const PHONE_NUMBER = '+54 11 0000-0000'
export const PHONE_HREF = 'tel:+5491100000000'

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export function whatsappForProduct(productName: string): string {
  return buildWhatsAppUrl(
    `Hola, quisiera consultar disponibilidad por ${productName}.`,
  )
}

export const generalWhatsAppUrl = buildWhatsAppUrl(
  '¡Hola! Quisiera consultar disponibilidad de ramos y arreglos florales.',
)

export const catalogWhatsAppUrl = buildWhatsAppUrl(
  '¡Hola! Estuve viendo el catálogo y me gustaría hacer una consulta.',
)
