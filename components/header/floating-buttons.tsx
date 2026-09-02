"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { generalWhatsAppUrl, PHONE_HREF } from "@/helpers/whatsapp";
import { trackWhatsAppClick, trackPhoneClick } from "@/helpers/analytics";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1",
          isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* WhatsApp Button */}
      <a
        href={generalWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick({ origen: "boton_flotante" })}
        className="group flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:w-64 hover:justify-start hover:px-6 hover:-translate-y-1"
      >
        <div className="flex h-14 w-14 flex-none items-center justify-center">
          <MessageCircle className="h-6 w-6" />
        </div>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-1 group-hover:max-w-xs group-hover:opacity-100">
          Chatea con nosotros
        </span>
      </a>

      {/* Call Button */}
      <a
        href={PHONE_HREF}
        onClick={() => trackPhoneClick({ origen: "boton_flotante" })}
        className="group flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:w-56 hover:justify-start hover:px-6 hover:-translate-y-1"
      >
        <div className="flex h-14 w-14 flex-none items-center justify-center">
          <Phone className="h-6 w-6" />
        </div>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-1 group-hover:max-w-xs group-hover:opacity-100">
          Llámanos
        </span>
      </a>
    </div>
  );
}
