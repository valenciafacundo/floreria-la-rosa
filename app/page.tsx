import { HomeBannerHeader } from "@/components/header/home-banner-header";
import { SiteFooter } from "@/components/header/site-footer";
import { WhatsAppFloat } from "@/components/header/whatsapp-float";
import { SelectedProductsFloat } from "@/components/header/selected-products-float";
import { FeaturedSection } from "@/components/product-grid/featured-section";
import { SelectedProductsSection } from "@/components/product-grid/selected-products-section";
import { CatalogBrowser } from "@/components/product-grid/catalog-browser";
import { ReviewsSection } from "@/components/reviews/reviews-section";
import { TrustSection } from "@/components/trust-section/trust-section";
import { ContactSection } from "@/components/contact-section/contact-section";
import { products } from "@/data/products";
import {
  getFeaturedProducts,
  getNewProducts,
  getProductsByOccasion,
} from "@/helpers/products";
import { Hero } from "@/components/hero/hero";
import { SiteHeader } from "@/components/header/site-header";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const news = getNewProducts();
  const highlights = products
    .filter((product) => !product.isCondolence)
    .slice(0, 4);
  const loveProducts = getProductsByOccasion("amor", 4);
  const celebrationProducts = getProductsByOccasion("celebraciones", 4);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        <FeaturedSection
          eyebrow="Catálogo destacado"
          title="Selección artesanal del mes"
          description="Una pequeña muestra de nuestros arreglos más queridos. Elegí el estilo, consultá disponibilidad y armamos tu regalo."
          products={highlights}
          ctaHref="/#catalogo"
          ctaLabel="Ir al catálogo"
        />

        <section id="catalogo" className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Catálogo
              </p>
              <h2 className="mt-3 text-balance font-serif text-3xl leading-tight md:text-4xl">
                Elegí el estilo y consultá disponibilidad
              </h2>
              <p className="mt-3 text-pretty text-muted-foreground">
                No trabajamos con precios fijos porque cada arreglo depende de
                la temporada, las flores disponibles y el tipo de armado que
                prefieras.
              </p>
            </div>

            <div className="mt-10">
              <CatalogBrowser />
            </div>
          </div>
        </section>

        <FeaturedSection
          background="muted"
          eyebrow="Más vendidos"
          title="Los favoritos de nuestros clientes"
          description="Los ramos y arreglos que más alegrías nos dieron este año."
          products={featured}
        />

        <FeaturedSection
          eyebrow="Novedades"
          title="Nuevos productos"
          description="Sumamos nuevas creaciones cada temporada, siempre con flores seleccionadas."
          products={news}
        />

        <FeaturedSection
          background="muted"
          eyebrow="Para regalar"
          title="Opciones para amor y aniversarios"
          description="Una selección ideal para sorprender, agradecer o celebrar momentos importantes."
          products={loveProducts}
        />

        <FeaturedSection
          eyebrow="Celebraciones"
          title="Arreglos pensados para acompañar momentos felices"
          description="Alternativas versátiles para cumpleaños, nacimientos, regalos y celebraciones especiales."
          products={celebrationProducts}
        />

        <SelectedProductsSection />

        <ReviewsSection />
        <TrustSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <SelectedProductsFloat />
      <WhatsAppFloat />
    </>
  );
}
