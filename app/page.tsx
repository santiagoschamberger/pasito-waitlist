import Image from 'next/image'
import { Footprints, Gift, MapPin } from 'lucide-react'
import { WaitlistForm } from './WaitlistForm'

export default function Page() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: 'linear-gradient(160deg, #0C6B45 0%, #084d32 100%)' }}
    >
      {/* Subtle texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 85%, rgba(238,250,122,0.08) 0%, transparent 50%), radial-gradient(circle at 85% 10%, rgba(238,250,122,0.06) 0%, transparent 45%)',
        }}
      />

      <div className="relative flex-1 flex flex-col items-center justify-center px-5 py-12 md:py-20">
        <div className="w-full max-w-md flex flex-col items-center text-center gap-8">

          {/* Logo */}
          <Image
            src="/pasitohorizontal.png"
            alt="Pasito"
            width={130}
            height={44}
            priority
            className="brightness-0 invert"
          />

          {/* Mascot */}
          <div className="relative">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(238,250,122,0.12)' }}
            >
              <Image
                src="/paloma-main.png"
                alt=""
                width={96}
                height={96}
                className="drop-shadow-lg"
                aria-hidden
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full text-xs font-bold"
              style={{ background: '#EEFA7A', color: '#0C6B45' }}
            >
              Próximamente
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1
              className="text-4xl md:text-5xl leading-tight font-display"
              style={{ color: '#EEFA7A' }}
            >
              Caminá y ganá premios
            </h1>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Pasito convierte tus pasos en descuentos y regalos en comercios cerca tuyo.
            </p>
          </div>

          {/* 3 quick pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { icon: Footprints, text: 'Caminás' },
              { icon: Gift,       text: 'Ganás pasitos' },
              { icon: MapPin,     text: 'Canjeas cerca' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)' }}
              >
                <Icon size={14} style={{ color: '#EEFA7A' }} />
                {text}
              </div>
            ))}
          </div>

          {/* Waitlist form */}
          <div className="w-full">
            <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              ANOTATE — SER EL PRIMERO EN SABER
            </p>
            <WaitlistForm />
          </div>

          {/* Social proof */}
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            +200 personas ya anotadas · Beta en CABA
          </p>
        </div>
      </div>
    </main>
  )
}
