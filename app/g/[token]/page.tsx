import Image from 'next/image'
import type { Metadata } from 'next'
import InviteRedirect from './InviteRedirect'

type PageProps = {
  params: Promise<{ token: string }>
}

const appStoreUrl =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  'https://apps.apple.com/ar/search?term=pasito'

const playStoreUrl =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  'https://play.google.com/store/apps/details?id=ar.pasito.pasito'

const appStoreId = process.env.NEXT_PUBLIC_APP_STORE_ID

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { token } = await params
  const inviteUrl = `https://www.pasito.app/g/${encodeURIComponent(token)}`
  const meta: Metadata = {
    title: 'Sumate a un grupo en Pasito',
    description: 'Te invitaron a un grupo de amigos en Pasito.',
    openGraph: {
      title: 'Sumate a un grupo en Pasito',
      description: 'Competí con tus amigos por pasos semanales en Pasito.',
      url: inviteUrl,
      type: 'website',
    },
  }

  if (appStoreId) {
    meta.other = {
      'apple-itunes-app': `app-id=${appStoreId}, app-argument=${inviteUrl}`,
    }
  }

  return meta
}

export default async function GroupInvitePage({ params }: PageProps) {
  const { token } = await params
  const cleanToken = token.trim()
  const inviteUrl = `https://www.pasito.app/g/${encodeURIComponent(cleanToken)}`

  return (
    <main
      className="min-h-[100dvh] flex flex-col items-center justify-center px-6"
      style={{ background: 'linear-gradient(160deg, #0C6B45 0%, #084d32 100%)' }}
    >
      <div className="flex flex-col items-center gap-8 w-full max-w-sm">
        <Image
          src="/pasitohorizontal.png"
          alt="Pasito"
          width={112}
          height={38}
          priority
          className="brightness-0 invert"
        />
        <InviteRedirect
          token={cleanToken}
          inviteUrl={inviteUrl}
          appStoreUrl={appStoreUrl}
          playStoreUrl={playStoreUrl}
        />
      </div>
    </main>
  )
}
