import Image from 'next/image'
import { Footprints, Gift, MapPin } from 'lucide-react'
import { WaitlistForm } from './WaitlistForm'
import { createClient } from '@supabase/supabase-js'

export const revalidate = 60

export default async function Page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { count } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
  const totalPersonas = 200 + (count ?? 0)
  return (
    <main
      className="min-h-screen flex flex-col overflow-y-auto"
      style={{ background: 'linear-gradient(160deg, #0C6B45 0%, #084d32 100%)' }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 85%, rgba(238,250,122,0.08) 0%, transparent 50%), radial-gradient(circle at 85% 10%, rgba(238,250,122,0.06) 0%, transparent 45%)',
        }}
      />

      <div className="relative flex-1 flex flex-col items-center justify-between px-5 py-6 pb-8 gap-8">

        {/* Logo — pinned to top */}
        <Image
          src="/pasitohorizontal.png"
          alt="Pasito"
          width={90}
          height={30}
          priority
          className="brightness-0 invert"
        />

        <div className="w-full max-w-sm flex flex-col items-center text-center gap-3">

          {/* Mascot + badge */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(238,250,122,0.12)' }}
            >
              <Image
                src="/paloma-main.png"
                alt=""
                width={56}
                height={56}
                className="drop-shadow-lg"
                aria-hidden
              />
            </div>
            <div
              className="px-2.5 py-0.5 rounded-full text-[11px] font-bold"
              style={{ background: '#EEFA7A', color: '#0C6B45' }}
            >
              Próximamente
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-1.5">
            <h1
              className="text-[28px] leading-tight font-display"
              style={{ color: '#EEFA7A' }}
            >
              Caminá y ganá premios
            </h1>
            <p className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Pasito convierte tus pasos en descuentos y regalos en comercios cerca tuyo. La app que te premia por adquirir hábitos saludables.
            </p>
          </div>

          {/* 3 quick pills */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {[
              { icon: Footprints, text: 'Caminás' },
              { icon: Gift,       text: 'Ganás pasitos' },
              { icon: MapPin,     text: 'Canjeas cerca' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)' }}
              >
                <Icon size={12} style={{ color: '#EEFA7A' }} />
                {text}
              </div>
            ))}
          </div>

          {/* Waitlist form */}
          <div className="w-full">
            <p className="text-[10px] font-semibold mb-2 tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Anotate — sé el primero en saber
            </p>
            <WaitlistForm />
          </div>

        </div>

        {/* Bottom — social proof + legal links */}
        <div className="flex flex-col items-center gap-2.5 mt-4">
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(238,250,122,0.12)', border: '1px solid rgba(238,250,122,0.2)' }}
          >
            <span className="text-sm font-bold" style={{ color: '#EEFA7A' }}>+{totalPersonas}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>personas ya se sumaron</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
            <a href="/contacto" className="underline hover:text-white/40 transition-colors">
              Contacto
            </a>
            <span className="hidden sm:inline">·</span>
            <a href="/privacidad" className="underline hover:text-white/40 transition-colors">
              Privacidad
            </a>
            <span className="hidden sm:inline">·</span>
            <a href="/terminos" className="underline hover:text-white/40 transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
