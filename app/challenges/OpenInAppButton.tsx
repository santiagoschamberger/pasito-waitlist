'use client'

import { useState } from 'react'

type Platform = 'ios' | 'android' | 'desktop'

type Props = {
  /** In-app route to open, e.g. `/challenges` or `/challenges/<id>`. */
  appPath: string
  appStoreUrl: string
  playStoreUrl: string
}

const APP_BUNDLE_ID = 'ar.pasito.pasito'
const IOS_FALLBACK_MS = 1500

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'desktop'
  const ua = navigator.userAgent || (navigator as { vendor?: string }).vendor || ''
  if (/android/i.test(ua)) return 'android'
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios'
  if (
    typeof window !== 'undefined' &&
    /Macintosh/.test(ua) &&
    'ontouchend' in document
  ) {
    return 'ios'
  }
  return 'desktop'
}

function customScheme(appPath: string): string {
  return `${APP_BUNDLE_ID}://${appPath.replace(/^\//, '')}`
}

function androidIntent(appPath: string, fallback: string): string {
  const params = [
    'scheme=https',
    `package=${APP_BUNDLE_ID}`,
    `S.browser_fallback_url=${encodeURIComponent(fallback)}`,
    'end',
  ].join(';')
  return `intent://www.pasito.app${appPath}#Intent;${params}`
}

export default function OpenInAppButton({
  appPath,
  appStoreUrl,
  playStoreUrl,
}: Props) {
  const [busy, setBusy] = useState(false)

  const open = () => {
    setBusy(true)
    const platform = detectPlatform()

    if (platform === 'android') {
      window.location.replace(androidIntent(appPath, playStoreUrl))
      return
    }

    if (platform === 'ios') {
      const timer = window.setTimeout(() => {
        if (document.visibilityState === 'visible') {
          window.location.replace(appStoreUrl)
        }
      }, IOS_FALLBACK_MS)
      const onHidden = () => {
        if (document.visibilityState === 'hidden') {
          window.clearTimeout(timer)
          document.removeEventListener('visibilitychange', onHidden)
        }
      }
      document.addEventListener('visibilitychange', onHidden)
      window.location.href = customScheme(appPath)
      return
    }

    // Desktop: no app to open — send to the store landing.
    window.location.href = appStoreUrl
  }

  return (
    <button
      type="button"
      onClick={open}
      disabled={busy}
      className="h-12 w-full rounded-full flex items-center justify-center text-sm font-extrabold"
      style={{ background: '#EEFA7A', color: '#0C6B45' }}
    >
      {busy ? 'Abriendo Pasito…' : 'Abrir en Pasito'}
    </button>
  )
}
