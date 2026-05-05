export type ProductOccasion =
  | 'cumpleanos'
  | 'aniversario'
  | 'amor'
  | 'nacimiento'
  | 'primavera'
  | 'dia-de-la-madre'
  | 'dia-de-la-mujer'
  | 'celebraciones'
  | 'regalos'
  | 'condolencias'

export type ProductBadge =
  | 'mas-vendido'
  | 'nuevo'
  | 'ideal-regalo'
  | 'temporada'

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
    slug: 'ramo-rosas-rojas-clasico',
    name: 'Ramo de Rosas Rojas Clásico',
    primaryOccasion: 'amor',
    occasions: ['amor', 'aniversario', 'regalos', 'dia-de-la-madre'],
    shortDescription:
      'Doce rosas rojas seleccionadas, envueltas con dedicación artesanal.',
    description:
      'Un ramo eterno que habla por sí solo. Doce rosas rojas frescas, seleccionadas una por una en nuestra florería, envueltas con papel artesanal y un lazo de seda. Ideal para declaraciones de amor, aniversarios y momentos que merecen quedar grabados.',
    image: '/products/ramo-rosas-rojas.jpg',
    badges: ['mas-vendido', 'ideal-regalo'],
    features: [
      'Flores seleccionadas de temporada',
      'Presentación lista para regalar',
      'Tarjeta con dedicatoria (opcional)',
      'Envío con cuidados especiales',
    ],
  },
  {
    slug: 'bouquet-primavera-pastel',
    name: 'Bouquet Primavera Pastel',
    primaryOccasion: 'cumpleanos',
    occasions: ['cumpleanos', 'primavera', 'celebraciones', 'dia-de-la-mujer', 'regalos'],
    shortDescription:
      'Mezcla suave de tonos pastel con flores frescas de temporada.',
    description:
      'Un bouquet luminoso con peonías, lisianthus y rosas en tonos rosados, durazno y crema. Perfecto para cumpleaños, celebraciones especiales o simplemente para alegrar el día de alguien que querés mucho.',
    image: '/products/bouquet-primavera.jpg',
    badges: ['nuevo', 'temporada'],
    features: [
      'Flores frescas de estación',
      'Combinación de tonos pastel',
      'Presentación lista para regalar',
      'Tarjeta con dedicatoria (opcional)',
    ],
  },
  {
    slug: 'caja-rosas-blancas-eternas',
    name: 'Caja de Rosas Blancas',
    primaryOccasion: 'aniversario',
    occasions: ['aniversario', 'amor', 'regalos', 'dia-de-la-madre'],
    shortDescription: 'Rosas blancas presentadas en caja artesanal de lujo.',
    description:
      'Elegancia pura. Una caja artesanal con rosas blancas frescas, perfectas para aniversarios, propuestas y momentos elegantes. Cada rosa es seleccionada por su forma y frescura.',
    image: '/products/caja-rosas-blancas.jpg',
    badges: ['mas-vendido'],
    features: [
      'Rosas blancas premium',
      'Caja artesanal de lujo',
      'Presentación lista para regalar',
      'Tarjeta con dedicatoria (opcional)',
    ],
  },
  {
    slug: 'ramo-girasoles-campo',
    name: 'Ramo de Girasoles del Campo',
    primaryOccasion: 'primavera',
    occasions: ['cumpleanos', 'primavera', 'celebraciones', 'regalos', 'dia-de-la-madre'],
    shortDescription: 'Girasoles frescos que transmiten alegría y luz.',
    description:
      'Girasoles seleccionados acompañados de follaje verde fresco. Un ramo que regala sonrisas y transmite la calidez del sol en cada flor. Ideal para cumpleaños y momentos felices.',
    image: '/products/ramo-girasoles.jpg',
    badges: ['ideal-regalo', 'temporada'],
    features: [
      'Girasoles seleccionados',
      'Follaje verde fresco',
      'Presentación artesanal',
      'Tarjeta con dedicatoria (opcional)',
    ],
  },
  {
    slug: 'arreglo-bebe-nina',
    name: 'Arreglo Bienvenida Bebé Niña',
    primaryOccasion: 'nacimiento',
    occasions: ['nacimiento', 'regalos', 'celebraciones'],
    shortDescription:
      'Flores en tonos rosados para celebrar la llegada.',
    description:
      'Un arreglo dulce y delicado en tonos rosa pálido y blanco, pensado para dar la bienvenida a una nueva vida. Incluye rosas, gypsophila y un toque artesanal único.',
    image: '/products/arreglo-bebe-nina.jpg',
    badges: ['ideal-regalo'],
    features: [
      'Flores en tonos rosados',
      'Arreglo dulce y delicado',
      'Ideal para nacimientos',
      'Tarjeta con dedicatoria incluida',
    ],
  },
  {
    slug: 'arreglo-bebe-nino',
    name: 'Arreglo Bienvenida Bebé Niño',
    primaryOccasion: 'nacimiento',
    occasions: ['nacimiento', 'regalos', 'celebraciones'],
    shortDescription:
      'Flores en tonos celeste y blanco para celebrar.',
    description:
      'Arreglo en tonos celestes y blancos con rosas, lisianthus y follaje fresco. Una manera cálida y artesanal de saludar a la nueva familia.',
    image: '/products/arreglo-bebe-nino.jpg',
    badges: ['ideal-regalo'],
    features: [
      'Flores en tonos celestes',
      'Arreglo artesanal premium',
      'Ideal para recién nacidos',
      'Tarjeta con dedicatoria incluida',
    ],
  },
  {
    slug: 'ramo-tulipanes-mixtos',
    name: 'Ramo de Tulipanes Mixtos',
    primaryOccasion: 'celebraciones',
    occasions: ['celebraciones', 'primavera', 'regalos', 'dia-de-la-mujer', 'dia-de-la-madre'],
    shortDescription:
      'Tulipanes frescos en una mezcla elegante de colores.',
    description:
      'Tulipanes holandeses frescos en una mezcla cuidadosamente elegida de colores que transmiten elegancia y modernidad. Una opción versátil para cualquier celebración.',
    image: '/products/ramo-tulipanes.jpg',
    badges: ['nuevo', 'temporada'],
    features: [
      'Tulipanes holandeses frescos',
      'Variedad de colores vibrantes',
      'Elegancia y modernidad',
      'Presentación de lujo',
    ],
  },
  {
    slug: 'ramo-peonias-rosadas',
    name: 'Ramo de Peonías Rosadas',
    primaryOccasion: 'amor',
    occasions: ['amor', 'aniversario', 'primavera', 'dia-de-la-madre', 'regalos'],
    shortDescription:
      'Peonías de temporada, románticas y voluminosas.',
    description:
      'Peonías frescas en su mejor momento, símbolo de romance y prosperidad. Un ramo voluminoso, suave y profundamente romántico. Disponible solo en temporada.',
    image: '/products/ramo-peonias.jpg',
    badges: ['temporada', 'ideal-regalo'],
    features: [
      'Peonías frescas de temporada',
      'Ramo voluminoso y romántico',
      'Símbolo de prosperidad',
      'Disponibilidad limitada',
    ],
  },
  {
    slug: 'corona-condolencias-blanca',
    name: 'Corona de Condolencias Blanca',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription:
      'Corona sobria con rosas y crisantemos blancos.',
    description:
      'Una corona elaborada con respeto y dedicación, en tonos blancos y verdes. Acompaña con elegancia momentos difíciles. Coordinamos entrega directa al velatorio.',
    image: '/products/corona-condolencias.jpg',
    badges: [],
    isCondolence: true,
  },
  {
    slug: 'corazon-condolencias',
    name: 'Corazón de Condolencias',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription:
      'Arreglo en forma de corazón con flores blancas.',
    description:
      'Un arreglo en forma de corazón con flores blancas frescas, transmite consuelo y respeto. Elaborado por nuestros maestros floristas con la sobriedad que el momento merece.',
    image: '/products/corazon-condolencias.jpg',
    badges: [],
    isCondolence: true,
  },
  {
    slug: 'cruz-condolencias',
    name: 'Cruz de Condolencias',
    primaryOccasion: 'condolencias',
    occasions: ['condolencias'],
    shortDescription:
      'Cruz floral elegante en tonos blancos y verdes.',
    description:
      'Cruz floral confeccionada artesanalmente con rosas, lisianthus y follaje. Un homenaje sobrio y respetuoso para acompañar a quienes lo necesitan.',
    image: '/products/cruz-condolencias.jpg',
    badges: [],
    isCondolence: true,
  },
  {
    slug: 'ramo-mixto-otono',
    name: 'Ramo Mixto de Otoño',
    primaryOccasion: 'regalos',
    occasions: ['regalos', 'celebraciones', 'cumpleanos', 'dia-de-la-madre'],
    shortDescription:
      'Tonos cálidos de temporada para un regalo especial.',
    description:
      'Una mezcla cálida con rosas durazno, ranunculus y follaje otoñal. Ideal para regalar en cualquier momento del año, transmite calidez y agradecimiento.',
    image: '/products/ramo-otono.jpg',
    badges: ['nuevo', 'temporada'],
    features: [
      'Mezcla cálida de temporada',
      'Rosas durazno y ranunculus',
      'Follaje otoñal seleccionado',
      'Regalo ideal para agradecer',
    ],
  },
]
