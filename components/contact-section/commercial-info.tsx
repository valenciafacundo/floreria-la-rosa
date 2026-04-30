import { CreditCard, Clock, Truck, MapPin } from 'lucide-react'

const items = [
  {
    icon: CreditCard,
    title: 'Formas de pago',
    description:
      'Aceptamos tarjetas, transferencia, efectivo y PayPal para pagos internacionales.',
  },
  {
    icon: Clock,
    title: 'Horario de atención',
    description: 'Estamos disponibles todos los días, las 24 horas.',
  },
  {
    icon: Truck,
    title: 'Coordinación de entrega',
    description: 'Coordinamos cada envío según la disponibilidad y la ocasión.',
  },
  {
    icon: MapPin,
    title: 'Envíos sin cargo',
    description: 'Realizamos envíos sin costo adicional dentro de la zona centro.',
  },
]

export function CommercialInfo() {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            Información comercial
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl leading-tight md:text-4xl">
            Todo lo que necesitás saber
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
