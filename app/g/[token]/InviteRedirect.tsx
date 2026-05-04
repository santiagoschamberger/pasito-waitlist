'use client'

import { useEffect, useMemo, useState } from 'react'
import { Apple, Copy } from 'lucide-react'

type Platform = 'ios' | 'android' | 'desktop'

type Props = {
  token: string
  inviteUrl: string
  appStoreUrl: string
  playStoreUrl: string
}

const APP_BUNDLE_ID = 'ar.pasito.pasito'

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'desktop'
  const ua = navigator.userAgent || (navigator as { vendor?: string }).vendor || ''

  if (/android/i.test(ua)) return 'android'
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios'
  // iPadOS 13+ pretends to be desktop Mac, detect by touch capability
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
  // Chrome on Android handles intent:// URLs natively. If the app is installed
  // and verified via assetlinks.json, it opens directly. Otherwise it falls
  // back to the URL given via S.browser_fallback_url.
  const path = `/g/${encodeURIComponent(token)}`
  const params = [
    `scheme=https`,
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
  const [platform, setPlatform] = useState<Platform>('desktop')
  const [copied, setCopied] = useState(false)
  const [opening, setOpening] = useState(false)

  useEffect(() => {
    setPlatform(detectPlatform())
  }, [])

  const customSchemeUrl = useMemo(
    () => `${APP_BUNDLE_ID}://g/${encodeURIComponent(token)}`,
    [token],
  )

  const openApp = () => {
    if (opening) return
    setOpening(true)

    if (platform === 'android') {
      // Chrome handles intent:// natively with browser_fallback_url to Play.
      window.location.href = buildAndroidIntentUrl(token, playStoreUrl)
      setTimeout(() => setOpening(false), 2500)
      return
    }

    if (platform === 'ios') {
      // Try the custom scheme first; if the app is installed it opens.
      // If after a short timeout the page is still visible, the app is not
      // installed (or not registered for this scheme), so fall back to App
      // Store. Using an iframe avoids Safari showing an error toast when the
      // scheme has no handler.
      const start = Date.now()
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.src = customSchemeUrl
      document.body.appendChild(iframe)

      const timer = window.setTimeout(() => {
        iframe.remove()
        if (Date.now() - start < 2200 && document.visibilityState === 'visible') {
          window.location.href = appStoreUrl
        }
        setOpening(false)
      }, 1500)

      const onHidden = () => {
        if (document.visibilityState === 'hidden') {
          window.clearTimeout(timer)
          iframe.remove()
          setOpening(false)
          document.removeEventListener('visibilitychange', onHidden)
        }
      }
      document.addEventListener('visibilitychange', onHidden)
      return
    }

    // Desktop: just copy the link so they can send it to their phone.
    void copyLink()
    setOpening(false)
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore — clipboard may be blocked, the link is already shown on screen
    }
  }

  const primaryLabel =
    platform === 'desktop'
      ? copied
        ? '¡Link copiado!'
        : 'Copiar link'
      : opening
        ? 'Abriendo Pasito…'
        : 'Abrir Pasito'

  const showAppStore = platform === 'ios' || platform === 'desktop'
  const showPlayStore = platform === 'android' || platform === 'desktop'

  return (
    <div className="grid gap-3">
      <button
        type="button"
        onClick={openApp}
        className="h-12 rounded-full flex items-center justify-center text-sm font-bold transition-opacity active:opacity-80"
        style={{ background: '#EEFA7A', color: '#0C6B45' }}
      >
        {primaryLabel}
      </button>

      <div
        className={
          showAppStore && showPlayStore ? 'grid grid-cols-2 gap-3' : 'grid gap-3'
        }
      >
        {showAppStore ? (
          <a
            href={appStoreUrl}
            className="h-11 rounded-full flex items-center justify-center gap-2 text-xs font-semibold"
            style={{ background: '#0C6B45', color: '#FFFFFF' }}
          >
            <Apple size={16} />
            App Store
          </a>
        ) : null}
        {showPlayStore ? (
          <a
            href={playStoreUrl}
            className="h-11 rounded-full flex items-center justify-center text-xs font-semibold"
            style={{ background: '#0C6B45', color: '#FFFFFF' }}
          >
            Google Play
          </a>
        ) : null}
      </div>

      {platform === 'desktop' ? (
        <button
          type="button"
          onClick={copyLink}
          className="h-10 rounded-full flex items-center justify-center gap-2 text-xs font-semibold border"
          style={{
            background: 'rgba(12,107,69,0.06)',
            color: '#0C6B45',
            borderColor: 'rgba(12,107,69,0.18)',
          }}
        >
          <Copy size={14} />
          {copied ? '¡Link copiado!' : 'Copiar link de invitación'}
        </button>
      ) : null}
    </div>
  )
}
