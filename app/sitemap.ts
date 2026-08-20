import type { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { SITE_URL } from '@/helpers/whatsapp'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/catalogo`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/productos/${product.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes]
}
