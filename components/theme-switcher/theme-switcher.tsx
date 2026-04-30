'use client'

import { useEffect, useRef, useState } from 'react'
import { Palette, Check } from 'lucide-react'
import { themes, DEFAULT_THEME, THEME_STORAGE_KEY, type ThemeId } from '@/lib/themes'
import { cn } from '@/lib/utils'

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<ThemeId>(DEFAULT_THEME)
  const ref = useRef<HTMLDivElement>(null)

  // Sincronizar estado con el atributo data-theme ya seteado por el script inline.
  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as ThemeId) || DEFAULT_THEME
    setActive(current)
  }, [])

  // Cerrar al hacer click afuera
  useEffect(() => {
    if (!open) return
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  function selectTheme(id: ThemeId) {
    document.documentElement.setAttribute('data-theme', id)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id)
    } catch {
      // localStorage puede no estar disponible (modo privado, etc.)
    }
    setActive(id)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Cambiar paleta de colores"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
      >
        <Palette className="h-4 w-4" aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-12 z-50 w-60 overflow-hidden rounded-2xl border border-border bg-popover p-2 shadow-xl"
        >
          <p className="px-3 pb-2 pt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Paleta de colores
          </p>
          <ul className="flex flex-col gap-0.5">
            {themes.map((theme) => {
              const isActive = active === theme.id
              return (
                <li key={theme.id}>
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={isActive}
                    onClick={() => selectTheme(theme.id)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors',
                      isActive ? 'bg-secondary' : 'hover:bg-muted',
                    )}
                  >
                    <span
                      className="h-7 w-7 flex-shrink-0 rounded-full border border-border shadow-inner"
                      style={{ background: theme.swatch }}
                      aria-hidden="true"
                    />
                    <span className="flex flex-1 flex-col leading-tight">
                      <span className="font-medium text-foreground">{theme.name}</span>
                      <span className="text-xs text-muted-foreground">{theme.description}</span>
                    </span>
                    {isActive && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
