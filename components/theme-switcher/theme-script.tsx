import { DEFAULT_THEME, THEME_STORAGE_KEY } from "@/lib/themes";
import Script from "next/script";

/**
 * Script inline que corre antes del primer paint y aplica el tema
 * guardado en localStorage para evitar el "flash" de colores.
 * Debe ir dentro de <head>.
 */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});var v=['rosa','verde','coral'];if(!t||v.indexOf(t)===-1){t=${JSON.stringify(DEFAULT_THEME)};}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme',${JSON.stringify(DEFAULT_THEME)});}})();`;
  return (
    <Script
      id="theme-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
