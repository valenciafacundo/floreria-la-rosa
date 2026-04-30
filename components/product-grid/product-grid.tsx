import { type Product } from '@/data/products'
import { ProductCard } from '@/components/product-card/product-card'

interface ProductGridProps {
  products: Product[]
  prioritizeFirst?: number
}

export function ProductGrid({ products, prioritizeFirst = 0 }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-card/50 p-10 text-center">
        <p className="font-serif text-xl">No encontramos productos con esos criterios.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Probá ajustando los filtros o el buscador.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard
          key={product.slug}
          product={product}
          priority={index < prioritizeFirst}
        />
      ))}
    </div>
  )
}
