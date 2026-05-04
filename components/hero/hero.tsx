import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { generalWhatsAppUrl } from "@/helpers/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-12 pt-10 md:px-8 md:pb-16 md:pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Florería artesanal · más de 20 años
          </span>

          <h1 className="text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Flores que son parte de
            <span className="block italic text-primary">tu historia.</span>
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
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

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Atendemos
              24 hs
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Envíos
              sin cargo zona centro
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />{" "}
              Asesoramiento personalizado
            </span>
          </div>

          {/* Banner sutil para mobile y tablet: muestra una franja horizontal con la
              imagen del florista para aportar contexto visual sin ocupar todo el alto. */}
          <div className="relative mt-4 aspect-[16/7] w-full overflow-hidden rounded-2xl bg-secondary shadow-md lg:hidden">
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

        {/* Bloque de imagen: solo visible en pantallas grandes para que en mobile/tablet
            no ocupe todo el ancho ni obligue a hacer scroll innecesario. */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-secondary shadow-xl">
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
