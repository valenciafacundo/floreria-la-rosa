'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'

let initialized = false

/**
 * Inicializa PostHog (si hay clave) y registra los pageviews en cada navegación.
 * Sin NEXT_PUBLIC_POSTHOG_KEY no hace nada, así el sitio funciona igual.
 */
export function PostHogAnalytics() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key || initialized) return
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      capture_pageview: false,
      capture_pageleave: true,
      person_profiles: 'identified_only',
    })
    initialized = true
  }, [])

  return (
    <Suspense fallback={null}>
      <PageviewTracker />
    </Suspense>
  )
}

function PageviewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !pathname) return
    let url = window.location.origin + pathname
    const qs = searchParams?.toString()
    if (qs) url += `?${qs}`
    posthog.capture('$pageview', { $current_url: url })
  }, [pathname, searchParams])

  return null
}
