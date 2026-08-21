'use client'

import type { ReactNode } from 'react'
import { trackWhatsAppClick } from '@/helpers/analytics'

interface TrackedWhatsAppLinkProps {
  href: string
  event: Parameters<typeof trackWhatsAppClick>[0]
  className?: string
  children: ReactNode
  'aria-label'?: string
}

/** <a> a WhatsApp que registra el clic en analítica. Sirve en server components. */
export function TrackedWhatsAppLink({
  href,
  event,
  className,
  children,
  'aria-label': ariaLabel,
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackWhatsAppClick(event)}
    >
      {children}
    </a>
  )
}
