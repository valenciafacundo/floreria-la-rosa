'use client'

import { useEffect } from 'react'
import type { Product } from '@/data/products'
import { addSelectedProduct } from '@/helpers/favorites'
import { trackProductView } from '@/helpers/analytics'

interface TrackSelectedProductProps {
  product: Product
}

export function TrackSelectedProduct({ product }: TrackSelectedProductProps) {
  useEffect(() => {
    addSelectedProduct(product)
    trackProductView({
      slug: product.slug,
      nombre: product.name,
      ocasion: product.primaryOccasion,
    })
  }, [product])

  return null
}
