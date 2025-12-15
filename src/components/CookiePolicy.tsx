import { HiShieldCheck, HiInformationCircle } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

interface CookiePolicyProps {
  setActiveSection?: (section: string) => void
}

const CookiePolicy = ({ setActiveSection: _setActiveSection }: CookiePolicyProps) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const getDateString = () => {
    const date = new Date()
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    
    if (currentLanguage === 'fr') {
      return date.toLocaleDateString('fr-FR', options)
    } else if (currentLanguage === 'es') {
      return date.toLocaleDateString('es-ES', options)
    } else if (currentLanguage === 'it') {
      return date.toLocaleDateString('it-IT', options)
    }
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HiShieldCheck className="text-primary-600" size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'fr' && 'Politique des Cookies'}
            {currentLanguage === 'es' && 'Política de Cookies'}
            {currentLanguage === 'it' && 'Politica sui Cookie'}
            {currentLanguage === 'en' && 'Cookie Policy'}
          </h1>
          <p className="text-lg text-gray-600">
            {currentLanguage === 'fr' && 'Dernière mise à jour : '}
            {currentLanguage === 'es' && 'Última actualización: '}
            {currentLanguage === 'it' && 'Ultimo aggiornamento: '}
            {currentLanguage === 'en' && 'Last updated: '}
            {getDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-primary-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 leading-relaxed">
            {currentLanguage === 'fr' && (
              <>
                Cette politique des cookies explique ce que sont les cookies, comment <strong>OD - Omar Deiri</strong> les utilise 
                sur son site web, et comment vous pouvez gérer vos préférences concernant les cookies.
              </>
            )}
            {currentLanguage === 'es' && (
              <>
                Esta política de cookies explica qué son las cookies, cómo <strong>OD - Omar Deiri</strong> las utiliza 
                en su sitio web, y cómo puede gestionar sus preferencias sobre las cookies.
              </>
            )}
            {currentLanguage === 'it' && (
              <>
                Questa politica sui cookie spiega cosa sono i cookie, come <strong>OD - Omar Deiri</strong> li utilizza 
                sul suo sito web, e come potete gestire le vostre preferenze riguardo ai cookie.
              </>
            )}
            {currentLanguage === 'en' && (
              <>
                This cookie policy explains what cookies are, how <strong>OD - Omar Deiri</strong> uses them 
                on its website, and how you can manage your cookie preferences.
              </>
            )}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 border-l-4 border-primary-600 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'fr' && 'Table des matières'}
            {currentLanguage === 'es' && 'Tabla de contenidos'}
            {currentLanguage === 'it' && 'Indice'}
            {currentLanguage === 'en' && 'Table of Contents'}
          </h2>
          <nav className="space-y-2">
            <a href="#section-1" className="block text-primary-600 hover:text-primary-700 hover:underline">
              1. {currentLanguage === 'fr' ? 'Qu\'est-ce qu\'un cookie ?' : currentLanguage === 'es' ? '¿Qué es una cookie?' : currentLanguage === 'it' ? 'Cos\'è un cookie?' : 'What is a Cookie?'}
            </a>
            <a href="#section-2" className="block text-primary-600 hover:text-primary-700 hover:underline">
              2. {currentLanguage === 'fr' ? 'Types de cookies utilisés' : currentLanguage === 'es' ? 'Tipos de cookies utilizadas' : currentLanguage === 'it' ? 'Tipi di cookie utilizzati' : 'Types of Cookies Used'}
            </a>
            <a href="#section-3" className="block text-primary-600 hover:text-primary-700 hover:underline">
              3. {currentLanguage === 'fr' ? 'Cookies que nous utilisons' : currentLanguage === 'es' ? 'Cookies que utilizamos' : currentLanguage === 'it' ? 'Cookie che utilizziamo' : 'Cookies We Use'}
            </a>
            <a href="#section-4" className="block text-primary-600 hover:text-primary-700 hover:underline">
              4. {currentLanguage === 'fr' ? 'Gestion des cookies' : currentLanguage === 'es' ? 'Gestión de cookies' : currentLanguage === 'it' ? 'Gestione dei cookie' : 'Cookie Management'}
            </a>
            <a href="#section-5" className="block text-primary-600 hover:text-primary-700 hover:underline">
              5. {currentLanguage === 'fr' ? 'Paramètres par navigateur' : currentLanguage === 'es' ? 'Configuración por navegador' : currentLanguage === 'it' ? 'Impostazioni per browser' : 'Browser Settings'}
            </a>
            <a href="#section-6" className="block text-primary-600 hover:text-primary-700 hover:underline">
              6. {currentLanguage === 'fr' ? 'Cookies tiers' : currentLanguage === 'es' ? 'Cookies de terceros' : currentLanguage === 'it' ? 'Cookie di terze parti' : 'Third-Party Cookies'}
            </a>
            <a href="#section-7" className="block text-primary-600 hover:text-primary-700 hover:underline">
              7. {currentLanguage === 'fr' ? 'Durée de conservation' : currentLanguage === 'es' ? 'Duración de conservación' : currentLanguage === 'it' ? 'Durata di conservazione' : 'Retention Period'}
            </a>
            <a href="#section-8" className="block text-primary-600 hover:text-primary-700 hover:underline">
              8. {currentLanguage === 'fr' ? 'Modifications' : currentLanguage === 'es' ? 'Modificaciones' : currentLanguage === 'it' ? 'Modifiche' : 'Modifications'}
            </a>
            <a href="#section-9" className="block text-primary-600 hover:text-primary-700 hover:underline">
              9. {currentLanguage === 'fr' ? 'Contact' : currentLanguage === 'es' ? 'Contacto' : currentLanguage === 'it' ? 'Contatto' : 'Contact'}
            </a>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Section 1 */}
          <div id="section-1" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HiInformationCircle className="text-primary-600" size={24} />
              {currentLanguage === 'fr' && '1. Qu\'est-ce qu\'un cookie ?'}
              {currentLanguage === 'es' && '1. ¿Qué es una cookie?'}
              {currentLanguage === 'it' && '1. Cos\'è un cookie?'}
              {currentLanguage === 'en' && '1. What is a Cookie?'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lorsque 
                    vous visitez un site web. Les cookies permettent au site de reconnaître votre appareil et de mémoriser 
                    certaines informations sur vos préférences ou actions passées.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Una cookie es un pequeño archivo de texto almacenado en su dispositivo (computadora, tableta, smartphone) cuando 
                    visita un sitio web. Las cookies permiten que el sitio reconozca su dispositivo y recuerde 
                    cierta información sobre sus preferencias o acciones pasadas.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Un cookie è un piccolo file di testo memorizzato sul vostro dispositivo (computer, tablet, smartphone) quando 
                    visitate un sito web. I cookie consentono al sito di riconoscere il vostro dispositivo e ricordare 
                    alcune informazioni sulle vostre preferenze o azioni passate.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    A cookie is a small text file stored on your device (computer, tablet, smartphone) when 
                    you visit a website. Cookies allow the site to recognize your device and remember 
                    certain information about your preferences or past actions.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '2. Types de cookies utilisés'}
              {currentLanguage === 'es' && '2. Tipos de cookies utilizadas'}
              {currentLanguage === 'it' && '2. Tipi di cookie utilizzati'}
              {currentLanguage === 'en' && '2. Types of Cookies Used'}
            </h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'fr' && 'Cookies strictement nécessaires'}
                  {currentLanguage === 'es' && 'Cookies estrictamente necesarias'}
                  {currentLanguage === 'it' && 'Cookie strettamente necessari'}
                  {currentLanguage === 'en' && 'Strictly Necessary Cookies'}
                </h3>
                <p>
                  {currentLanguage === 'fr' && (
                    <>
                      Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés. Ils sont généralement 
                      définis en réponse à des actions que vous effectuez et qui équivalent à une demande de services, comme la 
                      définition de vos préférences de confidentialité, la connexion ou le remplissage de formulaires.
                    </>
                  )}
                  {currentLanguage === 'es' && (
                    <>
                      Estas cookies son esenciales para el funcionamiento del sitio y no pueden desactivarse. Generalmente se 
                      establecen en respuesta a acciones que realiza y que equivalen a una solicitud de servicios, como la 
                      definición de sus preferencias de privacidad, el inicio de sesión o el llenado de formularios.
                    </>
                  )}
                  {currentLanguage === 'it' && (
                    <>
                      Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati. Sono generalmente 
                      impostati in risposta ad azioni che eseguite e che equivalgono a una richiesta di servizi, come la 
                      definizione delle vostre preferenze di privacy, l'accesso o la compilazione di moduli.
                    </>
                  )}
                  {currentLanguage === 'en' && (
                    <>
                      These cookies are essential for the site's operation and cannot be disabled. They are generally 
                      set in response to actions you take that amount to a request for services, such as 
                      setting your privacy preferences, logging in, or filling out forms.
                    </>
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'fr' && 'Cookies de performance'}
                  {currentLanguage === 'es' && 'Cookies de rendimiento'}
                  {currentLanguage === 'it' && 'Cookie di prestazioni'}
                  {currentLanguage === 'en' && 'Performance Cookies'}
                </h3>
                <p>
                  {currentLanguage === 'fr' && (
                    <>
                      Ces cookies nous permettent de compter les visites et les sources de trafic afin d'améliorer les performances 
                      de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires et à voir comment 
                      les visiteurs se déplacent sur le site.
                    </>
                  )}
                  {currentLanguage === 'es' && (
                    <>
                      Estas cookies nos permiten contar las visitas y las fuentes de tráfico para mejorar el rendimiento 
                      de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y a ver cómo 
                      los visitantes se mueven por el sitio.
                    </>
                  )}
                  {currentLanguage === 'it' && (
                    <>
                      Questi cookie ci permettono di contare le visite e le fonti di traffico per migliorare le prestazioni 
                      del nostro sito. Ci aiutano a sapere quali pagine sono le più e meno popolari e a vedere come 
                      i visitatori si muovono sul sito.
                    </>
                  )}
                  {currentLanguage === 'en' && (
                    <>
                      These cookies allow us to count visits and traffic sources to improve the performance 
                      of our site. They help us know which pages are most and least popular and see how 
                      visitors move around the site.
                    </>
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'fr' && 'Cookies de fonctionnalité'}
                  {currentLanguage === 'es' && 'Cookies de funcionalidad'}
                  {currentLanguage === 'it' && 'Cookie di funzionalità'}
                  {currentLanguage === 'en' && 'Functionality Cookies'}
                </h3>
                <p>
                  {currentLanguage === 'fr' && (
                    <>
                      Ces cookies permettent au site de fournir des fonctionnalités et une personnalisation améliorées. Ils peuvent 
                      être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à nos pages.
                    </>
                  )}
                  {currentLanguage === 'es' && (
                    <>
                      Estas cookies permiten que el sitio proporcione funcionalidades y personalización mejoradas. Pueden 
                      ser establecidas por nosotros o por proveedores terceros cuyos servicios hemos agregado a nuestras páginas.
                    </>
                  )}
                  {currentLanguage === 'it' && (
                    <>
                      Questi cookie consentono al sito di fornire funzionalità e personalizzazione migliorate. Possono 
                      essere impostati da noi o da fornitori terzi i cui servizi abbiamo aggiunto alle nostre pagine.
                    </>
                  )}
                  {currentLanguage === 'en' && (
                    <>
                      These cookies allow the site to provide enhanced functionality and personalization. They may 
                      be set by us or by third-party providers whose services we have added to our pages.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '3. Cookies utilisés sur ce site'}
              {currentLanguage === 'es' && '3. Cookies utilizadas en este sitio'}
              {currentLanguage === 'it' && '3. Cookie utilizzati su questo sito'}
              {currentLanguage === 'en' && '3. Cookies Used on This Site'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Actuellement, notre site utilise les cookies suivants :'}
                {currentLanguage === 'es' && 'Actualmente, nuestro sitio utiliza las siguientes cookies:'}
                {currentLanguage === 'it' && 'Attualmente, il nostro sito utilizza i seguenti cookie:'}
                {currentLanguage === 'en' && 'Currently, our site uses the following cookies:'}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-2">
                        {currentLanguage === 'fr' && 'Nom'}
                        {currentLanguage === 'es' && 'Nombre'}
                        {currentLanguage === 'it' && 'Nome'}
                        {currentLanguage === 'en' && 'Name'}
                      </th>
                      <th className="text-left py-2 px-2">
                        {currentLanguage === 'fr' && 'Type'}
                        {currentLanguage === 'es' && 'Tipo'}
                        {currentLanguage === 'it' && 'Tipo'}
                        {currentLanguage === 'en' && 'Type'}
                      </th>
                      <th className="text-left py-2 px-2">
                        {currentLanguage === 'fr' && 'Durée'}
                        {currentLanguage === 'es' && 'Duración'}
                        {currentLanguage === 'it' && 'Durata'}
                        {currentLanguage === 'en' && 'Duration'}
                      </th>
                      <th className="text-left py-2 px-2">
                        {currentLanguage === 'fr' && 'Finalité'}
                        {currentLanguage === 'es' && 'Finalidad'}
                        {currentLanguage === 'it' && 'Finalità'}
                        {currentLanguage === 'en' && 'Purpose'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-2 font-mono text-xs">session_id</td>
                      <td className="py-2 px-2">
                        {currentLanguage === 'fr' && 'Strictement nécessaire'}
                        {currentLanguage === 'es' && 'Estrictamente necesaria'}
                        {currentLanguage === 'it' && 'Strettamente necessario'}
                        {currentLanguage === 'en' && 'Strictly necessary'}
                      </td>
                      <td className="py-2 px-2">
                        {currentLanguage === 'fr' && 'Session'}
                        {currentLanguage === 'es' && 'Sesión'}
                        {currentLanguage === 'it' && 'Sessione'}
                        {currentLanguage === 'en' && 'Session'}
                      </td>
                      <td className="py-2 px-2">
                        {currentLanguage === 'fr' && 'Maintien de la session utilisateur'}
                        {currentLanguage === 'es' && 'Mantenimiento de la sesión del usuario'}
                        {currentLanguage === 'it' && 'Mantenimento della sessione utente'}
                        {currentLanguage === 'en' && 'Maintaining user session'}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-2 font-mono text-xs">cookie_consent</td>
                      <td className="py-2 px-2">
                        {currentLanguage === 'fr' && 'Strictement nécessaire'}
                        {currentLanguage === 'es' && 'Estrictamente necesaria'}
                        {currentLanguage === 'it' && 'Strettamente necessario'}
                        {currentLanguage === 'en' && 'Strictly necessary'}
                      </td>
                      <td className="py-2 px-2">
                        {currentLanguage === 'fr' && '13 mois'}
                        {currentLanguage === 'es' && '13 meses'}
                        {currentLanguage === 'it' && '13 mesi'}
                        {currentLanguage === 'en' && '13 months'}
                      </td>
                      <td className="py-2 px-2">
                        {currentLanguage === 'fr' && 'Mémorisation de votre choix concernant les cookies'}
                        {currentLanguage === 'es' && 'Memorización de su elección sobre las cookies'}
                        {currentLanguage === 'it' && 'Memorizzazione della vostra scelta riguardo ai cookie'}
                        {currentLanguage === 'en' && 'Remembering your cookie choice'}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 font-mono text-xs">analytics_*</td>
                      <td className="py-2 px-2">
                        {currentLanguage === 'fr' && 'Performance'}
                        {currentLanguage === 'es' && 'Rendimiento'}
                        {currentLanguage === 'it' && 'Prestazioni'}
                        {currentLanguage === 'en' && 'Performance'}
                      </td>
                      <td className="py-2 px-2">
                        {currentLanguage === 'fr' && '13 mois'}
                        {currentLanguage === 'es' && '13 meses'}
                        {currentLanguage === 'it' && '13 mesi'}
                        {currentLanguage === 'en' && '13 months'}
                      </td>
                      <td className="py-2 px-2">
                        {currentLanguage === 'fr' && 'Analyse du trafic et du comportement des visiteurs'}
                        {currentLanguage === 'es' && 'Análisis de tráfico y comportamiento de visitantes'}
                        {currentLanguage === 'it' && 'Analisi del traffico e comportamento dei visitatori'}
                        {currentLanguage === 'en' && 'Traffic and visitor behavior analysis'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '4. Finalités d\'utilisation'}
              {currentLanguage === 'es' && '4. Finalidades de uso'}
              {currentLanguage === 'it' && '4. Finalità d\'uso'}
              {currentLanguage === 'en' && '4. Purposes of Use'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Nous utilisons les cookies pour :'}
                {currentLanguage === 'es' && 'Utilizamos cookies para:'}
                {currentLanguage === 'it' && 'Utilizziamo i cookie per:'}
                {currentLanguage === 'en' && 'We use cookies to:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {currentLanguage === 'fr' && 'Assurer le bon fonctionnement du site'}
                  {currentLanguage === 'es' && 'Asegurar el buen funcionamiento del sitio'}
                  {currentLanguage === 'it' && 'Garantire il corretto funzionamento del sito'}
                  {currentLanguage === 'en' && 'Ensure the site functions properly'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Mémoriser vos préférences (langue, région, etc.)'}
                  {currentLanguage === 'es' && 'Recordar sus preferencias (idioma, región, etc.)'}
                  {currentLanguage === 'it' && 'Memorizzare le vostre preferenze (lingua, regione, ecc.)'}
                  {currentLanguage === 'en' && 'Remember your preferences (language, region, etc.)'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Améliorer l\'expérience utilisateur'}
                  {currentLanguage === 'es' && 'Mejorar la experiencia del usuario'}
                  {currentLanguage === 'it' && 'Migliorare l\'esperienza dell\'utente'}
                  {currentLanguage === 'en' && 'Improve user experience'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Analyser l\'utilisation du site pour l\'optimiser'}
                  {currentLanguage === 'es' && 'Analizar el uso del sitio para optimizarlo'}
                  {currentLanguage === 'it' && 'Analizzare l\'utilizzo del sito per ottimizzarlo'}
                  {currentLanguage === 'en' && 'Analyze site usage to optimize it'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Garantir la sécurité du site'}
                  {currentLanguage === 'es' && 'Garantizar la seguridad del sitio'}
                  {currentLanguage === 'it' && 'Garantire la sicurezza del sito'}
                  {currentLanguage === 'en' && 'Ensure site security'}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HiShieldCheck className="text-primary-600" size={24} />
              {currentLanguage === 'fr' && '5. Gestion des cookies'}
              {currentLanguage === 'es' && '5. Gestión de cookies'}
              {currentLanguage === 'it' && '5. Gestione dei cookie'}
              {currentLanguage === 'en' && '5. Cookie Management'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    Vous avez le droit de choisir d'accepter ou de refuser les cookies. Vous pouvez exercer ce droit en modifiant 
                    les paramètres de votre navigateur.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Tiene derecho a elegir aceptar o rechazar las cookies. Puede ejercer este derecho modificando 
                    la configuración de su navegador.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Avete il diritto di scegliere di accettare o rifiutare i cookie. Potete esercitare questo diritto modificando 
                    le impostazioni del vostro browser.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    You have the right to choose to accept or refuse cookies. You can exercise this right by modifying 
                    your browser settings.
                  </>
                )}
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-3">
                <p className="font-semibold text-yellow-800 mb-2">
                  {currentLanguage === 'fr' && 'Important :'}
                  {currentLanguage === 'es' && 'Importante:'}
                  {currentLanguage === 'it' && 'Importante:'}
                  {currentLanguage === 'en' && 'Important:'}
                </p>
                <p className="text-yellow-700 text-sm">
                  {currentLanguage === 'fr' && (
                    <>
                      Veuillez noter que la désactivation de certains cookies peut affecter le fonctionnement du site et limiter 
                      votre accès à certaines fonctionnalités.
                    </>
                  )}
                  {currentLanguage === 'es' && (
                    <>
                      Tenga en cuenta que desactivar ciertas cookies puede afectar el funcionamiento del sitio y limitar 
                      su acceso a ciertas funcionalidades.
                    </>
                  )}
                  {currentLanguage === 'it' && (
                    <>
                      Si prega di notare che la disattivazione di alcuni cookie può influire sul funzionamento del sito e limitare 
                      il vostro accesso a determinate funzionalità.
                    </>
                  )}
                  {currentLanguage === 'en' && (
                    <>
                      Please note that disabling certain cookies may affect the site's operation and limit 
                      your access to certain features.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '6. Paramètres par navigateur'}
              {currentLanguage === 'es' && '6. Configuración por navegador'}
              {currentLanguage === 'it' && '6. Impostazioni per browser'}
              {currentLanguage === 'en' && '6. Browser Settings'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' ? 'Voici comment gérer les cookies dans les principaux navigateurs :' :
                 currentLanguage === 'es' ? 'Aquí se explica cómo gestionar las cookies en los principales navegadores:' :
                 currentLanguage === 'it' ? 'Ecco come gestire i cookie nei principali browser:' :
                 'Here\'s how to manage cookies in the main browsers:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Chrome :</strong>{' '}
                  {currentLanguage === 'fr' ? 'Paramètres → Confidentialité et sécurité → Cookies et autres données de sites' :
                    currentLanguage === 'es' ? 'Configuración → Privacidad y seguridad → Cookies y otros datos de sitios' :
                    currentLanguage === 'it' ? 'Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti' :
                    'Settings → Privacy and security → Cookies and other site data'}
                </li>
                <li>
                  <strong>Mozilla Firefox :</strong>{' '}
                  {currentLanguage === 'fr' ? 'Options → Vie privée et sécurité → Cookies et données de sites' :
                    currentLanguage === 'es' ? 'Opciones → Privacidad y seguridad → Cookies y datos de sitios' :
                    currentLanguage === 'it' ? 'Opzioni → Privacy e sicurezza → Cookie e dati dei siti' :
                    'Options → Privacy & Security → Cookies and Site Data'}
                </li>
                <li>
                  <strong>Safari :</strong>{' '}
                  {currentLanguage === 'fr' ? 'Préférences → Confidentialité → Cookies et données de sites web' :
                    currentLanguage === 'es' ? 'Preferencias → Privacidad → Cookies y datos de sitios web' :
                    currentLanguage === 'it' ? 'Preferenze → Privacy → Cookie e dati dei siti web' :
                    'Preferences → Privacy → Cookies and Website Data'}
                </li>
                <li>
                  <strong>Microsoft Edge :</strong>{' '}
                  {currentLanguage === 'fr' ? 'Paramètres → Cookies et autorisations de site → Cookies et données de sites' :
                    currentLanguage === 'es' ? 'Configuración → Cookies y permisos del sitio → Cookies y datos de sitios' :
                    currentLanguage === 'it' ? 'Impostazioni → Cookie e autorizzazioni del sito → Cookie e dati dei siti' :
                    'Settings → Cookies and site permissions → Cookies and site data'}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '7. Cookies tiers'}
              {currentLanguage === 'es' && '7. Cookies de terceros'}
              {currentLanguage === 'it' && '7. Cookie di terze parti'}
              {currentLanguage === 'en' && '7. Third-Party Cookies'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    Certains cookies peuvent être placés par des services tiers qui apparaissent sur nos pages. Nous n'avons pas 
                    accès ni contrôle sur ces cookies. Ces tiers peuvent utiliser des cookies pour collecter des informations sur 
                    vos activités en ligne sur différents sites web.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Algunas cookies pueden ser colocadas por servicios de terceros que aparecen en nuestras páginas. No tenemos 
                    acceso ni control sobre estas cookies. Estos terceros pueden usar cookies para recopilar información sobre 
                    sus actividades en línea en diferentes sitios web.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Alcuni cookie possono essere impostati da servizi di terze parti che compaiono sulle nostre pagine. Non abbiamo 
                    accesso né controllo su questi cookie. Queste terze parti possono utilizzare cookie per raccogliere informazioni sulle 
                    vostre attività online su diversi siti web.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    Some cookies may be placed by third-party services that appear on our pages. We do not have 
                    access to or control over these cookies. These third parties may use cookies to collect information about 
                    your online activities across different websites.
                  </>
                )}
              </p>
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    Nous vous encourageons à consulter les politiques de confidentialité de ces services tiers pour comprendre 
                    comment ils utilisent les cookies.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Le recomendamos consultar las políticas de privacidad de estos servicios de terceros para comprender 
                    cómo utilizan las cookies.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Vi incoraggiamo a consultare le politiche sulla privacy di questi servizi di terze parti per capire 
                    come utilizzano i cookie.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    We encourage you to consult the privacy policies of these third-party services to understand 
                    how they use cookies.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '8. Durée de conservation'}
              {currentLanguage === 'es' && '8. Duración de conservación'}
              {currentLanguage === 'it' && '8. Durata di conservazione'}
              {currentLanguage === 'en' && '8. Retention Period'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Les cookies que nous utilisons ont différentes durées de vie :'}
                {currentLanguage === 'es' && 'Las cookies que utilizamos tienen diferentes duraciones:'}
                {currentLanguage === 'it' && 'I cookie che utilizziamo hanno durate diverse:'}
                {currentLanguage === 'en' && 'The cookies we use have different lifespans:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>
                    {currentLanguage === 'fr' ? 'Cookies de session :' :
                     currentLanguage === 'es' ? 'Cookies de sesión:' :
                     currentLanguage === 'it' ? 'Cookie di sessione:' :
                     'Session cookies:'}
                  </strong>{' '}
                  {currentLanguage === 'fr' ? 'supprimés automatiquement à la fermeture du navigateur' :
                    currentLanguage === 'es' ? 'eliminados automáticamente al cerrar el navegador' :
                    currentLanguage === 'it' ? 'eliminati automaticamente alla chiusura del browser' :
                    'automatically deleted when the browser closes'}
                </li>
                <li>
                  <strong>
                    {currentLanguage === 'fr' ? 'Cookies persistants :' :
                     currentLanguage === 'es' ? 'Cookies persistentes:' :
                     currentLanguage === 'it' ? 'Cookie persistenti:' :
                     'Persistent cookies:'}
                  </strong>{' '}
                  {currentLanguage === 'fr' ? 'conservés jusqu\'à 13 mois maximum ou jusqu\'à leur suppression manuelle' :
                    currentLanguage === 'es' ? 'conservados hasta 13 meses máximo o hasta su eliminación manual' :
                    currentLanguage === 'it' ? 'conservati fino a 13 mesi massimo o fino alla loro eliminazione manuale' :
                    'retained for up to 13 months maximum or until manual deletion'}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '9. Modifications'}
              {currentLanguage === 'es' && '9. Modificaciones'}
              {currentLanguage === 'it' && '9. Modifiche'}
              {currentLanguage === 'en' && '9. Modifications'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    Nous pouvons mettre à jour cette politique des cookies de temps à autre pour refléter les changements dans 
                    les cookies que nous utilisons ou pour d'autres raisons opérationnelles, légales ou réglementaires. 
                    Veuillez consulter régulièrement cette page pour rester informé de notre utilisation des cookies.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Podemos actualizar esta política de cookies de vez en cuando para reflejar los cambios en 
                    las cookies que utilizamos o por otras razones operativas, legales o regulatorias. 
                    Por favor, consulte regularmente esta página para mantenerse informado sobre nuestro uso de cookies.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Possiamo aggiornare questa politica sui cookie di tanto in tanto per riflettere i cambiamenti nei 
                    cookie che utilizziamo o per altre ragioni operative, legali o normative. 
                    Si prega di consultare regolarmente questa pagina per rimanere informati sul nostro utilizzo dei cookie.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    We may update this cookie policy from time to time to reflect changes in 
                    the cookies we use or for other operational, legal, or regulatory reasons. 
                    Please consult this page regularly to stay informed about our use of cookies.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-primary-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {currentLanguage === 'fr' && 'Contact'}
              {currentLanguage === 'es' && 'Contacto'}
              {currentLanguage === 'it' && 'Contatto'}
              {currentLanguage === 'en' && 'Contact'}
            </h3>
            <p className="text-gray-700">
              {currentLanguage === 'fr' && 'Pour toute question concernant notre utilisation des cookies, veuillez nous contacter :'}
              {currentLanguage === 'es' && 'Para cualquier pregunta sobre nuestro uso de cookies, contáctenos:'}
              {currentLanguage === 'it' && 'Per qualsiasi domanda sul nostro utilizzo dei cookie, contattateci:'}
              {currentLanguage === 'en' && 'For any questions regarding our use of cookies, please contact us:'}
            </p>
            <div className="mt-4 space-y-1">
              <p><strong>
                {currentLanguage === 'fr' && 'Email :'}
                {currentLanguage === 'es' && 'Correo electrónico:'}
                {currentLanguage === 'it' && 'Email:'}
                {currentLanguage === 'en' && 'Email:'}
              </strong> omar@deiri.ch</p>
              <p><strong>
                {currentLanguage === 'fr' && 'Téléphone :'}
                {currentLanguage === 'es' && 'Teléfono:'}
                {currentLanguage === 'it' && 'Telefono:'}
                {currentLanguage === 'en' && 'Phone:'}
              </strong> 022 789 00 60</p>
              <p><strong>
                {currentLanguage === 'fr' && 'Adresse :'}
                {currentLanguage === 'es' && 'Dirección:'}
                {currentLanguage === 'it' && 'Indirizzo:'}
                {currentLanguage === 'en' && 'Address:'}
              </strong> Route de Frontenex 46, 1207 {
                currentLanguage === 'fr' ? 'Genève, Suisse' :
                currentLanguage === 'es' ? 'Ginebra, Suiza' :
                currentLanguage === 'it' ? 'Ginevra, Svizzera' :
                'Geneva, Switzerland'
              }</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CookiePolicy
