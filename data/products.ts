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
  | "condolencias";

export type ProductBadge =
  | "mas-vendido"
  | "nuevo"
  | "ideal-regalo"
  | "temporada";

export interface Product {
  slug: string;
  name: string;
  primaryOccasion: ProductOccasion;
  occasions: ProductOccasion[];
  shortDescription: string;
  description: string;
  image: string;
  badges: ProductBadge[];
  isCondolence?: boolean;
  features?: string[];
}

export const occasions: { value: ProductOccasion | "todos"; label: string }[] =
  [
    { value: "todos", label: "Todos" },
    { value: "amor", label: "Amor" },
    { value: "cumpleanos", label: "Cumpleaños" },
    { value: "aniversario", label: "Aniversario" },
    { value: "nacimiento", label: "Nacimiento" },
    { value: "primavera", label: "Primavera" },
    { value: "dia-de-la-madre", label: "Día de la Madre" },
    { value: "dia-de-la-mujer", label: "Día de la Mujer" },
    { value: "celebraciones", label: "Celebraciones" },
    { value: "regalos", label: "Regalos" },
    { value: "condolencias", label: "Condolencias" },
  ];

export const badgeLabels: Record<ProductBadge, string> = {
  "mas-vendido": "Más vendido",
  nuevo: "Nuevo",
  "ideal-regalo": "Ideal para regalo",
  temporada: "Temporada",
};

