interface JsonLdProps {
  data: Record<string, unknown>
}

/**
 * Inyecta datos estructurados (schema.org) como <script type="application/ld+json">.
 * Ayuda a Google a entender el negocio y los productos (rich results, mapa, reputación).
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
