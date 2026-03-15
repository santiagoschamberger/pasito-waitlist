import Image from 'next/image'
import { Footprints, Gift, MapPin } from 'lucide-react'
import { WaitlistForm } from './WaitlistForm'

export default function Page() {
  return (
    <main
      className="h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0C6B45 0%, #084d32 100%)' }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 85%, rgba(238,250,122,0.08) 0%, transparent 50%), radial-gradient(circle at 85% 10%, rgba(238,250,122,0.06) 0%, transparent 45%)',
        }}
      />

      <div className="relative flex-1 flex flex-col items-center justify-center px-5">
        <div className="w-full max-w-sm flex flex-col items-center text-center gap-5">

          {/* Logo */}
          <Image
            src="/pasitohorizontal.png"
            alt="Pasito"
            width={100}
            height={34}
            priority
            className="brightness-0 invert"
          />

          {/* Mascot + badge */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(238,250,122,0.12)' }}
            >
              <Image
                src="/paloma-main.png"
                alt=""
                width={68}
                height={68}
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
          <div className="space-y-2">
            <h1
              className="text-3xl leading-tight font-display"
              style={{ color: '#EEFA7A' }}
            >
              Caminá y ganá premios
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
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
            <p className="text-[11px] font-semibold mb-2.5 tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
              ANOTATE — SÉ EL PRIMERO EN SABER
            </p>
            <WaitlistForm />
          </div>

          {/* Social proof */}
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            +200 personas ya anotadas · Beta en CABA
          </p>

        </div>
      </div>
    </main>
  )
}
