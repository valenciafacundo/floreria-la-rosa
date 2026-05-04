import { Flower, Heart, Truck, Leaf, MapPin, Clock } from "lucide-react";

const items = [
  {
    icon: Flower,
    title: "Arreglos artesanales",
    description:
      "Cada ramo es armado a mano por nuestros floristas con dedicación.",
  },
  {
    icon: Heart,
    title: "Atención personalizada",
    description:
      "Te asesoramos para encontrar el regalo ideal según la ocasión.",
  },
  {
    icon: Truck,
    title: "Entregas coordinadas",
    description: "Programamos cada envío para que llegue en el momento justo.",
  },
  {
    icon: Leaf,
    title: "Flores de temporada",
    description:
      "Seleccionamos lo mejor de cada estación para asegurar frescura.",
  },
  {
    icon: MapPin,
    title: "Envíos sin cargo",
    description: "Llegamos a toda la zona centro sin costo adicional.",
  },
  {
    icon: Clock,
    title: "Atendemos 24 hs",
    description: "Estamos disponibles todos los días, a cualquier hora.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-secondary/40 py-16 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            Por qué elegirnos
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl leading-tight md:text-4xl">
            Más de 20 años cuidando cada detalle
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Combinamos oficio artesanal, asesoramiento cálido y flores
            seleccionadas para que cada entrega sea memorable.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

