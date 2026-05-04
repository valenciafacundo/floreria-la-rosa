'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Clock3, X } from 'lucide-react'
import {
  getSelectedProducts,
  removeSelectedProduct,
  subscribeToSelectedProducts,
} from '@/helpers/favorites'

export function SelectedProductsFloat() {
  const [open, setOpen] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState(getSelectedProducts())

  useEffect(() => {
    const sync = () => setSelectedProducts(getSelectedProducts())
    sync()
    return subscribeToSelectedProducts(sync)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  if (selectedProducts.length === 0) return null

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir tus elegidos"
        className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-card px-5 py-3.5 text-sm font-medium text-foreground shadow-lg ring-1 ring-border transition-all hover:scale-[1.04] hover:shadow-xl md:bottom-7 md:left-7"
      >
        <Clock3 className="h-5 w-5 text-primary" aria-hidden="true" />
        <span className="hidden md:inline">Tus elegidos</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Cerrar panel de tus elegidos"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <aside className="absolute left-0 top-0 flex h-full w-full max-w-[450px] flex-col bg-white shadow-2xl max-[699px]:bottom-0 max-[699px]:top-auto max-[699px]:h-[50dvh] max-[699px]:max-w-full max-[699px]:rounded-t-[2rem]">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">Tu selección</p>
                <h2 className="mt-1 font-serif text-2xl text-foreground">Tus elegidos</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="space-y-3">
                {selectedProducts.map((product) => (
                  <div
                    key={product.slug}
                    className="flex items-start gap-3 rounded-3xl border border-border bg-card p-3"
                  >
                    <Link
                      href={`/productos/${product.slug}`}
                      onClick={() => setOpen(false)}
                      className="block h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-secondary"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-primary">
                        {product.categoryLabel}
                      </p>
                      <Link
                        href={`/productos/${product.slug}`}
                        onClick={() => setOpen(false)}
                        className="mt-1 block font-serif text-lg leading-tight hover:text-primary"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {product.shortDescription}
                      </p>
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <Link
                          href={`/productos/${product.slug}`}
                          onClick={() => setOpen(false)}
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          Ver detalle
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeSelectedProduct(product.slug)}
                          className="text-xs text-muted-foreground transition-colors hover:text-primary"
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
