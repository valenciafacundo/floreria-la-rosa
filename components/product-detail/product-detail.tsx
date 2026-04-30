import Link from 'next/link'
import {
  MessageCircle,
  Phone,
  ArrowLeft,
  Home,
  Leaf,
} from 'lucide-react'
import { type Product, badgeLabels } from '@/data/products'
import { whatsappForProduct, PHONE_HREF } from '@/helpers/whatsapp'
import { getRelatedProducts } from '@/helpers/products'
import { ExtrasSection } from '@/components/extras-section/extras-section'
import { ProductGrid } from '@/components/product-grid/product-grid'
import { ProductImageZoom } from '@/components/product-detail/product-image-zoom'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const related = getRelatedProducts(product, 3)

  return (
    <article className="bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-8 md:pb-24 md:pt-12">
        <nav aria-label="Migas de pan" className="mb-6 text-xs text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-primary">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/catalogo" className="hover:text-primary">
                Catálogo
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <ProductImageZoom
            src={product.image}
            alt={`${product.name} - ${product.shortDescription}`}
          />

          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary">
                {product.categoryLabel}
              </span>
              {product.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-wider"
                >
                  {badgeLabels[b]}
                </span>
              ))}
            </div>

            <h1 className="text-balance font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {product.description}
            </p>

            <div
              className={
                product.isCondolence
                  ? 'flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-4 text-sm leading-relaxed text-muted-foreground'
                  : 'flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-4 text-sm leading-relaxed text-muted-foreground'
              }
            >
              <Leaf className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden="true" />
              <p>
                {product.isCondolence
                  ? 'Coordinamos la entrega directa al velatorio o domicilio con la sobriedad y respeto que el momento merece.'
                  : 'Trabajamos con flores frescas seleccionadas según la temporada. Te asesoramos por colores, tamaños y combinaciones.'}
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappForProduct(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Consultar disponibilidad
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Llamar ahora
              </a>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Volver al catálogo
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Home className="h-3.5 w-3.5" aria-hidden="true" />
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>

        {!product.isCondolence && (
          <div className="mt-16 md:mt-20">
            <ExtrasSection productName={product.name} />
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  También podría gustarte
                </p>
                <h2 className="mt-3 font-serif text-2xl md:text-3xl">
                  Productos relacionados
                </h2>
              </div>
              <Link
                href="/catalogo"
                className="text-sm text-primary hover:underline"
              >
                Ver todo el catálogo →
              </Link>
            </div>
            <div className="mt-8">
              <ProductGrid products={related} />
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
