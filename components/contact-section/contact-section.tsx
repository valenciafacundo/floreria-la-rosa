import { MessageCircle, Phone, MapPin } from "lucide-react";
import {
  generalWhatsAppUrl,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/helpers/whatsapp";
import { TrackedWhatsAppLink } from "@/components/analytics/tracked-whatsapp-link";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-background py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-8 md:grid-cols-2 md:gap-10 md:p-10 lg:p-12">
          <div>
            <h2 className="text-balance font-serif text-3xl leading-tight md:text-4xl">
              Hablemos sobre tu próximo ramo
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Te asesoramos sin compromiso. Consultanos por colores, tamaños,
              opciones según la ocasión y disponibilidad. Estamos para
              acompañarte en cada momento, desde una celebración hasta un
              instante delicado.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackedWhatsAppLink
                href={generalWhatsAppUrl}
                event={{ origen: "contacto" }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Consultar por WhatsApp
              </TrackedWhatsAppLink>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Llamar ahora
              </a>
            </div>
          </div>

          <div className="grid gap-4 self-center">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-lg">WhatsApp</p>
                <p className="text-sm text-muted-foreground">
                  Respuesta rápida y asesoramiento personalizado.
                </p>
                <TrackedWhatsAppLink
                  href={generalWhatsAppUrl}
                  event={{ origen: "contacto" }}
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Abrir chat →
                </TrackedWhatsAppLink>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-lg">Teléfono</p>
                <p className="text-sm text-muted-foreground">
                  Atendemos todos los días, 24 hs.
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                >
                  {PHONE_NUMBER} →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-lg">Zona de cobertura</p>
                <p className="text-sm text-muted-foreground">
                  Envíos sin cargo en zona centro. Consultá por otras zonas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
