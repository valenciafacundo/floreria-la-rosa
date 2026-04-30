import { MessageCircle } from 'lucide-react'
import { generalWhatsAppUrl } from '@/helpers/whatsapp'

export function WhatsAppFloat() {
  return (
    <a
      href={generalWhatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:scale-[1.04] hover:shadow-xl md:bottom-7 md:right-7"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden md:inline">Consultar por WhatsApp</span>
    </a>
  )
}
