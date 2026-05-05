"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "@/data/products";
import { Clock3, X } from "lucide-react";
import {
  getSelectedProducts,
  removeSelectedProduct,
  subscribeToSelectedProducts,
} from "@/helpers/favorites";
import { cn } from "@/lib/utils";

export function SelectedProductsFloat() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  type SelectedProduct = Product & { occasionLabel: string };

  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    [],
  );

  useEffect(() => {
    const sync = () =>
      setSelectedProducts(getSelectedProducts() as SelectedProduct[]);
    sync();
    return subscribeToSelectedProducts(sync);
  }, []);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }

    const timeout = window.setTimeout(() => setMounted(false), 280);
    document.body.style.overflow = "";
    return () => window.clearTimeout(timeout);
  }, [open]);

  if (selectedProducts.length === 0) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir tus elegidos"
        className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-card px-5 py-3.5 text-sm font-medium text-foreground shadow-lg ring-1 ring-border transition-all duration-300 hover:scale-[1.04] hover:shadow-xl md:bottom-7 md:left-7"
      >
        <Clock3 className="h-5 w-5 text-primary" aria-hidden="true" />
        <span className="hidden md:inline">Tus elegidos</span>
      </button>

      {mounted && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Cerrar panel de tus elegidos"
            className={cn(
              "absolute inset-0 bg-black/60 transition-opacity duration-300",
              open ? "opacity-100" : "opacity-0",
            )}
            onClick={() => setOpen(false)}
          />

          <aside
            className={cn(
              "absolute left-0 top-0 flex h-full w-full max-w-[450px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
              "max-[699px]:bottom-0 max-[699px]:top-auto max-[699px]:h-[48dvh] max-[699px]:max-w-full max-[699px]:rounded-t-[2rem]",
              open
                ? "translate-x-0 max-[699px]:translate-y-0"
                : "-translate-x-full max-[699px]:translate-x-0 max-[699px]:translate-y-full",
            )}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  Tu selección
                </p>
                <h2 className="mt-1 font-serif text-2xl text-foreground">
                  Tus elegidos
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4">
              <div className="space-y-3 pb-6">
                {selectedProducts.map((product) => (
                  <div
                    key={product.slug}
                    className="relative overflow-hidden rounded-3xl border-border bg-card transition-colors duration-300 hover:border-primary/30"
                  >
                    <Link
                      href={`/productos/${product.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-3 p-3 pr-24"
                    >
                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-secondary">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-primary">
                          {product.occasionLabel}
                        </p>
                        <div className="mt-1 block font-serif text-lg leading-tight text-foreground">
                          {product.name}
                        </div>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                          {product.shortDescription}
                        </p>
                      </div>
                    </Link>

                    <button
                      type="button"
                      onClick={() => removeSelectedProduct(product.slug)}
                      className="absolute right-3 top-1/2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background px-3 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      Quitar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
