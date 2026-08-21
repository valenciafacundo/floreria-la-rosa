import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { PostHogAnalytics } from '@/components/analytics/posthog-analytics'
import { ThemeScript } from '@/components/theme-switcher/theme-script'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://floreria-la-rosa.netlify.app'),
  title: 'Florería La Rosa — Ramos y arreglos florales artesanales',
  description: 'Florería La Rosa: arreglos artesanales para todas las ocasiones. Entregas coordinadas, flores de temporada y atención personalizada las 24 horas por WhatsApp.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`bg-background ${plusJakartaSans.variable}`}
      data-theme="verde"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans antialiased">
        {children}
        <PostHogAnalytics />
      </body>
    </html>
  )
}
