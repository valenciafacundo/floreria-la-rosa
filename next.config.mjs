/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Red de seguridad del proxy de analítica. Lo esperable es que las reglas de
  // netlify.toml atajen /eventos/* en el borde, antes de que la petición llegue
  // a Next. Si por orden de reglas no lo hicieran, estos rewrites lo resuelven
  // acá — y sin ese respaldo un fallo de ordenamiento deja la analítica muerta
  // al 100% y en silencio. Ambos apuntan al mismo destino: gane el que gane, el
  // resultado es idéntico.
  async rewrites() {
    return [
      {
        source: '/eventos/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/eventos/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ]
  },
  // posthog-js llama a rutas sin barra final; sin esto Next las redirige y rompe
  // el envío de eventos.
  skipTrailingSlashRedirect: true,
}

export default nextConfig
