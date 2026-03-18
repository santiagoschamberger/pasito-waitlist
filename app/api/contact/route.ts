import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos.' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido.' },
        { status: 400 }
      )
    }

    // For now, we'll use Resend API to send emails
    // You can also use nodemailer, SendGrid, or any other email service
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured')
      // Fallback: log to console for development
      console.log('Contact form submission:', { name, email, message })
      return NextResponse.json({ ok: true })
    }

    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Pasito Contacto <contacto@pasito.app>',
        to: ['contacto@pasito.app'],
        reply_to: email,
        subject: `Nuevo mensaje de contacto: ${name}`,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0C6B45 0%, #084d32 100%); padding: 32px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: #EEFA7A; margin: 0; font-size: 24px;">Nuevo mensaje de contacto</h1>
            </div>
            <div style="background: #ffffff; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
              <div style="margin-bottom: 24px;">
                <h2 style="color: #0C6B45; font-size: 18px; margin: 0 0 8px 0;">De:</h2>
                <p style="margin: 0; color: #333; font-size: 16px;"><strong>${name}</strong></p>
                <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;">${email}</p>
              </div>
              <div>
                <h2 style="color: #0C6B45; font-size: 18px; margin: 0 0 8px 0;">Mensaje:</h2>
                <div style="background: #f8f8f8; padding: 16px; border-radius: 8px; border-left: 4px solid #0C6B45;">
                  <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </div>
            <div style="text-align: center; padding: 16px; color: #999; font-size: 12px;">
              <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de pasito.app</p>
            </div>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: 'No se pudo enviar el mensaje. Intentá de nuevo.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Error al procesar el pedido.' },
      { status: 500 }
    )
  }
}
