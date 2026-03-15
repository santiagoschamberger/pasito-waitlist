import type { Metadata } from 'next'
import { Paytone_One, Poppins } from 'next/font/google'
import './globals.css'

const paytone = Paytone_One({
  weight: '400',
  variable: '--font-paytone',
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pasito — Caminá y ganá premios',
  description: 'La app que te premia por caminar. Acumulá pasos y canjealos por descuentos y regalos en comercios cerca tuyo.',
  openGraph: {
    title: 'Pasito — Caminá y ganá premios',
    description: 'La app que te premia por caminar. Próximamente en Argentina.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${paytone.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
