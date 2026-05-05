import Image from "next/image";

const inlineExtras = [
  {
    label: "Chocolates",
    description: "+ detalle dulce",
    image: "/extras/chocolates.png",
  },
  {
    label: "Globo personalizado",
    description: "Con tu mensaje",
    image: "/extras/globos.png",
  },
  {
    label: "Peluche extra",
    description: "Más ternura",
    image: "/extras/peluche.png",
  },
  {
    label: "Tarjeta premium",
    description: "Dedicatoria especial",
    image: "/extras/tarjeta.png",
  },
];

export function ProductExtrasInline() {
  return (
    <div className="mt-6">
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
        También podés sumar:
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {inlineExtras.map((extra) => (
          <div
            key={extra.label}
            className="group flex flex-col rounded-2xl bg-white p-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
              <Image
                src={extra.image}
                alt={extra.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-2 px-1 text-center">
              <p className="text-[13px] font-medium leading-tight">
                {extra.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
