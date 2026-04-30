import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { whatsappForProduct } from '@/helpers/whatsapp'

const extras = [
  {
    label: 'Chocolates',
    description: 'Caja artesanal de bombones premium.',
    image: '/extras/chocolates.jpg',
    alt: 'Caja de chocolates artesanales premium en estuche dorado y crema',
  },
  {
    label: 'Peluche',
    description: 'Osito suave para acompañar tu regalo.',
    image: '/extras/peluche.jpg',
    alt: 'Osito de peluche suave color beige sobre fondo crema',
  },
  {
    label: 'Peluche con globos',
    description: 'Combo ideal para sorpresas y nacimientos.',
    image: '/extras/peluche-globos.jpg',
    alt: 'Osito de peluche sosteniendo globos pastel rosados y crema',
  },
  {
    label: 'Tarjeta personalizada',
    description: 'Escribimos tu mensaje a mano con caligrafía.',
    image: '/extras/tarjeta.jpg',
    alt: 'Tarjeta artesanal color crema con caligrafía cursiva y flor seca',
  },
  {
    label: 'Globos',
    description: 'Bouquet de globos en tonos a elección.',
    image: '/extras/globos.jpg',
    alt: 'Conjunto de globos de helio en tonos pastel crema y rosado',
  },
  {
    label: 'Mensaje personalizado',
    description: 'Etiqueta con tu dedicatoria al ramo.',
    image: '/extras/mensaje.jpg',
    alt: 'Etiqueta de papel atada con hilo a una rama de lavanda seca',
  },
]

interface ExtrasSectionProps {
  productName: string
}

export function ExtrasSection({ productName }: ExtrasSectionProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-secondary/40 p-6 md:p-10">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Sumá un detalle</p>
        <h2 className="mt-3 font-serif text-2xl md:text-3xl">
          Hacé tu regalo aún más especial
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Podemos sumar a tu pedido alguno de estos extras para que el momento sea
          inolvidable. Consultanos disponibilidad y opciones por WhatsApp.
        </p>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {extras.map(({ label, description, image, alt }) => (
          <li
            key={label}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-muted">
              <Image
                src={image || '/placeholder.svg'}
                alt={alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-3 md:p-4">
              <p className="font-serif text-sm leading-tight md:text-base">{label}</p>
              <p className="mt-1 hidden text-xs leading-snug text-muted-foreground md:block">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <a
        href={whatsappForProduct(productName)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Consultar extras por WhatsApp
      </a>
    </section>
  )
}
