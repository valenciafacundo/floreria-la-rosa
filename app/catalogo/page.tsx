import type { Metadata } from 'next'
import { SiteFooter } from '@/components/header/site-footer'
import { WhatsAppFloat } from '@/components/header/whatsapp-float'
import { SelectedProductsFloat } from '@/components/header/selected-products-float'
import { CatalogBrowser } from '@/components/product-grid/catalog-browser'
import { HomeBannerHeader } from '@/components/header/home-banner-header'

export const metadata: Metadata = {
  title: 'Catálogo de ramos y arreglos | Florería La Rosa',
  description:
    'Explorá nuestro catálogo de ramos artesanales, arreglos para distintas ocasiones e intenciones de compra. Consultá disponibilidad por WhatsApp.',
}

export default function CatalogoPage() {
  return (
    <>
      <main className="bg-background">
        <HomeBannerHeader />
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <CatalogBrowser />
          </div>
        </section>
      </main>
      <SiteFooter />
      <SelectedProductsFloat />
      <WhatsAppFloat />
    </>
  )
}
