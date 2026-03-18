import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Términos y Condiciones — Pasito',
  description: 'Términos y condiciones de uso de Pasito',
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity"
            style={{ color: '#0C6B45' }}
          >
            <ArrowLeft size={18} />
            Volver
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1
          className="text-4xl md:text-5xl mb-4 font-display"
          style={{ color: '#0C6B45' }}
        >
          Términos y Condiciones
        </h1>
        <p className="text-gray-600 mb-12">
          Última actualización: Marzo 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Al registrarte y usar Pasito, aceptás estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, no deberías usar nuestros servicios. Estos términos constituyen un acuerdo legal vinculante entre vos y Pasito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              2. Descripción del Servicio
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pasito es una aplicación móvil que te permite:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Registrarte mediante <strong>Apple, Google o email</strong></li>
              <li>Acumular Pasitos caminando (1.000 pasos = 1 Pasito)</li>
              <li>Descubrir recompensas en comercios cercanos</li>
              <li>Canjear Pasitos por productos y descuentos</li>
              <li>Mantener rachas de actividad diaria</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              3. Registro y Cuenta
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para usar Pasito, debés:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Proporcionar información precisa, completa y actualizada</li>
              <li>Cumplir con los requisitos de edad (ver sección 10)</li>
              <li>Mantener la seguridad de tu cuenta y contraseña</li>
              <li>Notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta</li>
              <li>Ser responsable de todas las actividades que ocurran bajo tu cuenta</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              4. Acumulación de Pasitos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los Pasitos se acumulan de la siguiente manera:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Conversión:</strong> 1.000 pasos = 1 Pasito</li>
              <li><strong>Seguimiento:</strong> Los pasos se registran mediante el sensor de salud de tu dispositivo</li>
              <li><strong>Validación:</strong> Nos reservamos el derecho de validar y ajustar el conteo de pasos para prevenir fraude</li>
              <li><strong>Sin valor monetario:</strong> Los Pasitos no tienen valor en efectivo y no pueden ser transferidos, vendidos o intercambiados fuera de la plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              5. Proceso de Canje
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El proceso de canje funciona de la siguiente manera:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li><strong>El usuario selecciona una recompensa</strong> en la app y confirma el canje</li>
              <li><strong>El comercio proporciona su PIN fijo de 4 dígitos</strong> al usuario (cada comercio tiene un PIN único asignado)</li>
              <li><strong>El usuario ingresa el PIN</strong> en la app para completar el canje</li>
              <li><strong>Solo un PIN correcto deduce los Pasitos:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Si el PIN es correcto, los Pasitos se deducen y el canje se completa</li>
                  <li>Si el PIN es incorrecto o el usuario cierra el flujo, NO se deducen Pasitos</li>
                  <li>El usuario puede reintentar el canje más tarde</li>
                </ul>
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Importante:</strong> Debés presentarte físicamente en el comercio para recibir el PIN y completar el canje. Los canjes completados no son reembolsables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              6. Conducta Prohibida
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No podés:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Usar el servicio para actividades ilegales o fraudulentas</li>
              <li>Intentar manipular el sistema de conteo de pasos o Pasitos</li>
              <li>Crear múltiples cuentas para obtener ventajas indebidas</li>
              <li>Compartir tu cuenta con terceros</li>
              <li>Usar dispositivos, bots o scripts automatizados para generar pasos falsos</li>
              <li>Copiar, modificar o distribuir contenido de la plataforma sin autorización</li>
              <li>Interferir con el funcionamiento de la plataforma</li>
              <li>Acosar, amenazar o abusar de otros usuarios o comercios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              7. Permisos de la App
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La aplicación móvil de Pasito solicita los siguientes permisos:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              7.1 Datos de Salud (Conteo de Pasos)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Acceso:</strong> Solo lectura del conteo de pasos</li>
              <li><strong>Propósito:</strong> Necesario para que puedas ganar Pasitos caminando</li>
              <li><strong>Requerido:</strong> Sí. Sin este permiso no podés acumular Pasitos</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              7.2 Ubicación
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Acceso:</strong> Solo cuando usás el mapa de comercios cercanos</li>
              <li><strong>Propósito:</strong> Mostrar comercios ordenados por proximidad en el mapa</li>
              <li><strong>Requerido:</strong> No. Es opcional</li>
              <li><strong>Efecto de revocar:</strong> Si revocás este permiso, solo se desactiva la función de proximidad en el mapa. Podés seguir usando todas las demás funciones de la app</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              7.3 Notificaciones Push
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Acceso:</strong> Enviar notificaciones a tu dispositivo</li>
              <li><strong>Propósito:</strong> Informarte sobre tu actividad, canjes y actualizaciones</li>
              <li><strong>Requerido:</strong> No. Es opcional</li>
              <li><strong>Control:</strong> Podés activar o desactivar las notificaciones en cualquier momento desde la configuración de tu dispositivo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              8. Propiedad Intelectual
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todos los derechos de propiedad intelectual sobre la plataforma Pasito, incluyendo el software, diseño, logos, marcas y contenido, son propiedad de Pasito o sus licenciantes. No podés:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Usar nuestras marcas sin autorización previa por escrito</li>
              <li>Copiar o reproducir elementos de la plataforma</li>
              <li>Realizar ingeniería inversa del software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              9. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pasito proporciona la plataforma "tal cual está". No garantizamos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Que el servicio será ininterrumpido o libre de errores</li>
              <li>La disponibilidad continua de recompensas específicas</li>
              <li>La precisión absoluta del conteo de pasos (depende del sensor de tu dispositivo)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              No somos responsables por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>Lesiones o problemas de salud relacionados con la actividad física</li>
              <li>Disputas con comercios sobre recompensas</li>
              <li>Pérdida de Pasitos debido a cambios en el servicio</li>
              <li>Daños indirectos o consecuentes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              10. Menores de Edad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pasito está diseñado para usuarios de <strong>16 años o más</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Usuarios de 16 a 18 años:</strong> Pueden usar Pasito con el consentimiento explícito de un padre o tutor legal</li>
              <li><strong>Menores de 16 años:</strong> Tienen prohibido usar Pasito. Si descubrimos que un menor de 16 años ha creado una cuenta, la eliminaremos inmediatamente</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Al registrarte, confirmás que cumplís con estos requisitos de edad. Si sos padre o tutor y descubrís que tu hijo menor de 16 años está usando Pasito, contactanos inmediatamente a{' '}
              <a href="mailto:contacto@pasito.app" className="font-semibold" style={{ color: '#0C6B45' }}>
                contacto@pasito.app
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              11. Suspensión y Terminación
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Podemos suspender o terminar tu cuenta si:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violás estos términos y condiciones</li>
              <li>Proporcionás información falsa o engañosa</li>
              <li>Realizás actividades fraudulentas</li>
              <li>Intentás manipular el sistema de Pasitos</li>
              <li>Recibimos múltiples quejas sobre tu comportamiento</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vos podés cancelar tu cuenta en cualquier momento desde la configuración de la app. Al cancelar, perderás todos los Pasitos acumulados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              12. Modificaciones al Servicio
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento, con o sin previo aviso. No seremos responsables ante vos o terceros por cualquier modificación, suspensión o discontinuación del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              13. Cambios a los Términos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar estos términos periódicamente. Te notificaremos sobre cambios significativos mediante notificación en la app o por email. El uso continuado del servicio después de los cambios constituye tu aceptación de los nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              14. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa será resuelta en los tribunales de la Ciudad Autónoma de Buenos Aires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              15. Contacto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Si tenés preguntas sobre estos términos, podés contactarnos:
            </p>
            <ul className="list-none space-y-2 text-gray-700 mt-4">
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:contacto@pasito.app" className="font-semibold" style={{ color: '#0C6B45' }}>
                  contacto@pasito.app
                </a>
              </li>
              <li>
                <strong>Dirección:</strong> Buenos Aires, Argentina
              </li>
            </ul>
          </section>

          <section className="mt-12 p-6 rounded-xl" style={{ background: '#f0faf5', border: '2px solid #0C6B45' }}>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Nota importante:</strong> Al registrarte o usar nuestros servicios, confirmás que has leído, entendido y aceptado estos términos y condiciones, así como nuestra política de privacidad.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity"
            style={{ color: '#0C6B45' }}
          >
            <ArrowLeft size={18} />
            Volver
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-10 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Pasito. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