export const products: Product[] = [
  
  {
    slug: "ramo-peluche-ternura",
    name: "Ramo Peluche Ternura",
    primaryOccasion: 'nacimiento',
    occasions: [ 'regalos'],
    shortDescription:
      "Un regalo lleno de cariño para sorprender, celebrar y acompañar esos momentos que merecen una sonrisa",
    description:
      "Hermoso arreglo floral de la categoría ramos. Un regalo lleno de cariño para sorprender, celebrar y acompañar esos momentos que merecen una sonrisa. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/ramo__1.png",
    badges: [],

    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Tarjeta con dedicatoria (opcional)",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "ramo-pasion-viva",
    name: "Ramo Pasión Viva",
    primaryOccasion: "amor",
    occasions: ['aniversario'],
    shortDescription: "Colores vibrantes para felicitaciones y celebraciones",
    description:
      "Hermoso arreglo floral de la categoría ramos. Colores vibrantes para felicitaciones y celebraciones. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/ramo__2.png",
    badges: [],

    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Tarjeta con dedicatoria (opcional)",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "ramo-brillo-calido",
    name: "Ramo Brillo Cálido",
    primaryOccasion: 'amor',
    occasions: ["aniversario"],
    shortDescription: "Ideal para aniversarios y agradecimientos",
    description:
      "Hermoso arreglo floral de la categoría ramos. Ideal para aniversarios y agradecimientos. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/ramo__3.png",
    badges: [],

    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Tarjeta con dedicatoria (opcional)",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "ramo-dulce-suspiro",
    name: "Ramo Dulce Suspiro",
    primaryOccasion: "nacimiento",
    occasions: ["nacimiento"],
    shortDescription: "Perfecto para bienvenidas y gestos de cariño",
    description:
      "Hermoso arreglo floral de la categoría ramos. Perfecto para bienvenidas y gestos de cariño. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/ramo__4.png",
    badges: ["ideal-regalo"],

    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Tarjeta con dedicatoria (opcional)",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "ramo-clasico-rojo",
    name: "Ramo Clásico Rojo",
    primaryOccasion: "amor",
    occasions: ["amor", "cumpleanos"],
    shortDescription: "El regalo ideal para cumpleaños o amor romántico",
    description:
      "Hermoso arreglo floral de la categoría ramos. El regalo ideal para cumpleaños o amor romántico. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/ramo__5.png",
    badges: ["nuevo"],

    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Tarjeta con dedicatoria (opcional)",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "ramo-rosa-puro",
    name: "Ramo Rosa Puro",
    primaryOccasion: "regalos",
    occasions: ["regalos"],
    shortDescription: "Pensado para consentencias y mensajes de paz",
    description:
      "Hermoso arreglo floral de la categoría ramos. Pensado para consentencias y mensajes de paz. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/ramo__6.png",
    badges: ["ideal-regalo"],

    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Tarjeta con dedicatoria (opcional)",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "ramo-primavera-radiante",
    name: "Ramo Primavera Radiante",
    primaryOccasion: "celebraciones",
    occasions: ["celebraciones"],
    shortDescription:
      "Alegre combinación para eventos especiales y celebraciones",
    description:
      "Hermoso arreglo floral de la categoría ramos. Alegre combinación para eventos especiales y celebraciones. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/ramo__7.png",
    badges: [],

    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Tarjeta con dedicatoria (opcional)",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "ramo-corazon-vivo",
    name: "Ramo Corazón Vivo",
    primaryOccasion: "amor",
    occasions: ["amor"],
    shortDescription:
      "Expresión intensa de amor para sorpresas y ocasiones románticas",
    description:
      "Hermoso arreglo floral de la categoría ramos. Expresión intensa de amor para sorpresas y ocasiones románticas. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/ramo_8.jpg",
    badges: [],

    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Tarjeta con dedicatoria (opcional)",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corona-roja-y-blanca-con-mono",
    name: "Corona Roja y Blanca con Moño",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription: "Ideal para condolencias y homenajes institucionales",
    description:
      "Hermoso arreglo floral de la categoría coronas. Ideal para condolencias y homenajes institucionales. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corona_1.jpg",
    badges: ["mas-vendido"],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corona-rosa-y-blanca-con-mono",
    name: "Corona Rosa y Blanca con Moño",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription: "Perfecta para velatorios y ceremonias religiosas",
    description:
      "Hermoso arreglo floral de la categoría coronas. Perfecta para velatorios y ceremonias religiosas. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corona_2.jpg",
    badges: ["nuevo"],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corona-blanca-y-roja-con-mono",
    name: "Corona Blanca y Roja con Moño",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription:
      "Adecuada para despedidas íntimas y recordatorios colectivos",
    description:
      "Hermoso arreglo floral de la categoría coronas. Adecuada para despedidas íntimas y recordatorios colectivos. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corona_3.jpg",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corona-morada-y-blanca-con-mono",
    name: "Corona Morada y Blanca con Moño",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription:
      "Recomendada para homenajes y despedidas de seres queridos",
    description:
      "Hermoso arreglo floral de la categoría coronas. Recomendada para homenajes y despedidas de seres queridos. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corona_4.jpg",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corona-fucsia-y-blanca",
    name: "Corona Fucsia y Blanca",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription: "Especial para despedidas y homenajes",
    description:
      "Hermoso arreglo floral de la categoría coronas. Especial para despedidas y homenajes. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corona_5.jpg",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corona-blanca-y-roja",
    name: "Corona Blanca y Roja",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription: "Ideal para ceremonias solemnes y homenajes laborales",
    description:
      "Hermoso arreglo floral de la categoría coronas. Ideal para ceremonias solemnes y homenajes laborales. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corona_6.jpg",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corona-elegante-blanca",
    name: "Corona Elegante Blanca",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription:
      "Perfecta para ceremonias religiosas y homenajes solemnes",
    description:
      "Hermoso arreglo floral de la categoría coronas. Perfecta para ceremonias religiosas y homenajes solemnes. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corona_7.jpg",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corona-roja-y-amarilla",
    name: "Corona Roja y Amarilla",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription:
      "Destinada a ceremonias especiales y homenajes distinguidos",
    description:
      "Hermoso arreglo floral de la categoría coronas. Destinada a ceremonias especiales y homenajes distinguidos. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corona_8.jpg",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corazon-rosa-y-morado",
    name: "Corazón Rosa y Morado",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription: "Para despedidas emotivas y muestras de amor eterno",
    description:
      "Hermoso arreglo floral de la categoría corazones. Para despedidas emotivas y muestras de amor eterno. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corazon_1.jpg",
    badges: ["mas-vendido"],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corazon-blanco-y-morado",
    name: "Corazón Blanco y Morado",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription: "Ideal para condolencias y homenajes religiosos",
    description:
      "Hermoso arreglo floral de la categoría corazones. Ideal para condolencias y homenajes religiosos. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corazon_2.jpg",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corazon-rojo",
    name: "Corazón Rojo",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription:
      "Expresión solemne para despedidas familiares y homenajes",
    description:
      "Hermoso arreglo floral de la categoría corazones. Expresión solemne para despedidas familiares y homenajes. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corazon_3.jpg",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "corazon-multicolor",
    name: "Corazón Multicolor",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription:
      "Perfecto para ceremonias religiosas y recordatorios puros",
    description:
      "Hermoso arreglo floral de la categoría corazones. Perfecto para ceremonias religiosas y recordatorios puros. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/corazon__4.png",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "cruz-serenidad-azul",
    name: "Cruz Serenidad Azul",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription: "Para ceremonias religiosas y homenajes espirituales",
    description:
      "Hermoso arreglo floral de la categoría cruces. Para ceremonias religiosas y homenajes espirituales. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/cruz__1.png",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "cruz-esperanza-blanca",
    name: "Cruz Esperanza Blanca",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription: "Ideal para velatorios y homenajes de fe",
    description:
      "Hermoso arreglo floral de la categoría cruces. Ideal para velatorios y homenajes de fe. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/cruz__2.png",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "cruz-homenaje-postumo",
    name: "Cruz Homenaje Póstumo",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription:
      "Perfecta para despedidas solemnes y ceremonias religiosas",
    description:
      "Hermoso arreglo floral de la categoría cruces. Perfecta para despedidas solemnes y ceremonias religiosas. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/cruz__3.png",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
  {
    slug: "cruz-luz-eterna",
    name: "Cruz Luz Eterna",
    primaryOccasion: "condolencias",
    occasions: ["condolencias"],
    shortDescription: "Recomendada para velatorios y ceremonias nocturnas",
    description:
      "Hermoso arreglo floral de la categoría cruces. Recomendada para velatorios y ceremonias nocturnas. Diseñado con flores frescas de la mejor calidad para acompañar tus momentos más importantes.",
    image: "/products/cruz__4.png",
    badges: [],
    isCondolence: true,
    features: [
      "Flores seleccionadas de temporada",
      "Presentación lista para regalar",
      "Envío con cuidados especiales",
    ],
  },
];
