"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface ProductImageZoomProps {
  src: string;
  alt: string;
}

export function ProductImageZoom({ src, alt }: ProductImageZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [zooming, setZooming] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setZooming(true)}
      onMouseLeave={() => setZooming(false)}
      onMouseMove={handleMove}
      className="relative aspect-[4/3.2] w-full overflow-hidden rounded-[2rem] bg-secondary shadow-md"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-200 md:duration-100"
        style={
          zooming
            ? {
                transform: "scale(1.6)",
                transformOrigin: `${pos.x}% ${pos.y}%`,
              }
            : undefined
        }
      />
      <div className="pointer-events-none absolute bottom-3 right-3 hidden rounded-full bg-card/90 px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground shadow-sm md:block">
        Pasá el cursor para acercar
      </div>
    </div>
  );
}
