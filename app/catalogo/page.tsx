import type { Metadata } from "next";
import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/header/site-footer";

import { FloatingButtons } from "@/components/header/floating-buttons";
import { SelectedProductsFloat } from "@/components/header/selected-products-float";
import { CatalogBrowser } from "@/components/product-grid/catalog-browser";

export const metadata: Metadata = {
  title: "Catálogo de ramos y arreglos | Florería La Rosa",
  description:
    "Explorá nuestro catálogo de ramos artesanales, arreglos para distintas ocasiones e intenciones de compra. Consultá disponibilidad por WhatsApp.",
};

export default function CatalogoPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <section className="border-b border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">
              Catálogo
            </p>
            <h1 className="mt-3 max-w-2xl text-balance font-serif text-4xl leading-tight md:text-5xl">
              Encontrá el presente ideal para tu ocasión
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
              Filtrá por ocasión, buscá por nombre o intención y consultá
              disponibilidad directamente por WhatsApp. Trabajamos con flores
              frescas seleccionadas según la temporada.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <CatalogBrowser />
          </div>
        </section>
      </main>
      <SiteFooter />
      <SelectedProductsFloat />
      <FloatingButtons />
    </>
  );
}
