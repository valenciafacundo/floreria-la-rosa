import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/header/site-footer";
import { WhatsAppFloat } from "@/components/header/whatsapp-float";
import { Hero } from "@/components/hero/hero";
import { TrustSection } from "@/components/trust-section/trust-section";
import { FeaturedSection } from "@/components/product-grid/featured-section";
import { ReviewsSection } from "@/components/reviews/reviews-section";
import { CommercialInfo } from "@/components/contact-section/commercial-info";
import { ContactSection } from "@/components/contact-section/contact-section";
import { products } from "@/data/products";
import { getFeaturedProducts, getNewProducts } from "@/helpers/products";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const news = getNewProducts();
  const highlights = products.slice(0, 4);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustSection />
        <FeaturedSection
          eyebrow="Catálogo destacado"
          title="Selección artesanal del mes"
          description="Una pequeña muestra de nuestros arreglos más queridos. Mirá el catálogo completo para descubrir todas las opciones."
          products={highlights}
          ctaHref="/catalogo"
          ctaLabel="Ver catálogo completo"
        />

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

        <ReviewsSection />

        <CommercialInfo />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
