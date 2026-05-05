export interface Review {
  name: string
  stars: number
  comment: string
  source: 'Google'
  date?: string
  avatar?: string
}

export const reviews: Review[] = [
  {
    name: 'Gaby Rom',
    stars: 5,
    comment:
      'Hoy día de la mujer.!! Destacó y agradezco la buena predisposición en atención.!! Muy conforme y agradecida.!! Hermosa preparación de 💐 Excelente servicio en entrega a domicilio. Muy amable.!! Gracias',
    source: 'Google',
    date: '8 de Marzo, 2025',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKqRmLjwxPKWsrYGnJ4OYYEVZmS4MFend7E4xPt6tbmqdIM6w=w144-h144-p-rp-mo-ba1-br100',
  },
  {
    name: 'Evelyn Brossard',
    stars: 5,
    comment:
      'Llame desde Entre Ríos, me atendió Ruben. Todo perfecto, organizado y llego a destino el mejor ramo. Gracias gracias!',
    source: 'Google',
    date: '30 de Abril, 2025',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKETY-zTYCUgtz3bYgU5R7aXV4Y2Gs7ZXT0cGHwJ2sTiYfZxQ=w144-h144-p-rp-mo-ba1-br100',
  },
  {
    name: 'Andru Rodriguez',
    stars: 5,
    comment:
      'Realmente sorprendida, Desde rio gallegos llame .y fue una atención rápida y perfecta de mucha confianza.muchas gracias .florería la rosa.me encanto el pedido que realice.',
    source: 'Google',
    date: '4 de Mayo, 2025',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV3NCf1FS-N-kAyO2WocLAMiAs044_84tra-VuDj7cxCTp-sGrI3w=w144-h144-p-rp-mo-ba1-br100',
  },
]
