import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductGrid } from '@/components/product-grid/product-grid'
import { type Product } from '@/data/products'

interface FeaturedSectionProps {
  id?: string
  eyebrow: string
  title: string
  description?: string
  products: Product[]
  ctaHref?: string
  ctaLabel?: string
  background?: 'default' | 'muted'
}

export function FeaturedSection({
  id,
  eyebrow,
  title,
  description,
  products,
  ctaHref,
  ctaLabel,
  background = 'default',
}: FeaturedSectionProps) {
  return (
    <section
      id={id}
      className={
        background === 'muted'
          ? 'bg-secondary/40 py-16 md:py-24'
          : 'bg-background py-16 md:py-24'
      }
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
            <h2 className="mt-3 text-balance font-serif text-3xl leading-tight md:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-pretty text-muted-foreground">{description}</p>
            )}
          </div>
          {ctaHref && ctaLabel && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  )
}
