export type ProductCategory =
  | 'cumpleanos'
  | 'aniversario'
  | 'amor'
  | 'nacimiento'
  | 'celebraciones'
  | 'condolencias'
  | 'regalos'

export type ProductBadge =
  | 'mas-vendido'
  | 'nuevo'
  | 'ideal-regalo'
  | 'temporada'

export interface Product {
  slug: string
  name: string
  category: ProductCategory
  categoryLabel: string
  shortDescription: string
  description: string
  image: string
  badges: ProductBadge[]
  isCondolence?: boolean
}

export const categories: { value: ProductCategory | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'cumpleanos', label: 'Cumpleaños' },
  { value: 'aniversario', label: 'Aniversario' },
  { value: 'amor', label: 'Amor' },
  { value: 'nacimiento', label: 'Nacimiento' },
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
    category: 'amor',
    categoryLabel: 'Amor',
    shortDescription: 'Doce rosas rojas seleccionadas, envueltas con dedicación artesanal.',
    description:
      'Un ramo eterno que habla por sí solo. Doce rosas rojas frescas, seleccionadas una por una en nuestra florería, envueltas con papel artesanal y un lazo de seda. Ideal para declaraciones de amor, aniversarios y momentos que merecen quedar grabados.',
    image: '/products/ramo-rosas-rojas.jpg',
    badges: ['mas-vendido', 'ideal-regalo'],
  },
  {
    slug: 'bouquet-primavera-pastel',
    name: 'Bouquet Primavera Pastel',
    category: 'cumpleanos',
    categoryLabel: 'Cumpleaños',
    shortDescription: 'Mezcla suave de tonos pastel con flores frescas de temporada.',
    description:
      'Un bouquet luminoso con peonías, lisianthus y rosas en tonos rosados, durazno y crema. Perfecto para cumpleaños, celebraciones especiales o simplemente para alegrar el día de alguien que querés mucho.',
    image: '/products/bouquet-primavera.jpg',
    badges: ['nuevo', 'temporada'],
  },
  {
    slug: 'caja-rosas-blancas-eternas',
    name: 'Caja de Rosas Blancas',
    category: 'aniversario',
    categoryLabel: 'Aniversario',
    shortDescription: 'Rosas blancas presentadas en caja artesanal de lujo.',
    description:
      'Elegancia pura. Una caja artesanal con rosas blancas frescas, perfectas para aniversarios, propuestas y momentos elegantes. Cada rosa es seleccionada por su forma y frescura.',
    image: '/products/caja-rosas-blancas.jpg',
    badges: ['mas-vendido'],
  },
  {
    slug: 'ramo-girasoles-campo',
    name: 'Ramo de Girasoles del Campo',
    category: 'cumpleanos',
    categoryLabel: 'Cumpleaños',
    shortDescription: 'Girasoles frescos que transmiten alegría y luz.',
    description:
      'Girasoles seleccionados acompañados de follaje verde fresco. Un ramo que regala sonrisas y transmite la calidez del sol en cada flor. Ideal para cumpleaños y momentos felices.',
    image: '/products/ramo-girasoles.jpg',
    badges: ['ideal-regalo', 'temporada'],
  },
  {
    slug: 'arreglo-bebe-nina',
    name: 'Arreglo Bienvenida Bebé Niña',
    category: 'nacimiento',
    categoryLabel: 'Nacimiento',
    shortDescription: 'Flores en tonos rosados para celebrar la llegada.',
    description:
      'Un arreglo dulce y delicado en tonos rosa pálido y blanco, pensado para dar la bienvenida a una nueva vida. Incluye rosas, gypsophila y un toque artesanal único.',
    image: '/products/arreglo-bebe-nina.jpg',
    badges: ['ideal-regalo'],
  },
  {
    slug: 'arreglo-bebe-nino',
    name: 'Arreglo Bienvenida Bebé Niño',
    category: 'nacimiento',
    categoryLabel: 'Nacimiento',
    shortDescription: 'Flores en tonos celeste y blanco para celebrar.',
    description:
      'Arreglo en tonos celestes y blancos con rosas, lisianthus y follaje fresco. Una manera cálida y artesanal de saludar a la nueva familia.',
    image: '/products/arreglo-bebe-nino.jpg',
    badges: ['ideal-regalo'],
  },
  {
    slug: 'ramo-tulipanes-mixtos',
    name: 'Ramo de Tulipanes Mixtos',
    category: 'celebraciones',
    categoryLabel: 'Celebraciones',
    shortDescription: 'Tulipanes frescos en una mezcla elegante de colores.',
    description:
      'Tulipanes holandeses frescos en una mezcla cuidadosamente elegida de colores que transmiten elegancia y modernidad. Una opción versátil para cualquier celebración.',
    image: '/products/ramo-tulipanes.jpg',
    badges: ['nuevo', 'temporada'],
  },
  {
    slug: 'ramo-peonias-rosadas',
    name: 'Ramo de Peonías Rosadas',
    category: 'amor',
    categoryLabel: 'Amor',
    shortDescription: 'Peonías de temporada, románticas y voluminosas.',
    description:
      'Peonías frescas en su mejor momento, símbolo de romance y prosperidad. Un ramo voluminoso, suave y profundamente romántico. Disponible solo en temporada.',
    image: '/products/ramo-peonias.jpg',
    badges: ['temporada', 'ideal-regalo'],
  },
  {
    slug: 'corona-condolencias-blanca',
    name: 'Corona de Condolencias Blanca',
    category: 'condolencias',
    categoryLabel: 'Condolencias',
    shortDescription: 'Corona sobria con rosas y crisantemos blancos.',
    description:
      'Una corona elaborada con respeto y dedicación, en tonos blancos y verdes. Acompaña con elegancia momentos difíciles. Coordinamos entrega directa al velatorio.',
    image: '/products/corona-condolencias.jpg',
    badges: [],
    isCondolence: true,
  },
  {
    slug: 'corazon-condolencias',
    name: 'Corazón de Condolencias',
    category: 'condolencias',
    categoryLabel: 'Condolencias',
    shortDescription: 'Arreglo en forma de corazón con flores blancas.',
    description:
      'Un arreglo en forma de corazón con flores blancas frescas, transmite consuelo y respeto. Elaborado por nuestros maestros floristas con la sobriedad que el momento merece.',
    image: '/products/corazon-condolencias.jpg',
    badges: [],
    isCondolence: true,
  },
  {
    slug: 'cruz-condolencias',
    name: 'Cruz de Condolencias',
    category: 'condolencias',
    categoryLabel: 'Condolencias',
    shortDescription: 'Cruz floral elegante en tonos blancos y verdes.',
    description:
      'Cruz floral confeccionada artesanalmente con rosas, lisianthus y follaje. Un homenaje sobrio y respetuoso para acompañar a quienes lo necesitan.',
    image: '/products/cruz-condolencias.jpg',
    badges: [],
    isCondolence: true,
  },
  {
    slug: 'ramo-mixto-otono',
    name: 'Ramo Mixto de Otoño',
    category: 'regalos',
    categoryLabel: 'Regalos',
    shortDescription: 'Tonos cálidos de temporada para un regalo especial.',
    description:
      'Una mezcla cálida con rosas durazno, ranunculus y follaje otoñal. Ideal para regalar en cualquier momento del año, transmite calidez y agradecimiento.',
    image: '/products/ramo-otono.jpg',
    badges: ['nuevo', 'temporada'],
  },
]
