// ============================================
// Configuración de temas de la florería.
// Para agregar un tema nuevo:
//   1. Agregalo a este array.
//   2. Definí las variables CSS en app/globals.css
//      bajo el selector [data-theme="<id>"].
// ============================================

export type ThemeId = 'rosa' | 'verde' | 'coral'

export interface ThemeOption {
  id: ThemeId
  name: string
  description: string
  // Color de muestra (cualquier valor CSS válido) usado solo para el switcher.
  swatch: string
}

export const themes: ThemeOption[] = [
  {
    id: 'rosa',
    name: 'Rosa',
    description: 'Cálido y romántico',
    swatch: 'oklch(0.5 0.14 8)',
  },
  {
    id: 'verde',
    name: 'Verde Salvia',
    description: 'Natural y artesanal',
    swatch: 'oklch(0.4 0.08 155)',
  },
  {
    id: 'coral',
    name: 'Coral',
    description: 'Vibrante y otoñal',
    swatch: 'oklch(0.55 0.15 35)',
  },
]

export const DEFAULT_THEME: ThemeId = 'verde'
export const THEME_STORAGE_KEY = 'floreria-la-rosa-theme'
