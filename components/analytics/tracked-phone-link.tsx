'use client'

import type { ReactNode } from 'react'
import { trackPhoneClick } from '@/helpers/analytics'

interface TrackedPhoneLinkProps {
  href: string
  event: Parameters<typeof trackPhoneClick>[0]
  className?: string
  children: ReactNode
  'aria-label'?: string
}

/** <a> a tel: que registra el clic en analítica. Sirve en server components. */
export function TrackedPhoneLink({
  href,
  event,
  className,
  children,
  'aria-label': ariaLabel,
}: TrackedPhoneLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackPhoneClick(event)}
    >
      {children}
    </a>
  )
}
