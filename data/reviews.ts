export interface Review {
  name: string
  stars: number
  comment: string
  source: 'Google'
  date?: string
}

export const reviews: Review[] = [
  {
    name: 'María Fernández',
    stars: 5,
    comment:
      'Pedí un ramo para el cumpleaños de mi mamá y quedé encantada. La atención por WhatsApp fue rapidísima y el ramo llegó hermoso, fresco y mejor de lo que esperaba. ¡Súper recomendados!',
    source: 'Google',
    date: 'Hace 2 semanas',
  },
  {
    name: 'Lucas Pereyra',
    stars: 5,
    comment:
      'Excelente atención, me asesoraron con paciencia para elegir el arreglo perfecto. Las flores eran de altísima calidad y la entrega fue puntual. Volveré a pedir sin dudas.',
    source: 'Google',
    date: 'Hace 1 mes',
  },
  {
    name: 'Carolina Méndez',
    stars: 5,
    comment:
      'En un momento difícil tuve que pedir una corona para un velatorio. Me trataron con muchísimo respeto y profesionalismo, y coordinaron la entrega rapidísimo. Gracias de corazón.',
    source: 'Google',
    date: 'Hace 3 semanas',
  },
  {
    name: 'Diego Romero',
    stars: 5,
    comment:
      'Encargué un ramo de rosas para mi aniversario y mi esposa quedó maravillada. Se nota el oficio y la dedicación en cada flor. Los felicito por la atención 24 hs.',
    source: 'Google',
    date: 'Hace 1 semana',
  },
  {
    name: 'Sofía Álvarez',
    stars: 5,
    comment:
      'Compré un arreglo para el nacimiento de mi sobrina y fue una preciosura. Llegó armado con tanto detalle, con un peluche y una tarjeta personalizada. Hermoso trabajo artesanal.',
    source: 'Google',
    date: 'Hace 2 meses',
  },
  {
    name: 'Martín González',
    stars: 5,
    comment:
      'La mejor florería de la zona. Trabajan con flores frescas, de temporada y se nota la diferencia. La atención es cálida y muy profesional. Totalmente recomendable.',
    source: 'Google',
    date: 'Hace 1 mes',
  },
]
