export type FeaturedSection = 'amor' | 'cumpleanos' | 'nacimiento' | 'regalos' | 'condolencias'

export const featured: Record<FeaturedSection, string[]> = {
  // Amor y aniversarios: ramos 1..4
  amor: [
    'ramo-peluche-ternura', // ramo-1
    'ramo-pasion-viva', // ramo-2
    'ramo-brillo-calido', // ramo-3
    'ramo-dulce-suspiro', // ramo-4
  ],

  // Cumpleaños: ramos 6,7,8,4
  cumpleanos: [
    'ramo-rosa-puro', // ramo-6
    'ramo-primavera-radiante', // ramo-7
    'ramo-corazon-vivo', // ramo-8
    'ramo-dulce-suspiro', // ramo-4 (repetido a propósito según pedido)
  ],

  // Nacimientos: ramos 1,2,6
  nacimiento: [
    'ramo-peluche-ternura', // ramo-1
    'ramo-pasion-viva', // ramo-2
    'ramo-rosa-puro', // ramo-6
  ],

  // Regalos especiales: ramos 7,2,8,5
  regalos: [
    'ramo-primavera-radiante', // ramo-7
    'ramo-pasion-viva', // ramo-2
    'ramo-corazon-vivo', // ramo-8
    'ramo-clasico-rojo', // ramo-5
  ],

  // Condolencias: corazon 1,2, corona 3, cruz 3
  condolencias: [
    'corazon-rosa-y-morado',
    'corazon-blanco-y-morado',
    'corona-blanca-y-roja-con-mono',
    'cruz-homenaje-postumo',
  ],
}
