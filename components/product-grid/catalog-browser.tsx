'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { categories, type ProductCategory } from '@/data/products'
import { filterProducts } from '@/helpers/products'
import { ProductGrid } from '@/components/product-grid/product-grid'
import { cn } from '@/lib/utils'

export function CatalogBrowser() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<ProductCategory | 'todos'>('todos')

  const filtered = useMemo(() => filterProducts(query, category), [query, category])

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre u ocasión..."
            aria-label="Buscar productos"
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0"
          role="tablist"
          aria-label="Filtrar por categoría"
        >
          {categories.map((c) => {
            const active = category === c.value
            return (
              <button
                key={c.value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(c.value)}
                className={cn(
                  'flex-none rounded-full border px-4 py-2 text-xs font-medium transition-all sm:text-sm',
                  active
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground hover:border-primary/40 hover:text-primary',
                )}
              >
                {c.label}
              </button>
            )
          })}
        </div>

        <p className="text-xs text-muted-foreground">
          Mostrando {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
        </p>
      </div>

      <div className="mt-6">
        <ProductGrid products={filtered} prioritizeFirst={4} />
      </div>
    </div>
  )
}
