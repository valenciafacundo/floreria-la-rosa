'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, MessageCircle, X, ArrowRight, Truck, Clock3, HandHelping } from 'lucide-react'
import { generalWhatsAppUrl } from '@/helpers/whatsapp'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/#opiniones', label: 'Opiniones' },
  { href: '/#contacto', label: 'Contacto' },
]

const benefits = [
  {
    icon: Truck,
    title: 'Envíos sin cargo',
    description: 'En toda la ciudad',
  },
  {
    icon: Clock3,
    title: 'Entrega en 24hs',
    description: 'Hacemos envíos todos los días',
  },
  {
    icon: HandHelping,
    title: 'Atención personalizada',
    description: 'Te asesoramos por WhatsApp',
  },
]

export function HomeBannerHeader() {
  const [open, setOpen] = useState(false)

  return (
    <section className="bg-background px-3 pt-3 md:px-6 md:pt-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
        <header className="border-b border-border/60 bg-background/95 backdrop-blur">
          <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full bg-primary/10">
                <Image
                  src="/logo-floreria-la-rosa.png"
                  alt="Logo Florería La Rosa"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-xl tracking-tight md:text-2xl">
                  Florería La Rosa
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Ramos y arreglos artesanales
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90 md:inline-flex"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Consultar disponibilidad
              </a>

              <button
                type="button"
                aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground md:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div
            className={cn(
              'overflow-hidden border-t border-border/60 bg-background transition-[max-height] duration-300 md:hidden',
              open ? 'max-h-96' : 'max-h-0',
            )}
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Navegación móvil">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-foreground/85 hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Consultar disponibilidad
              </a>
            </nav>
          </div>
        </header>

        <div className="grid items-stretch gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center px-5 py-8 md:px-10 md:py-12 lg:px-12 lg:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/70 md:text-sm">
              Florería artesanal · más de 20 años
            </p>

            <h1 className="mt-4 text-balance font-serif text-4xl leading-[0.95] tracking-tight md:text-5xl lg:text-7xl">
              Flores que son parte de
              <span className="block italic text-primary">tu historia.</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Arreglos artesanales hechos a mano, con flores frescas seleccionadas
              según la temporada. Te asesoramos para que cada ramo transmita
              exactamente lo que querés decir.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Consultar disponibilidad
              </a>
              <Link
                href="/#catalogo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                Ver catálogo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 max-lg:aspect-[16/11] lg:min-h-[620px]">
            <Image
              src="/hero-florist.jpg"
              alt="Arreglo floral artesanal destacado"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/10" />
          </div>
        </div>

        <div className="grid gap-3 border-t border-border/60 bg-background px-4 py-4 md:grid-cols-3 md:gap-6 md:px-8 md:py-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="flex items-start gap-3 rounded-2xl px-1 py-1 md:px-2">
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground md:text-base">{benefit.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
