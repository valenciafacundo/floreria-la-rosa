import Link from "next/link";
import { MessageCircle, Check } from "lucide-react";
import { type Product, badgeLabels } from "@/data/products";
import { whatsappForProduct } from "@/helpers/whatsapp";
import { getRelatedProducts } from "@/helpers/products";
import { ProductGrid } from "@/components/product-grid/product-grid";
import { ProductImageZoom } from "@/components/product-detail/product-image-zoom";
import { ProductExtrasInline } from "@/components/product-detail/product-extras-inline";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const related = getRelatedProducts(product, 3);

  return (
    <article className="bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 md:px-8 md:pb-24 md:pt-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col">
            <ProductImageZoom
              src={product.image}
              alt={`${product.name} - ${product.shortDescription}`}
            />
            {!product.isCondolence && <ProductExtrasInline />}
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <nav
                aria-label="Migas de pan"
                className="mb-1 text-[10px] uppercase tracking-widest text-muted-foreground/60"
              >
                <ol className="flex flex-wrap items-center gap-1">
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden="true" className="mx-0.5">
                    &gt;
                  </li>
                  <li>
                    <Link href="/#catalogo" className="hover:text-primary">
                      Catálogo
                    </Link>
                  </li>
                  <li aria-hidden="true" className="mx-0.5">
                    &gt;
                  </li>
                  <li className="text-primary/80">{product.name}</li>
                </ol>
              </nav>

              <h1 className="text-balance font-serif text-2xl leading-tight md:text-3xl lg:text-4xl">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-2">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary"
                  >
                    {badgeLabels[badge]}
                  </span>
                ))}
              </div>

              <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
                {product.description}
              </p>

              {product.features && (
                <ul className="mt-2 space-y-3">
                  {product.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
                        <Check
                          className="h-3 w-3 text-primary"
                          strokeWidth={3}
                        />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="rounded-2xl border border-border bg-secondary/30 p-4 text-sm">
              <p className="font-semibold text-foreground">Disponibilidad:</p>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                Producto sujeto a disponibilidad de flores y accesorios según
                temporada.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={whatsappForProduct(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] hover:bg-primary/90 md:text-lg"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Consultar disponibilidad
              </a>
              <p className="text-center text-xs text-muted-foreground">
                Te respondemos por WhatsApp con precio actualizado y opciones.
              </p>
            </div>
          </div>
        </div>

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
                href="/#catalogo"
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
  );
}
