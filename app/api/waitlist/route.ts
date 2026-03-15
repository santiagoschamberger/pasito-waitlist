import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  let email: string

  try {
    const body = await req.json()
    email = (body.email ?? '').trim().toLowerCase()
  } catch {
    return NextResponse.json({ error: 'Pedido inválido.' }, { status: 400 })
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Email inválido.' }, { status: 400 })
  }

  const { error } = await supabase
    .from('waitlist')
    .insert({ email })

  if (error) {
    // Unique constraint violation — already signed up
    if (error.code === '23505') {
      return NextResponse.json({ ok: true, already: true })
    }
    console.error('Waitlist insert error:', error)
    return NextResponse.json({ error: 'No se pudo guardar. Intentá de nuevo.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
