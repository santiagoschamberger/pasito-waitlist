'use client'

import { useEffect, useRef, useState } from 'react'

type Platform = 'ios' | 'android' | 'desktop'

type Props = {
  token: string
  inviteUrl: string
  appStoreUrl: string
  playStoreUrl: string
}

const APP_BUNDLE_ID = 'ar.pasito.pasito'
// How long iOS waits for the app to take focus before sending the user to the
// App Store. Tuned so the iOS confirm dialog has time to appear.
const IOS_FALLBACK_MS = 1800

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'desktop'
  const ua = navigator.userAgent || (navigator as { vendor?: string }).vendor || ''

  if (/android/i.test(ua)) return 'android'
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios'
  // iPadOS 13+ pretends to be desktop Mac; fall back to the touch heuristic.
  if (
    typeof window !== 'undefined' &&
    /Macintosh/.test(ua) &&
    'ontouchend' in document
  ) {
    return 'ios'
  }
  return 'desktop'
}

function buildAndroidIntentUrl(token: string, fallback: string): string {
  // Chrome on Android handles intent:// natively. If the app is installed and
  // the assetlinks fingerprint matches, it auto-opens. Otherwise Chrome
  // navigates to S.browser_fallback_url (the Play Store URL).
  const path = `/g/${encodeURIComponent(token)}`
  const params = [
    'scheme=https',
    `package=${APP_BUNDLE_ID}`,
    `S.browser_fallback_url=${encodeURIComponent(fallback)}`,
    'end',
  ].join(';')
  return `intent://www.pasito.app${path}#Intent;${params}`
}

export default function InviteRedirect({
  token,
  inviteUrl,
  appStoreUrl,
  playStoreUrl,
}: Props) {
  const [platform, setPlatform] = useState<Platform | null>(null)
  const [stage, setStage] = useState<'redirecting' | 'desktop'>('redirecting')
  const [copied, setCopied] = useState(false)
  const startedRef = useRef(false)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true

    const detected = detectPlatform()
    setPlatform(detected)

    if (detected === 'android') {
      // intent:// URL covers both branches (open app or go to Play Store).
      window.location.replace(buildAndroidIntentUrl(token, playStoreUrl))
      return
    }

    if (detected === 'ios') {
      const customSchemeUrl = `${APP_BUNDLE_ID}://g/${encodeURIComponent(token)}`
      const fallbackTimer = window.setTimeout(() => {
        if (document.visibilityState === 'visible') {
          window.location.replace(appStoreUrl)
        }
      }, IOS_FALLBACK_MS)

      const onHidden = () => {
        if (document.visibilityState === 'hidden') {
          window.clearTimeout(fallbackTimer)
          document.removeEventListener('visibilitychange', onHidden)
        }
      }
      document.addEventListener('visibilitychange', onHidden)

      // Trigger the custom scheme. iOS will open the app if installed; if not,
      // the page stays visible and the timer above falls back to the store.
      window.location.href = customSchemeUrl
      return
    }

    setStage('desktop')
  }, [token, appStoreUrl, playStoreUrl])

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore — user can still copy from the address bar
    }
  }

  if (stage === 'desktop') {
    return (
      <div className="grid gap-3 text-center">
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.86)' }}>
          Abrí este link desde tu teléfono para sumarte al grupo.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={appStoreUrl}
            className="h-11 rounded-full flex items-center justify-center text-xs font-semibold"
            style={{ background: '#EEFA7A', color: '#0C6B45' }}
          >
            App Store
          </a>
          <a
            href={playStoreUrl}
            className="h-11 rounded-full flex items-center justify-center text-xs font-semibold"
            style={{ background: '#EEFA7A', color: '#0C6B45' }}
          >
            Google Play
          </a>
        </div>
        <button
          type="button"
          onClick={copyLink}
          className="h-10 rounded-full flex items-center justify-center text-xs font-semibold"
          style={{
            background: 'rgba(255,255,255,0.12)',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.22)',
          }}
        >
          {copied ? '¡Link copiado!' : 'Copiar link de invitación'}
        </button>
      </div>
    )
  }

  return (
    <div className="grid place-items-center gap-4">
      <span
        aria-hidden
        className="block h-10 w-10 rounded-full border-2 border-white/30 border-t-white animate-spin"
      />
      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
        Abriendo Pasito…
      </p>
      {platform === 'ios' ? (
        <a
          href={appStoreUrl}
          className="text-xs font-semibold underline"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          ¿No se abrió? Bajá la app
        </a>
      ) : null}
    </div>
  )
}
