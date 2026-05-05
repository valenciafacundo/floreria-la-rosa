import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FloatingButtons } from '@/components/header/floating-buttons'
import { SiteHeader } from '@/components/header/site-header'
import { SiteFooter } from '@/components/header/site-footer'
import { ProductDetail } from '@/components/product-detail/product-detail'
import { TrackSelectedProduct } from '@/components/product-detail/track-selected-product'
import { products } from '@/data/products'
import { getProductBySlug } from '@/helpers/products'

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

  return {
    title: `${product.name} | Florería La Rosa`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image }],
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
      <SiteHeader />
      <main>
        <TrackSelectedProduct product={product} />
        <ProductDetail product={product} />
      </main>
      <SiteFooter />
      <FloatingButtons />
    </>
  )
}
