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
          Versión 1.0 · Vigente desde el 15 de marzo de 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los presentes Términos y Condiciones de Uso (en adelante, "Términos") regulan el acceso y uso de la aplicación móvil Pasito (en adelante, "la Aplicación"), desarrollada y operada por Santiago Schamberger (en adelante, "Pasito", "nosotros" o "el operador").
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al descargar, instalar o utilizar la Aplicación, el usuario ("vos") acepta expresamente estos Términos en su totalidad. Si no estás de acuerdo con alguna de sus cláusulas, debés abstenerte de usar la Aplicación.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Estos Términos se complementan con la Política de Privacidad de Pasito, que forma parte integrante de este documento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              2. Descripción del Servicio
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pasito es una aplicación móvil de tipo move-to-earn disponible para dispositivos iOS y Android. Permite a los usuarios ganar puntos virtuales denominados "Pasitos" mediante la realización de actividad física (pasos caminados), y canjearlos por premios en comercios adheridos a la red Pasito, ubicados en la Ciudad Autónoma de Buenos Aires y zonas aledañas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El servicio está sujeto a disponibilidad técnica y puede modificarse, suspenderse o interrumpirse en cualquier momento, previa notificación a los usuarios cuando sea posible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              3. Registro y Cuenta de Usuario
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para utilizar la Aplicación, es necesario crear una cuenta mediante Apple Sign-In (iOS), Google Sign-In o inicio de sesión por email.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Garantizás que la información proporcionada es verídica, precisa y actualizada.</li>
              <li>Asumís la responsabilidad exclusiva por el uso de tu cuenta.</li>
              <li>Te comprometés a no compartir tus credenciales de acceso con terceros.</li>
              <li>Notificás a Pasito inmediatamente ante cualquier uso no autorizado de tu cuenta.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Pasito se reserva el derecho de suspender o eliminar cuentas que hayan incurrido en conductas fraudulentas, abusivas o contrarias a estos Términos, sin obligación de compensación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              4. El Sistema de Pasitos
            </h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              4.1 Acumulación de Pasitos
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Conversión:</strong> 1.000 pasos = 1 Pasito (sin umbral mínimo)</li>
              <li><strong>Tope diario:</strong> Máximo 10 Pasitos por día (equivalente a 10.000 pasos)</li>
              <li><strong>Sincronización:</strong> Al abrir la Aplicación o con pull-to-refresh (no sincronización en segundo plano)</li>
              <li><strong>Fuente de datos:</strong> Apple HealthKit (iOS) o Google Health Connect (Android), solo lectura</li>
              <li><strong>Retroactividad:</strong> No se otorgan Pasitos por pasos de días anteriores que no hayan sido sincronizados</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              4.2 Naturaleza de los Pasitos
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los Pasitos son puntos virtuales sin valor monetario. No constituyen dinero electrónico, criptomoneda, crédito bancario ni ningún tipo de instrumento financiero. No son transferibles entre usuarios, no se pueden vender, comprar ni canjear por dinero en efectivo bajo ninguna circunstancia.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pasito se reserva el derecho de modificar las reglas de acumulación con notificación previa de 15 días corridos a los usuarios.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              4.3 Expiración de Pasitos
            </h3>
            <p className="text-gray-700 leading-relaxed">
              En el MVP actual, los Pasitos acumulados no tienen fecha de expiración mientras la cuenta esté activa. Pasito se reserva el derecho de introducir una política de expiración en versiones futuras, con notificación previa a los usuarios.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              4.4 Challenges y Bonificaciones
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La Aplicación puede ofrecer desafíos semanales u otras mecánicas de gamificación que permiten ganar Pasitos adicionales. Las reglas de cada challenge se especificarán dentro de la propia Aplicación y podrán modificarse o discontinuarse sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              5. El Sistema de Canjes
            </h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              5.1 Cómo funciona el canje
            </h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>El usuario selecciona un premio del catálogo y toca "Canjear".</li>
              <li>El usuario se acerca al comercio y el empleado le indica un PIN de 4 dígitos.</li>
              <li>El usuario ingresa ese PIN en la Aplicación.</li>
              <li>La Aplicación valida el PIN en tiempo real con el servidor.</li>
              <li>Solo cuando el PIN es correcto se descuentan los Pasitos y el canje queda registrado como realizado.</li>
              <li>Si el usuario cierra la pantalla o ingresa un PIN incorrecto, no se descuentan Pasitos.</li>
            </ol>

            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              5.2 Límites del canje
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Límite por local:</strong> 1 canje por día por comercio</li>
              <li><strong>Precios de los premios:</strong> Variable según el premio</li>
              <li><strong>Validación:</strong> El PIN del comercio debe ser correcto para completar el canje</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              5.3 Disponibilidad de premios
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cada premio tiene un cupo limitado por franja horaria, según lo configurado por el comercio adherido. Pasito no garantiza la disponibilidad permanente de ningún premio en particular. Los comercios y premios disponibles pueden cambiar sin previo aviso.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#0C6B45' }}>
              5.4 Relación con los comercios adheridos
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Pasito actúa como plataforma intermediaria. La obligación de entregar el bien o servicio canjeado recae exclusivamente en el comercio adherido. Pasito no es responsable por la calidad, disponibilidad o características del producto entregado por el comercio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              6. Conducta del Usuario y Prohibiciones
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Queda expresamente prohibido:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Utilizar scripts, bots, aplicaciones de terceros o cualquier mecanismo automático para simular pasos o manipular el conteo de actividad física.</li>
              <li>Compartir, vender o transferir Pasitos con otros usuarios.</li>
              <li>Utilizar múltiples cuentas para acumular Pasitos de forma fraudulenta.</li>
              <li>Intentar vulnerar la seguridad de la Aplicación o del sistema de validación de PINs.</li>
              <li>Realizar ingeniería inversa, descompilar o modificar la Aplicación.</li>
              <li>Utilizar la Aplicación de forma contraria a la ley argentina aplicable.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              La detección de conductas fraudulentas dará lugar a la suspensión inmediata de la cuenta y la anulación de todos los Pasitos acumulados, sin derecho a compensación. Pasito se reserva el derecho de iniciar acciones legales si correspondiere.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              7. Permisos que Solicita la Aplicación
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para funcionar correctamente, la Aplicación solicita los siguientes permisos en tu dispositivo:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>HealthKit / Health Connect (pasos, solo lectura)</strong> – Contar pasos para calcular Pasitos. Obligatorio.</li>
              <li><strong>Ubicación (solo al usar la app)</strong> – Mostrar el mapa de comercios cercanos cuando abrís esa función. No obligatorio.</li>
              <li><strong>Notificaciones push</strong> – Recordatorios y avisos relacionados con el servicio. No obligatorio.</li>
              <li><strong>Internet</strong> – Sincronización con el servidor Pasito. Obligatorio.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Podés revocar cualquier permiso desde la configuración de tu dispositivo en cualquier momento. La revocación del permiso de salud impedirá el cálculo de Pasitos. La revocación del permiso de ubicación desactivará el mapa de cercanía, pero el resto de la Aplicación seguirá funcionando con normalidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              8. Propiedad Intelectual
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La Aplicación, incluyendo su código fuente, diseño visual, logotipos, nombre comercial "Pasito", textos, gráficos y cualquier otro contenido, son propiedad exclusiva de Santiago Schamberger o sus licenciantes, y están protegidos por las leyes argentinas e internacionales de propiedad intelectual.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Se te otorga una licencia limitada, no exclusiva, no transferible y revocable para usar la Aplicación en tu dispositivo personal con fines estrictamente no comerciales. Queda prohibida cualquier reproducción, distribución o uso comercial del contenido sin autorización previa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              9. Eliminación de Cuenta
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Podés eliminar tu cuenta en cualquier momento desde la pantalla de Perfil en la Aplicación, o enviando un correo a{' '}
              <a href="mailto:contacto@pasito.app" className="font-semibold" style={{ color: '#0C6B45' }}>
                contacto@pasito.app
              </a>
              {' '}con el asunto "Baja de cuenta".
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al eliminar la cuenta:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Todos tus Pasitos acumulados serán eliminados de forma permanente.</li>
              <li>Tus datos personales serán borrados o anonimizados en un plazo máximo de 30 días.</li>
              <li>Los datos de historial de canjes pueden conservarse de forma anonimizada para estadísticas.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              La eliminación es irreversible. Si te registrás nuevamente, comenzarás desde cero.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              10. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La Aplicación se provee "tal cual es" y "según disponibilidad". Pasito no garantiza que la Aplicación funcione de forma ininterrumpida, libre de errores o que los datos de pasos provistos por el sistema operativo sean siempre exactos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pasito no será responsable por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Pérdida de Pasitos ocasionada por fallos del sistema operativo, del dispositivo o de las plataformas de salud (HealthKit, Health Connect).</li>
              <li>Imposibilidad de canjear un premio por agotamiento de stock en el comercio.</li>
              <li>Calidad, idoneidad o disponibilidad de los productos o servicios ofrecidos por los comercios adheridos.</li>
              <li>Daños indirectos, lucro cesante o pérdida de oportunidad derivados del uso o imposibilidad de uso de la Aplicación.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Esta limitación no aplica en casos de dolo o culpa grave imputable a Pasito, ni en situaciones en que la ley argentina no permita la exclusión de responsabilidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              11. Menores de Edad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La Aplicación está destinada a personas de 16 años o más. Los usuarios de entre 16 y 18 años requieren el consentimiento previo de su representante legal o tutor, quien asume la responsabilidad por el cumplimiento de estos Términos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Los usuarios menores de 16 años tienen expresamente prohibido registrarse. Si detectamos que un menor de esa edad ha creado una cuenta, la eliminaremos de inmediato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              12. Modificaciones a los Términos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pasito puede modificar estos Términos en cualquier momento. Los cambios serán notificados mediante un aviso en la Aplicación o por correo electrónico con al menos 15 días corridos de anticipación para modificaciones sustanciales.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El uso continuado de la Aplicación tras la entrada en vigencia de los nuevos Términos implica su aceptación. Si no aceptás los cambios, podés eliminar tu cuenta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              13. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estos Términos se rigen por las leyes de la República Argentina, incluyendo en particular la Ley N.° 24.240 de Defensa del Consumidor, la Ley N.° 25.326 de Protección de los Datos Personales, y el Código Civil y Comercial de la Nación.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para cualquier controversia derivada de estos Términos, las partes se someten a la jurisdicción de los Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires, con renuncia a cualquier otro fuero o jurisdicción que pudiera corresponder.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Domicilio legal del operador: Cerviño 3527, Piso 7, CP 1425, CABA, Argentina.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C6B45' }}>
              14. Contacto
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para consultas, reclamos o cualquier cuestión relacionada con estos Términos y Condiciones:
            </p>
            <ul className="list-none space-y-2 text-gray-700">
              <li>
                <strong>Correo electrónico:</strong>{' '}
                <a href="mailto:contacto@pasito.app" className="font-semibold" style={{ color: '#0C6B45' }}>
                  contacto@pasito.app
                </a>
              </li>
              <li>
                <strong>Asunto sugerido:</strong> "Consulta T&C" o "Reclamo"
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
