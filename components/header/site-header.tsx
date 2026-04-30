'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Flower2, Menu, X, MessageCircle } from 'lucide-react'
import { generalWhatsAppUrl } from '@/helpers/whatsapp'
import { cn } from '@/lib/utils'
import { ThemeSwitcher } from '@/components/theme-switcher/theme-switcher'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/#opiniones', label: 'Opiniones' },
  { href: '/#contacto', label: 'Contacto' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Flower2 className="h-5 w-5" aria-hidden="true" />
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
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />

          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Consultar por WhatsApp
          </a>

          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
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
            Consultar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
