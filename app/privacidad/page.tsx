import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Política de Privacidad — Pasito',
  description: 'Política de privacidad de Pasito',
}

export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>
        <p className="text-gray-600 mb-12">
          Última actualización: Marzo 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              1. Información que Recopilamos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En Pasito, recopilamos la siguiente información:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Información de registro y perfil:</strong> Los usuarios pueden registrarse mediante Apple, Google o email. Recopilamos nombre, email, método de autenticación elegido, edad, barrio, intereses personales y objetivo diario de pasos.</li>
              <li><strong>Datos de salud (conteo de pasos):</strong> Accedemos de forma <strong>solo lectura</strong> al conteo de pasos del dispositivo. Esta información se vincula a tu cuenta de Pasito para mantener tu saldo de Pasitos, historial de actividad y racha de días activos. No recopilamos ningún otro dato de salud.</li>
              <li><strong>Ubicación (opcional):</strong> Solo solicitamos acceso a tu ubicación cuando abrís el mapa de comercios cercanos. El acceso es únicamente en primer plano (mientras usás la app). No almacenamos historial de ubicación. Los proveedores del mapa (Google Maps Platform) pueden procesar tu ubicación de forma transitoria para mostrar comercios cercanos.</li>
              <li><strong>Notificaciones push (opcional):</strong> Si activás las notificaciones, almacenamos un token FCM (Firebase Cloud Messaging) vinculado a tu cuenta para enviarte notificaciones sobre tu actividad y recompensas.</li>
              <li><strong>Información de canjes:</strong> Registramos las recompensas que canjeás, incluyendo fecha, hora, comercio y Pasitos utilizados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              2. Cómo Usamos tu Información
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos la información recopilada exclusivamente para los siguientes propósitos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Funcionalidad de la app:</strong> Proporcionar y mantener los servicios de Pasito, incluyendo el seguimiento de pasos, acumulación de Pasitos y gestión de canjes</li>
              <li><strong>Procesamiento de canjes:</strong> Gestionar las transacciones de recompensas entre usuarios y comercios</li>
              <li><strong>Notificaciones de servicio:</strong> Enviarte información importante sobre tu cuenta, canjes y actualizaciones del servicio (si habilitaste las notificaciones)</li>
              <li><strong>Comercios cercanos por distancia:</strong> Calcular y mostrar comercios asociados ordenados por proximidad cuando usás el mapa (solo si otorgaste permiso de ubicación)</li>
              <li><strong>Prevención de fraude y seguridad:</strong> Detectar y prevenir actividades fraudulentas, abuso del sistema o violaciones de nuestros términos</li>
              <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales y regulatorias aplicables</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>No utilizamos tu información para:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>Publicidad dirigida o marketing de terceros</li>
              <li>Perfilado o análisis de comportamiento con fines comerciales</li>
              <li>Venta o alquiler de datos personales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              3. Compartir Información
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No vendemos ni alquilamos tu información personal a terceros. Podemos compartir información en los siguientes casos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Con comercios asociados:</strong> Cuando canjeás una recompensa, el comercio recibe información básica necesaria para validar el canje</li>
              <li><strong>Proveedores de servicios:</strong> Compartimos información con proveedores que nos ayudan a operar la plataforma, incluyendo:
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li><strong>Supabase:</strong> Plataforma de base de datos y autenticación donde almacenamos tu información de cuenta, perfil, historial de pasos y canjes</li>
                  <li><strong>Google Maps Platform:</strong> Para mostrar comercios cercanos en el mapa. Google puede procesar tu ubicación de forma transitoria cuando usás esta función</li>
                  <li><strong>Firebase Cloud Messaging (FCM):</strong> Para enviar notificaciones push (solo si las habilitaste)</li>
                  <li><strong>Firebase Crashlytics:</strong> Para detectar y reportar errores de la aplicación, ayudándonos a mejorar la estabilidad del servicio</li>
                  <li><strong>Proveedores de autenticación:</strong> Apple y Google para inicio de sesión mediante sus servicios</li>
                </ul>
              </li>
              <li><strong>Requerimientos legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
              <li><strong>Transferencia de negocio:</strong> En caso de fusión, adquisición o venta de activos (previa notificación)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              4. Seguridad de los Datos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Encriptación de datos en tránsito y en reposo</li>
              <li>Autenticación segura y gestión de sesiones</li>
              <li>Monitoreo continuo de seguridad</li>
              <li>Acceso restringido a información personal solo al personal autorizado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              5. Tus Derechos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tenés derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Acceder a tu información personal</li>
              <li>Corregir información inexacta o incompleta</li>
              <li>Solicitar la eliminación de tu cuenta y datos asociados</li>
              <li>Oponerte al procesamiento de tu información</li>
              <li>Solicitar la portabilidad de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Para ejercer estos derechos, contactanos a través de{' '}
              <a href="mailto:contacto@pasito.app" className="font-semibold" style={{ color: '#0C6B45' }}>
                contacto@pasito.app
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              6. Tecnologías de Seguimiento
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Este sitio web no utiliza cookies de terceros ni herramientas de análisis externas. La aplicación móvil utiliza:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Tokens de sesión:</strong> Para mantener tu sesión activa de forma segura</li>
              <li><strong>Firebase Crashlytics:</strong> Para detectar errores y mejorar la estabilidad de la app</li>
              <li><strong>Almacenamiento local:</strong> Para guardar preferencias de la app en tu dispositivo</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              No utilizamos cookies de publicidad, seguimiento entre sitios, ni herramientas de análisis de comportamiento de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              7. Retención de Datos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Conservamos tu información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              8. Menores de Edad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pasito está diseñado para usuarios de <strong>16 años o más</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Usuarios de 16 a 18 años:</strong> Pueden usar Pasito con el consentimiento explícito de un padre o tutor legal</li>
              <li><strong>Menores de 16 años:</strong> No están autorizados a usar Pasito. Si descubrimos que un menor de 16 años ha creado una cuenta, la eliminaremos inmediatamente</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Si sos padre o tutor y descubrís que tu hijo menor de 16 años ha proporcionado información personal a Pasito, contactanos inmediatamente a{' '}
              <a href="mailto:contacto@pasito.app" className="font-semibold" style={{ color: '#0C6B45' }}>
                contacto@pasito.app
              </a>
              {' '}para que podamos eliminar la cuenta y los datos asociados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              9. Cambios a esta Política
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "última actualización". Te recomendamos revisar esta política regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              10. Contacto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Si tenés preguntas o inquietudes sobre esta política de privacidad, podés contactarnos:
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
