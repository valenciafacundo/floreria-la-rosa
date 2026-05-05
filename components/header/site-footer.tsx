import Link from "next/link";
import { Flower2, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import {
  generalWhatsAppUrl,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/helpers/whatsapp";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8 md:py-16">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Flower2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-serif text-2xl tracking-tight">
              Florería La Rosa
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Arreglos florales artesanales hechos con dedicación. Te asesoramos
            para que cada ramo cuente la historia que querés contar.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg">Explorar</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/catalogo" className="hover:text-primary">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/#opiniones" className="hover:text-primary">
                Opiniones
              </Link>
            </li>
            <li>
              <Link href="/#contacto" className="hover:text-primary">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MessageCircle
                className="mt-0.5 h-4 w-4 text-primary"
                aria-hidden="true"
              />
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Consultar por WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone
                className="mt-0.5 h-4 w-4 text-primary"
                aria-hidden="true"
              />
              <a href={PHONE_HREF} className="hover:text-primary">
                {PHONE_NUMBER}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock
                className="mt-0.5 h-4 w-4 text-primary"
                aria-hidden="true"
              />
              <span>Atendemos todos los días, 24 hs.</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 h-4 w-4 text-primary"
                aria-hidden="true"
              />
              <span>Envíos sin cargo en zona centro.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} Florería La Rosa. Ramos y arreglos
            artesanales.
          </p>
          <p>Hecho con dedicación, como cada uno de nuestros ramos.</p>
        </div>
      </div>
    </footer>
  );
}
