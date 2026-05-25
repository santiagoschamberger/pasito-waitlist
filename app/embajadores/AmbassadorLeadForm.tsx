'use client'

import { useState } from 'react'
import { ArrowRight, AtSign, CheckCircle2, Loader2, Mail, MapPin, Phone, UserRound, type LucideIcon } from 'lucide-react'

type FormState = {
  fullName: string
  instagram: string
  location: string
  email: string
  whatsapp: string
}

const INITIAL_FORM: FormState = {
  fullName: '',
  instagram: '',
  location: '',
  email: '',
  whatsapp: '',
}

function Field({
  icon: Icon,
  id,
  label,
  type = 'text',
  value,
  placeholder,
  autoComplete,
  inputMode,
  onChange,
}: {
  icon: LucideIcon
  id: keyof FormState
  label: string
  type?: string
  value: string
  placeholder: string
  autoComplete?: string
  inputMode?: 'text' | 'search' | 'email' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal'
  onChange: (field: keyof FormState, value: string) => void
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-semibold text-[#442920]">{label}</span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#0C6B45]/65" />
        <input
          id={id}
          name={id}
          type={type}
          required
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          onChange={(event) => onChange(id, event.target.value)}
          className="h-12 w-full rounded-md border border-[#442920]/15 bg-white pl-11 pr-3 text-base text-[#442920] outline-none transition focus:border-[#0C6B45] focus:ring-2 focus:ring-[#EEFA7A]"
        />
      </span>
    </label>
  )
}

export function AmbassadorLeadForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const response = await fetch('/api/ambassadors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          email: form.email.trim().toLowerCase(),
          instagram: form.instagram.trim(),
          fullName: form.fullName.trim(),
          location: form.location.trim(),
          whatsapp: form.whatsapp.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus('error')
        setError(data.error ?? 'No pudimos enviar tus datos. Intentá de nuevo.')
        return
      }

      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
      setError('Sin conexión. Intentá de nuevo en unos segundos.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-[#EEFA7A]/50 bg-white p-6 text-center shadow-[0_18px_60px_rgba(0,0,0,0.18)]" id="formulario">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#EEFA7A] text-[#0C6B45]">
          <CheckCircle2 size={26} />
        </div>
        <h2 className="mt-5 font-display text-3xl leading-tight text-[#0C6B45]">Ya tenemos tus datos.</h2>
        <p className="mt-3 text-sm leading-6 text-[#442920]/70">
          Gracias por querer ser Embajador Pasito. Te vamos a contactar por mail o WhatsApp para avanzar con tu link personal.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-[#0C6B45]/20 px-5 py-3 text-sm font-bold text-[#0C6B45] transition hover:bg-[#0C6B45]/5"
        >
          Enviar otra postulación
        </button>
      </div>
    )
  }

  return (
    <form
      id="formulario"
      onSubmit={handleSubmit}
      className="rounded-lg border border-[#EEFA7A]/35 bg-[#FBF8E8] p-5 text-[#442920] shadow-[0_18px_60px_rgba(0,0,0,0.22)] sm:p-6"
    >
      <div className="border-b border-[#442920]/10 pb-5">
        <h2 className="font-display text-3xl leading-tight text-[#442920]">
          Postulate como embajador <span className="text-[#0C6B45]">PASITO</span>
        </h2>
      </div>

      <div className="mt-5 grid gap-4">
        <Field
          icon={UserRound}
          id="fullName"
          label="Nombre y apellido"
          value={form.fullName}
          placeholder="Tu nombre completo"
          autoComplete="name"
          onChange={updateField}
        />
        <Field
          icon={AtSign}
          id="instagram"
          label="Instagram"
          value={form.instagram}
          placeholder="@tuusuario"
          autoComplete="off"
          onChange={updateField}
        />
        <Field
          icon={MapPin}
          id="location"
          label="Barrio / provincia"
          value={form.location}
          placeholder="Palermo, CABA"
          autoComplete="address-level2"
          onChange={updateField}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            icon={Mail}
            id="email"
            label="Mail"
            type="email"
            value={form.email}
            placeholder="tu@email.com"
            autoComplete="email"
            onChange={updateField}
          />
          <Field
            icon={Phone}
            id="whatsapp"
            label="WhatsApp"
            type="tel"
            value={form.whatsapp}
            placeholder="+54 9 11 1234 5678"
            autoComplete="tel"
            inputMode="tel"
            onChange={updateField}
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-5 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#0C6B45] px-6 text-base font-bold text-[#EEFA7A] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={19} className="animate-spin" />
            Enviando
          </>
        ) : (
          <>
            Quiero sumarme
            <ArrowRight size={19} />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs leading-5 text-[#442920]/50">
        Usamos estos datos solo para contactarte por el programa de Embajadores Pasito.
      </p>
    </form>
  )
}
