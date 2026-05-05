"use client";

import { useEffect, useState } from "react";
import {
  getSelectedProducts,
  subscribeToSelectedProducts,
} from "@/helpers/favorites";
import { FeaturedSection } from "@/components/product-grid/featured-section";

export function SelectedProductsSection() {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  useEffect(() => {
    const sync = () => setSelectedProducts(getSelectedProducts());
    sync();
    return subscribeToSelectedProducts(sync);
  }, []);

  if (selectedProducts.length === 0) return null;

  return (
    <FeaturedSection
      id="tus-elegidos"
      eyebrow="Tus elegidos"
      title="Tus elegidos"
      description="Acá vas viendo los productos que visitaste y te interesaron para volver rápido a su detalle."
      products={selectedProducts as any}
      ctaHref="/catalogo"
      ctaLabel="Seguir explorando"
    />
  );
}
