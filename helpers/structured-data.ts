import type { Product } from '@/data/products'
import { SITE_URL, WHATSAPP_NUMBER } from '@/helpers/whatsapp'
import { getOccasionLabel, getPrimaryOccasion } from '@/helpers/products'

const BUSINESS_NAME = 'Florería La Rosa'
const TELEPHONE = '+543875312819'

/** Schema del negocio (Florist / LocalBusiness). Se muestra en todo el sitio. */
export function floristSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/icon.png`,
    telephone: TELEPHONE,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Salta',
      addressRegion: 'Salta',
      addressCountry: 'AR',
    },
    areaServed: {
      '@type': 'City',
      name: 'Salta',
    },
    sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  }
}

/** Schema de un producto. Sin `offers` porque todavía no hay precios publicados. */
export function productSchema(product: Product): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: `${SITE_URL}${product.image}`,
    category: getOccasionLabel(getPrimaryOccasion(product)),
    brand: {
      '@type': 'Brand',
      name: BUSINESS_NAME,
    },
    url: `${SITE_URL}/productos/${product.slug}`,
  }
}
