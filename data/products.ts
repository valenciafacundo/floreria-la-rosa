export type ProductOccasion =
  | "cumpleanos"
  | "aniversario"
  | "amor"
  | "nacimiento"
  | "primavera"
  | "dia-de-la-madre"
  | "dia-de-la-mujer"
  | "celebraciones"
  | "regalos"
  | "condolencias"

export type ProductBadge = "mas-vendido" | "nuevo" | "ideal-regalo" | "temporada"

export interface Product {
  slug: string
  name: string
  primaryOccasion: ProductOccasion
  occasions: ProductOccasion[]
  shortDescription: string
  description: string
  image: string
  badges: ProductBadge[]
  isCondolence?: boolean
  features?: string[]
}

export const occasions: { value: ProductOccasion | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'amor', label: 'Amor' },
  { value: 'cumpleanos', label: 'Cumpleaños' },
  { value: 'aniversario', label: 'Aniversario' },
  { value: 'nacimiento', label: 'Nacimiento' },
  { value: 'primavera', label: 'Primavera' },
  { value: 'dia-de-la-madre', label: 'Día de la Madre' },
  { value: 'dia-de-la-mujer', label: 'Día de la Mujer' },
  { value: 'celebraciones', label: 'Celebraciones' },
  { value: 'regalos', label: 'Regalos' },
  { value: 'condolencias', label: 'Condolencias' },
]

export const badgeLabels: Record<ProductBadge, string> = {
  'mas-vendido': 'Más vendido',
  nuevo: 'Nuevo',
  'ideal-regalo': 'Ideal para regalo',
  temporada: 'Temporada',
}

