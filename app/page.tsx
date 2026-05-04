import { HomeBannerHeader } from "@/components/header/home-banner-header";
import { SiteFooter } from "@/components/header/site-footer";
import { WhatsAppFloat } from "@/components/header/whatsapp-float";
import { SelectedProductsFloat } from "@/components/header/selected-products-float";
import { FeaturedSection } from "@/components/product-grid/featured-section";
import { SelectedProductsSection } from "@/components/product-grid/selected-products-section";
import { ReviewsSection } from "@/components/reviews/reviews-section";
import { TrustSection } from "@/components/trust-section/trust-section";
import { ContactSection } from "@/components/contact-section/contact-section";
import { getProductsByOccasion } from "@/helpers/products";
import { Hero } from "@/components/hero/hero";
import { SiteHeader } from "@/components/header/site-header";

export default function HomePage() {
  const loveProducts = getProductsByOccasion("amor", 4);
  const birthdayProducts = getProductsByOccasion("cumpleanos", 4);
  const birthProducts = getProductsByOccasion("nacimiento", 4);
  const giftProducts = getProductsByOccasion("regalos", 4);
  const condolenceProducts = getProductsByOccasion("condolencias", 4);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        {/* <HomeBannerHeader /> */}

        <FeaturedSection
          eyebrow="Amor y aniversarios"
          title="Flores para decir lo que sentís"
          description="Selecciones románticas y delicadas para aniversarios, gestos especiales y momentos que querés hacer inolvidables."
          products={loveProducts}
          ctaHref="/catalogo"
          ctaLabel="Ver catálogo completo"
        />

        <FeaturedSection
          background="muted"
          eyebrow="Cumpleaños"
          title="Opciones alegres para celebrar"
          description="Ramos y arreglos que acompañan cumpleaños con color, frescura y una presentación lista para regalar."
          products={birthdayProducts}
        />

        <FeaturedSection
          eyebrow="Nacimientos"
          title="Detalles suaves para dar la bienvenida"
          description="Arreglos delicados y cálidos para acompañar la llegada de una nueva vida con flores frescas y presentación artesanal."
          products={birthProducts}
        />

        <FeaturedSection
          background="muted"
          eyebrow="Regalos especiales"
          title="Ideas versátiles para sorprender"
          description="Opciones pensadas para agradecer, felicitar o simplemente tener un gesto lindo con alguien importante."
          products={giftProducts}
        />

        <FeaturedSection
          eyebrow="Condolencias"
          title="Arreglos sobrios para acompañar con respeto"
          description="Coronas, cruces y corazones preparados con la sensibilidad necesaria para acompañar momentos difíciles."
          products={condolenceProducts}
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
