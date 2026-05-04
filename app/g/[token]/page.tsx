import Image from 'next/image'
import type { Metadata } from 'next'
import { Apple, Copy, Footprints, Users } from 'lucide-react'

type PageProps = {
  params: Promise<{ token: string }>
}

const appStoreUrl =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  'https://apps.apple.com/app/pasito/id0000000000'

const playStoreUrl =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  'https://play.google.com/store/apps/details?id=ar.pasito.pasito'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { token } = await params
  return {
    title: 'Sumate a un grupo en Pasito',
    description:
      'Te invitaron a un grupo de amigos en Pasito. Bajá la app, caminá y competí por el ranking semanal.',
    openGraph: {
      title: 'Sumate a un grupo en Pasito',
      description: 'Competí con tus amigos por pasos semanales en Pasito.',
      url: `https://pasito.app/g/${encodeURIComponent(token)}`,
      type: 'website',
    },
  }
}

export default async function GroupInvitePage({ params }: PageProps) {
  const { token } = await params
  const cleanToken = token.trim()
  const inviteUrl = `https://pasito.app/g/${encodeURIComponent(cleanToken)}`

  return (
    <main
      className="min-h-[100dvh] flex flex-col"
      style={{ background: 'linear-gradient(160deg, #0C6B45 0%, #084d32 100%)' }}
    >
      <div className="relative flex justify-center pt-[max(env(safe-area-inset-top),20px)] pb-6">
        <Image
          src="/pasitohorizontal.png"
          alt="Pasito"
          width={112}
          height={38}
          priority
          className="brightness-0 invert"
        />
      </div>

      <section className="relative flex-1 flex items-center justify-center px-5 pb-10">
        <div className="w-full max-w-md">
          <div
            className="rounded-[28px] p-6 shadow-2xl"
            style={{ background: '#FFFFFF', color: '#442920' }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ background: '#EEFA7A' }}
            >
              <Users size={32} style={{ color: '#0C6B45' }} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.16em] mb-2" style={{ color: '#0C6B45' }}>
              Invitación a grupo
            </p>
            <h1 className="font-display text-[30px] leading-tight mb-3">
              Caminá con tus amigos en Pasito
            </h1>
            <p className="text-sm leading-6 mb-5" style={{ color: 'rgba(68,41,32,0.72)' }}>
              Abrí Pasito para sumarte al ranking semanal. Si todavía no tenés la app,
              descargala y usá este mismo link para entrar al grupo.
            </p>

            <div
              className="flex items-center gap-3 rounded-2xl px-4 py-3 mb-5"
              style={{ background: 'rgba(12,107,69,0.08)' }}
            >
              <Footprints size={20} style={{ color: '#0C6B45' }} />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold" style={{ color: '#0C6B45' }}>Código de invitación</p>
                <p className="text-sm font-semibold truncate">{cleanToken}</p>
              </div>
              <Copy size={18} style={{ color: 'rgba(68,41,32,0.55)' }} />
            </div>

            <div className="grid gap-3">
              <a
                href={inviteUrl}
                className="h-12 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: '#EEFA7A', color: '#0C6B45' }}
              >
                Abrir Pasito
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={appStoreUrl}
                  className="h-11 rounded-full flex items-center justify-center gap-2 text-xs font-semibold"
                  style={{ background: '#0C6B45', color: '#FFFFFF' }}
                >
                  <Apple size={16} />
                  App Store
                </a>
                <a
                  href={playStoreUrl}
                  className="h-11 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{ background: '#0C6B45', color: '#FFFFFF' }}
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
