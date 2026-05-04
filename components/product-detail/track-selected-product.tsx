'use client'

import { useEffect } from 'react'
import type { Product } from '@/data/products'
import { addSelectedProduct } from '@/helpers/favorites'

interface TrackSelectedProductProps {
  product: Product
}

export function TrackSelectedProduct({ product }: TrackSelectedProductProps) {
  useEffect(() => {
    addSelectedProduct(product)
  }, [product])

  return null
}
