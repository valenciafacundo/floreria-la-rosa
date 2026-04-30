import { products, type Product, type ProductCategory } from '@/data/products'

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  // Misma categoría primero, sin incluir el producto actual.
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  )
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit)

  // Si no alcanza, completar con otros (no condolencias si el actual no lo es).
  const others = products.filter(
    (p) =>
      p.slug !== product.slug &&
      p.category !== product.category &&
      (product.isCondolence ? p.isCondolence : !p.isCondolence),
  )
  return [...sameCategory, ...others].slice(0, limit)
}

export function filterProducts(
  query: string,
  category: ProductCategory | 'todos',
): Product[] {
  const q = query.trim().toLowerCase()
  return products.filter((p) => {
    const matchCategory = category === 'todos' || p.category === category
    if (!matchCategory) return false
    if (!q) return true
    return (
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    )
  })
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badges.includes('mas-vendido')).slice(0, 4)
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.badges.includes('nuevo')).slice(0, 4)
}
