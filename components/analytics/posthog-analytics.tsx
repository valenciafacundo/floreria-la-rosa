'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import {
  POSTHOG_KEY,
  POSTHOG_HOST,
  POSTHOG_UI_HOST,
  ANALYTICS_ENABLED,
} from '@/helpers/posthog-config'

let initialized = false

/**
 * Inicializa PostHog (solo en producción) y registra los pageviews en cada navegación.
 */
export function PostHogAnalytics() {
  useEffect(() => {
    if (!ANALYTICS_ENABLED || initialized) return
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      ui_host: POSTHOG_UI_HOST,
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
    if (!ANALYTICS_ENABLED || !pathname) return
    let url = window.location.origin + pathname
    const qs = searchParams?.toString()
    if (qs) url += `?${qs}`
    posthog.capture('$pageview', { $current_url: url })
  }, [pathname, searchParams])

  return null
}
