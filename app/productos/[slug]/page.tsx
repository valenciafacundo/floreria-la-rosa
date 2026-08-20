import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FloatingButtons } from '@/components/header/floating-buttons'
import { SelectedProductsFloat } from '@/components/header/selected-products-float'
import { SiteHeader } from '@/components/header/site-header'
import { SiteFooter } from '@/components/header/site-footer'
import { ProductDetail } from '@/components/product-detail/product-detail'
import { TrackSelectedProduct } from '@/components/product-detail/track-selected-product'
import { products } from '@/data/products'
import { getProductBySlug } from '@/helpers/products'
import { productUrl, SITE_URL } from '@/helpers/whatsapp'
import { JsonLd } from '@/components/seo/json-ld'
import { productSchema } from '@/helpers/structured-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Producto no encontrado | Florería La Rosa',
    }
  }

  const absoluteUrl = productUrl(product.slug)
  const absoluteImage = `${SITE_URL}${product.image}`

  return {
    title: `${product.name} | Florería La Rosa`,
    description: product.shortDescription,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: `${product.name} | Florería La Rosa`,
      description: product.shortDescription,
      url: absoluteUrl,
      siteName: 'Florería La Rosa',
      locale: 'es_AR',
      type: 'website',
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Florería La Rosa`,
      description: product.shortDescription,
      images: [absoluteImage],
    },
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <SiteHeader />
      <main>
        <TrackSelectedProduct product={product} />
        <ProductDetail product={product} />
      </main>
      <SiteFooter />
      <SelectedProductsFloat />
      <FloatingButtons />
    </>
  )
}
