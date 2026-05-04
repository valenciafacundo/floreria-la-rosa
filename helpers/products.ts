import {
  badgeLabels,
  occasions,
  products,
  type Product,
  type ProductOccasion,
} from '@/data/products'

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getOccasionLabel(occasion: ProductOccasion): string {
  return (
    occasions.find((item) => item.value === occasion)?.label ||
    occasion.replace(/-/g, ' ')
  )
}

export function getPrimaryOccasion(product: Product): ProductOccasion {
  return product.occasions[0] || 'regalos'
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameOccasion = products.filter(
    (candidate) =>
      candidate.slug !== product.slug &&
      candidate.occasions.some((occasion) => product.occasions.includes(occasion)),
  )

  if (sameOccasion.length >= limit) return sameOccasion.slice(0, limit)

  const others = products.filter(
    (candidate) =>
      candidate.slug !== product.slug &&
      !sameOccasion.some((item) => item.slug === candidate.slug) &&
      (product.isCondolence ? candidate.isCondolence : !candidate.isCondolence),
  )

  return [...sameOccasion, ...others].slice(0, limit)
}

export function filterProducts(
  query: string,
  occasion: ProductOccasion | 'todos',
): Product[] {
  const q = query.trim().toLowerCase()

  return products.filter((product) => {
    const matchesOccasion =
      occasion === 'todos' || product.occasions.includes(occasion)

    if (!matchesOccasion) return false
    if (!q) return true

    const occasionLabels = product.occasions.map((item) => getOccasionLabel(item).toLowerCase())
    const badges = product.badges.map((badge) => badgeLabels[badge].toLowerCase())

    return (
      product.name.toLowerCase().includes(q) ||
      product.shortDescription.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.occasions.some((item) => item.toLowerCase().includes(q)) ||
      occasionLabels.some((label) => label.includes(q)) ||
      badges.some((badge) => badge.includes(q))
    )
  })
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badges.includes('mas-vendido')).slice(0, 4)
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.badges.includes('nuevo')).slice(0, 4)
}

export function getProductsByOccasion(
  occasion: ProductOccasion,
  limit = 4,
): Product[] {
  return products.filter((product) => product.occasions.includes(occasion)).slice(0, limit)
}
