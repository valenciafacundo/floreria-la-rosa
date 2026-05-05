import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Truck,
  Clock3,
  HandHelping,
} from "lucide-react";
import { generalWhatsAppUrl } from "@/helpers/whatsapp";

const benefits = [
  {
    icon: Truck,
    title: "Envíos sin cargo",
    description: "En zona centro",
  },
  {
    icon: Clock3,
    title: "Trabajamos 24hs",
    description: "Todos los días",
  },
  {
    icon: HandHelping,
    title: "Atención personalizada",
    description: "Por WhatsApp",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-8 pt-8 md:px-8 md:pb-10 md:pt-10 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-20 lg:pt-6 xl:gap-12">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Florería artesanal · más de 20 años
          </span>

          <h1 className="text-balance font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
            Flores que son parte de
            <span className="block italic text-primary">tu historia.</span>
          </h1>

          <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-lg">
            Arreglos artesanales hechos a mano, con flores frescas seleccionadas
            según la temporada. Te asesoramos para que cada ramo transmita
            exactamente lo que querés decir.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Consultar por WhatsApp
            </a>
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 mt-8 ">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-border bg-card/80 px-4 py-3 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight text-foreground">
                        {benefit.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative mt-2 aspect-[16/7] w-full overflow-hidden rounded-2xl bg-secondary shadow-md lg:hidden">
            <Image
              src="/hero-florist.jpg"
              alt="Florista artesanal armando un ramo de flores frescas de temporada"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 0px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-border/50 bg-card/90 px-3 py-1.5 text-[11px] font-medium text-foreground backdrop-blur-sm">
              <span className="font-serif text-primary">+5.000</span>
              <span className="text-muted-foreground">ramos entregados</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative aspect-[4/5] max-h-[520px] w-full overflow-hidden rounded-[2rem] bg-secondary shadow-xl xl:max-h-[580px]">
            <Image
              src="/hero-florist.jpg"
              alt="Manos de florista artesanal armando un ramo de flores frescas de temporada"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 max-w-[200px] rounded-2xl border border-border bg-card p-4 shadow-lg">
            <p className="font-serif text-2xl text-primary">+5.000</p>
            <p className="text-xs leading-snug text-muted-foreground">
              ramos entregados a clientes felices en toda la ciudad.
            </p>
          </div>
          <div className="absolute -right-6 top-10 max-w-[200px] rounded-2xl border border-border bg-card p-4 shadow-lg">
            <p className="font-serif text-sm">
              {"\u2605\u2605\u2605\u2605\u2605"}
            </p>
            <p className="text-xs leading-snug text-muted-foreground">
              {'"La mejor florería artesanal de la zona."'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