export const products: Product[] = [
  {
    slug: 'ramo-peluche-ternura',
    name: 'Ramo Peluche Ternura',
    primaryOccasion: 'amor',
    occasions: ['amor', 'aniversario', 'nacimiento', 'regalos', 'cumpleanos'],
    shortDescription: 'Un regalo lleno de cariño para sorprender y acompañar.',
    description:
      'Hermoso arreglo floral pensado para regalar en bienvenidas y celebraciones.',
    image: '/products/ramo-1.png',
    badges: [],
    features: [
      'Flores seleccionadas de temporada',
      'Presentación lista para regalar',
      'Tarjeta con dedicatoria (opcional)',
    ],
  },
  {
    slug: 'ramo-pasion-viva',
    name: 'Ramo Pasión Viva',
    primaryOccasion: 'amor',
    occasions: ['amor', 'aniversario', 'nacimiento', 'regalos'],
    shortDescription: 'Colores vibrantes para felicitaciones y celebraciones',
    description:
      'Arreglo de colores intensos, ideal para aniversarios y celebraciones importantes.',
    image: '/products/ramo-2.png',
    badges: [],
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'ramo-brillo-calido',
    name: 'Ramo Brillo Cálido',
    primaryOccasion: 'amor',
    occasions: ['amor', 'aniversario', 'regalos'],
    shortDescription: 'Ideal para aniversarios y agradecimientos',
    description:
      'Ramo elegante y cálido pensado para ocasiones románticas y agradecimientos.',
    image: '/products/ramo-3.png',
    badges: [],
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'ramo-dulce-suspiro',
    name: 'Ramo Dulce Suspiro',
    primaryOccasion: 'amor',
    occasions: ['amor', 'aniversario', 'nacimiento', 'regalos'],
    shortDescription: 'Perfecto para bienvenidas y gestos de cariño',
    description:
      'Arreglo delicado en tonos suaves, ideal para nacimientos y muestras de cariño.',
    image: '/products/ramo-4.png',
    badges: [],
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'ramo-clasico-rojo',
    name: 'Ramo Clásico Rojo',
    primaryOccasion: 'regalos',
    occasions: ['regalos', 'celebraciones', 'cumpleanos'],
    shortDescription: 'El regalo ideal para cumpleaños o amor romántico',
    description:
      'Doce rosas rojas seleccionadas, envueltas con dedicación artesanal. Ideal para regalar.',
    image: '/products/ramo-5.jpg',
    badges: [],
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'ramo-rosa-puro',
    name: 'Ramo Rosa Puro',
    primaryOccasion: 'cumpleanos',
    occasions: ['cumpleanos', 'nacimiento', 'regalos'],
    shortDescription: 'Pensado para consentir y celebrar.',
    description: 'Ramo suave y elegante, perfecto para nacimientos y cumpleaños.',
    image: '/products/ramo-6.png',
    badges: [],
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'ramo-primavera-radiante',
    name: 'Ramo Primavera Radiante',
    primaryOccasion: 'cumpleanos',
    occasions: ['cumpleanos', 'regalos', 'celebraciones'],
    shortDescription: 'Alegre combinación para eventos especiales',
    description: 'Mezcla de flores de temporada para alegrar cualquier celebración.',
    image: '/products/ramo-7.png',
    badges: [],
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'ramo-corazon-vivo',
    name: 'Ramo Corazón Vivo',
    primaryOccasion: 'cumpleanos',
    occasions: ['cumpleanos', 'regalos', 'amor'],
    shortDescription: 'Expresión intensa de amor para sorpresas románticas',
    description: 'Ramo voluminoso y romántico, disponible en temporada.',
    image: '/products/ramo-8.png',
    badges: [],
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },

  // Coronas y corazones (condolencias)
  {
    slug: 'corona-roja-y-blanca-con-mono',
    name: 'Corona Roja y Blanca con Moño',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Ideal para condolencias y homenajes institucionales',
    description:
      'Corona elaborada con respeto y dedicación, en tonos blancos y verdes.',
    image: '/products/corona-1.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corona-rosa-y-blanca-con-mono',
    name: 'Corona Rosa y Blanca con Moño',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Perfecta para velatorios y ceremonias religiosas',
    description: 'Corona sobria y respetuosa, preparada para entrega.',
    image: '/products/corona-2.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corona-blanca-y-roja-con-mono',
    name: 'Corona Blanca y Roja con Moño',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Adecuada para despedidas íntimas y recordatorios colectivos',
    description: 'Corona elaborada artesanalmente con respeto.',
    image: '/products/corona-3.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corona-morada-y-blanca-con-mono',
    name: 'Corona Morada y Blanca con Moño',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Recomendada para homenajes y despedidas',
    description: 'Corona para homenajes y despedidas con sobriedad.',
    image: '/products/corona-4.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corona-fucsia-y-blanca',
    name: 'Corona Fucsia y Blanca',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Especial para despedidas y homenajes',
    description: 'Corona de tonos fucsia y blanco, respetuosa y cuidada.',
    image: '/products/corona-5.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corona-blanca-y-roja',
    name: 'Corona Blanca y Roja',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Ideal para ceremonias solemnes y homenajes laborales',
    description: 'Corona sobria y elegante para ceremonias solemnes.',
    image: '/products/corona-6.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corona-elegante-blanca',
    name: 'Corona Elegante Blanca',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Perfecta para ceremonias religiosas y homenajes solemnes',
    description: 'Corona elegante para ceremonias religiosas.',
    image: '/products/corona-7.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corona-roja-y-amarilla',
    name: 'Corona Roja y Amarilla',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Destinada a ceremonias especiales y homenajes distinguidos',
    description: 'Corona de tonos vivos para homenajes distinguidos.',
    image: '/products/corona-8.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corazon-rosa-y-morado',
    name: 'Corazón Rosa y Morado',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Para despedidas emotivas y muestras de amor eterno',
    description: 'Arreglo en forma de corazón, ideal para homenajes.',
    image: '/products/corazon-1.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corazon-blanco-y-morado',
    name: 'Corazón Blanco y Morado',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Ideal para condolencias y homenajes religiosos',
    description: 'Arreglo sobrio en tonos blancos y morados.',
    image: '/products/corazon-2.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corazon-rojo',
    name: 'Corazón Rojo',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Expresión solemne para despedidas familiares y homenajes',
    description: 'Arreglo en forma de corazón para despedidas.',
    image: '/products/corazon-3.jpg',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'corazon-multicolor',
    name: 'Corazón Multicolor',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Perfecto para ceremonias religiosas y recordatorios puros',
    description: 'Arreglo multicolor para homenajes.',
    image: '/products/corazon-4.png',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'cruz-serenidad-azul',
    name: 'Cruz Serenidad Azul',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Para ceremonias religiosas y homenajes espirituales',
    description: 'Cruz floral elegante y sobria.',
    image: '/products/cruz-1.png',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'cruz-esperanza-blanca',
    name: 'Cruz Esperanza Blanca',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Ideal para velatorios y homenajes de fe',
    description: 'Cruz diseñada para ceremonias solemnes.',
    image: '/products/cruz-2.png',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'cruz-homenaje-postumo',
    name: 'Cruz Homenaje Póstumo',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Perfecta para despedidas solemnes y ceremonias religiosas',
    description: 'Cruz elaborada artesanalmente con respeto.',
    image: '/products/cruz-3.png',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
  {
    slug: 'cruz-luz-eterna',
    name: 'Cruz Luz Eterna',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription: 'Recomendada para velatorios y ceremonias nocturnas',
    description: 'Cruz para ceremonias nocturnas y homenajes.',
    image: '/products/cruz-4.png',
    badges: [],
    isCondolence: true,
    features: ['Flores seleccionadas de temporada', 'Presentación lista para regalar'],
  },
]
