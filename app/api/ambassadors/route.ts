import { NextRequest, NextResponse } from 'next/server'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

type AmbassadorLead = {
  fullName: string
  instagram: string
  location: string
  email: string
  whatsapp: string
}

let supabase: SupabaseClient | null = null

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    return null
  }

  if (!supabase) {
    supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
      },
    })
  }
  return supabase
}

function readString(body: Record<string, unknown>, key: keyof AmbassadorLead) {
  const value = body[key]
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function leadHtml(lead: AmbassadorLead) {
  const rows = [
    ['Nombre y apellido', lead.fullName],
    ['Instagram', lead.instagram],
    ['Barrio / provincia', lead.location],
    ['Mail', lead.email],
    ['WhatsApp', lead.whatsapp],
  ]

  return `
    <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px; margin: 0 auto; background: #FBF8E8;">
      <div style="background: #0C6B45; padding: 32px; border-radius: 12px 12px 0 0;">
        <p style="margin: 0 0 8px; color: #EEFA7A; font-size: 12px; font-weight: 700; text-transform: uppercase;">Embajadores Pasito</p>
        <h1 style="margin: 0; color: #ffffff; font-size: 28px; line-height: 1.1;">Nuevo lead de Embajador</h1>
      </div>
      <div style="padding: 28px; border: 1px solid rgba(68,41,32,0.12); border-top: 0; border-radius: 0 0 12px 12px; background: #ffffff;">
        ${rows.map(([label, value]) => `
          <div style="padding: 14px 0; border-bottom: 1px solid rgba(68,41,32,0.1);">
            <p style="margin: 0 0 4px; color: #0C6B45; font-size: 12px; font-weight: 700; text-transform: uppercase;">${escapeHtml(label)}</p>
            <p style="margin: 0; color: #442920; font-size: 16px; line-height: 1.5;">${escapeHtml(value)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
}

export async function POST(req: NextRequest) {
  let rawBody: unknown

  try {
    rawBody = await req.json()
  } catch {
    return NextResponse.json({ error: 'Pedido inválido.' }, { status: 400 })
  }

  if (!rawBody || typeof rawBody !== 'object' || Array.isArray(rawBody)) {
    return NextResponse.json({ error: 'Pedido inválido.' }, { status: 400 })
  }

  const body = rawBody as Record<string, unknown>
  const lead: AmbassadorLead = {
    fullName: readString(body, 'fullName'),
    instagram: readString(body, 'instagram'),
    location: readString(body, 'location'),
    email: readString(body, 'email').toLowerCase(),
    whatsapp: readString(body, 'whatsapp'),
  }

  if (!lead.fullName || !lead.instagram || !lead.location || !lead.email || !lead.whatsapp) {
    return NextResponse.json({ error: 'Completá todos los campos.' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: 'Mail inválido.' }, { status: 400 })
  }

  if (lead.whatsapp.replace(/\D/g, '').length < 8) {
    return NextResponse.json({ error: 'WhatsApp inválido.' }, { status: 400 })
  }

  const supabaseClient = getSupabase()

  if (!supabaseClient) {
    console.error('[ambassadors] Missing Supabase environment variables.')
    return NextResponse.json({ error: 'No se pudo guardar. Intentá de nuevo.' }, { status: 500 })
  }

  const { error: insertError } = await supabaseClient
    .from('embajadores')
    .insert({
      full_name: lead.fullName,
      instagram: lead.instagram,
      location: lead.location,
      email: lead.email,
      whatsapp: lead.whatsapp,
      user_agent: req.headers.get('user-agent'),
    })

  if (insertError) {
    console.error('[ambassadors] Supabase insert error:', insertError)
    return NextResponse.json({ error: 'No se pudo guardar. Intentá de nuevo.' }, { status: 500 })
  }

  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    return NextResponse.json({ ok: true })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Pasito Embajadores <contacto@pasito.app>',
        to: ['contacto@pasito.app'],
        reply_to: lead.email,
        subject: `Nuevo Embajador Pasito: ${lead.fullName}`,
        html: leadHtml(lead),
        text: [
          'Nuevo lead de Embajador Pasito',
          `Nombre y apellido: ${lead.fullName}`,
          `Instagram: ${lead.instagram}`,
          `Barrio / provincia: ${lead.location}`,
          `Mail: ${lead.email}`,
          `WhatsApp: ${lead.whatsapp}`,
        ].join('\n'),
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('[ambassadors] Resend API error:', error)
    }
  } catch (error) {
    console.error('[ambassadors] Resend request failed:', error)
  }

  return NextResponse.json({ ok: true })
}
