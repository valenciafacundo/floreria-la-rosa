'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { type Product, badgeLabels } from '@/data/products'
import { addSelectedProduct } from '@/helpers/favorites'
import { getOccasionLabel, getPrimaryOccasion } from '@/helpers/products'
import { whatsappForProduct } from '@/helpers/whatsapp'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:rounded-3xl">
      <Link
        href={`/productos/${product.slug}`}
        onClick={() => addSelectedProduct(product)}
        className="relative block aspect-[4/4.5] overflow-hidden bg-white p-3 sm:p-4"
        aria-label={`Ver detalle de ${product.name}`}
      >
        <Image
          src={product.image}
          alt={`${product.name} - ${product.shortDescription}`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {product.badges.length > 0 && (
          <div className="absolute left-2 top-2 flex flex-wrap gap-1.5 sm:left-3 sm:top-3">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-card/95 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground shadow-sm backdrop-blur sm:px-2.5 sm:py-1 sm:text-[11px]"
              >
                {badgeLabels[badge]}
              </span>
            ))}
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-5">
        <span className="text-[10px] uppercase tracking-[0.18em] text-primary sm:text-xs">
          {getOccasionLabel(getPrimaryOccasion(product))}
        </span>
        <h3 className="font-serif text-base leading-tight sm:text-xl">
          <Link
            href={`/productos/${product.slug}`}
            onClick={() => addSelectedProduct(product)}
            className="hover:text-primary"
          >
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row sm:gap-2">
          <a
            href={whatsappForProduct(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-[11px] font-medium text-primary-foreground transition-all hover:bg-primary/90 sm:px-4 sm:py-2.5 sm:text-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Consultar</span>
          </a>
          <Link
            href={`/productos/${product.slug}`}
            onClick={() => addSelectedProduct(product)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-3 py-2 text-[11px] font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary sm:px-4 sm:py-2.5 sm:text-xs"
          >
            Ver detalle
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
