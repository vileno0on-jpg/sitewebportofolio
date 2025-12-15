import { HiDocumentText, HiShieldCheck, HiScale, HiExclamationCircle } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

interface TermsOfServiceProps {
  setActiveSection?: (section: string) => void
}

const TermsOfService = ({ setActiveSection }: TermsOfServiceProps) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const handleLinkClick = (section: string) => {
    if (setActiveSection) {
      setActiveSection(section)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

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
            <HiScale className="text-primary-600" size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'fr' && 'Conditions d\'Utilisation'}
            {currentLanguage === 'es' && 'Términos de Servicio'}
            {currentLanguage === 'it' && 'Termini di Servizio'}
            {currentLanguage === 'en' && 'Terms of Service'}
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
                Les présentes conditions d'utilisation régissent l'utilisation du site web de <strong>OD - Omar Deiri</strong>. 
                En accédant et en utilisant ce site, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces conditions, 
                veuillez ne pas utiliser ce site.
              </>
            )}
            {currentLanguage === 'es' && (
              <>
                Estos términos de servicio rigen el uso del sitio web de <strong>OD - Omar Deiri</strong>. 
                Al acceder y utilizar este sitio, acepta estar vinculado por estos términos. Si no acepta estos términos, 
                no debe utilizar este sitio.
              </>
            )}
            {currentLanguage === 'it' && (
              <>
                Questi termini di servizio disciplinano l'utilizzo del sito web di <strong>OD - Omar Deiri</strong>. 
                Accedendo e utilizzando questo sito, accettate di essere vincolati da questi termini. Se non accettate questi termini, 
                non dovreste utilizzare questo sito.
              </>
            )}
            {currentLanguage === 'en' && (
              <>
                These terms of service govern the use of the <strong>OD - Omar Deiri</strong> website. 
                By accessing and using this site, you agree to be bound by these terms. If you do not accept these terms, 
                please do not use this site.
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
              1. {currentLanguage === 'fr' ? 'Informations légales' : currentLanguage === 'es' ? 'Información legal' : currentLanguage === 'it' ? 'Informazioni legali' : 'Legal Information'}
            </a>
            <a href="#section-2" className="block text-primary-600 hover:text-primary-700 hover:underline">
              2. {currentLanguage === 'fr' ? 'Acceptation des conditions' : currentLanguage === 'es' ? 'Aceptación de los términos' : currentLanguage === 'it' ? 'Accettazione dei termini' : 'Acceptance of Terms'}
            </a>
            <a href="#section-3" className="block text-primary-600 hover:text-primary-700 hover:underline">
              3. {currentLanguage === 'fr' ? 'Utilisation du site' : currentLanguage === 'es' ? 'Uso del sitio' : currentLanguage === 'it' ? 'Utilizzo del sito' : 'Use of the Site'}
            </a>
            <a href="#section-4" className="block text-primary-600 hover:text-primary-700 hover:underline">
              4. {currentLanguage === 'fr' ? 'Propriété intellectuelle' : currentLanguage === 'es' ? 'Propiedad intelectual' : currentLanguage === 'it' ? 'Proprietà intellettuale' : 'Intellectual Property'}
            </a>
            <a href="#section-5" className="block text-primary-600 hover:text-primary-700 hover:underline">
              5. {currentLanguage === 'fr' ? 'Services proposés' : currentLanguage === 'es' ? 'Servicios ofrecidos' : currentLanguage === 'it' ? 'Servizi offerti' : 'Services Offered'}
            </a>
            <a href="#section-6" className="block text-primary-600 hover:text-primary-700 hover:underline">
              6. {currentLanguage === 'fr' ? 'Limitation de responsabilité' : currentLanguage === 'es' ? 'Limitación de responsabilidad' : currentLanguage === 'it' ? 'Limitazione di responsabilità' : 'Limitation of Liability'}
            </a>
            <a href="#section-7" className="block text-primary-600 hover:text-primary-700 hover:underline">
              7. {currentLanguage === 'fr' ? 'Liens externes' : currentLanguage === 'es' ? 'Enlaces externos' : currentLanguage === 'it' ? 'Link esterni' : 'External Links'}
            </a>
            <a href="#section-8" className="block text-primary-600 hover:text-primary-700 hover:underline">
              8. {currentLanguage === 'fr' ? 'Données personnelles' : currentLanguage === 'es' ? 'Datos personales' : currentLanguage === 'it' ? 'Dati personali' : 'Personal Data'}
            </a>
            <a href="#section-9" className="block text-primary-600 hover:text-primary-700 hover:underline">
              9. {currentLanguage === 'fr' ? 'Confidentialité professionnelle' : currentLanguage === 'es' ? 'Confidencialidad profesional' : currentLanguage === 'it' ? 'Riservatezza professionale' : 'Professional Confidentiality'}
            </a>
            <a href="#section-10" className="block text-primary-600 hover:text-primary-700 hover:underline">
              10. {currentLanguage === 'fr' ? 'Droit applicable et juridiction' : currentLanguage === 'es' ? 'Ley aplicable y jurisdicción' : currentLanguage === 'it' ? 'Legge applicabile e giurisdizione' : 'Applicable Law and Jurisdiction'}
            </a>
            <a href="#section-11" className="block text-primary-600 hover:text-primary-700 hover:underline">
              11. {currentLanguage === 'fr' ? 'Modifications' : currentLanguage === 'es' ? 'Modificaciones' : currentLanguage === 'it' ? 'Modifiche' : 'Modifications'}
            </a>
            <a href="#section-12" className="block text-primary-600 hover:text-primary-700 hover:underline">
              12. {currentLanguage === 'fr' ? 'Nullité partielle' : currentLanguage === 'es' ? 'Nulidad parcial' : currentLanguage === 'it' ? 'Nullità parziale' : 'Partial Invalidity'}
            </a>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Section 1 */}
          <div id="section-1" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HiDocumentText className="text-primary-600" size={24} />
              {currentLanguage === 'fr' && '1. Informations légales'}
              {currentLanguage === 'es' && '1. Información legal'}
              {currentLanguage === 'it' && '1. Informazioni legali'}
              {currentLanguage === 'en' && '1. Legal Information'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Le site web est exploité par :'}
                {currentLanguage === 'es' && 'El sitio web es operado por:'}
                {currentLanguage === 'it' && 'Il sito web è gestito da:'}
                {currentLanguage === 'en' && 'The website is operated by:'}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">OD - Omar Deiri</p>
                <p>
                  {currentLanguage === 'fr' && 'Entreprise individuelle'}
                  {currentLanguage === 'es' && 'Empresa individual'}
                  {currentLanguage === 'it' && 'Ditta individuale'}
                  {currentLanguage === 'en' && 'Sole proprietorship'}
                </p>
                <p>Route de Frontenex 46</p>
                <p>
                  {currentLanguage === 'fr' && '1207 Genève, Suisse'}
                  {currentLanguage === 'es' && '1207 Ginebra, Suiza'}
                  {currentLanguage === 'it' && '1207 Ginevra, Svizzera'}
                  {currentLanguage === 'en' && '1207 Geneva, Switzerland'}
                </p>
                <p className="mt-2">
                  <strong>
                    {currentLanguage === 'fr' && 'Email :'}
                    {currentLanguage === 'es' && 'Correo electrónico:'}
                    {currentLanguage === 'it' && 'Email:'}
                    {currentLanguage === 'en' && 'Email:'}
                  </strong> omar@deiri.ch<br />
                  <strong>
                    {currentLanguage === 'fr' && 'Téléphone :'}
                    {currentLanguage === 'es' && 'Teléfono:'}
                    {currentLanguage === 'it' && 'Telefono:'}
                    {currentLanguage === 'en' && 'Phone:'}
                  </strong> 022 789 00 60
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  {currentLanguage === 'fr' && 'Agence en fonds de commerce autorisée par le Conseil d\'État genevois'}
                  {currentLanguage === 'es' && 'Agencia de negocios autorizada por el Consejo de Estado de Ginebra'}
                  {currentLanguage === 'it' && 'Agenzia d\'affari autorizzata dal Consiglio di Stato di Ginevra'}
                  {currentLanguage === 'en' && 'Business agency authorized by the Geneva State Council'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '2. Acceptation des conditions'}
              {currentLanguage === 'es' && '2. Aceptación de los términos'}
              {currentLanguage === 'it' && '2. Accettazione dei termini'}
              {currentLanguage === 'en' && '2. Acceptance of Terms'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    En accédant à ce site web, vous reconnaissez avoir lu, compris et accepté d'être lié par les présentes 
                    conditions d'utilisation ainsi que par toutes les lois et réglementations applicables. Si vous n'acceptez 
                    pas ces conditions, vous ne devez pas utiliser ce site.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Al acceder a este sitio web, reconoce que ha leído, entendido y aceptado estar vinculado por estos 
                    términos de servicio y todas las leyes y regulaciones aplicables. Si no acepta estos términos, 
                    no debe utilizar este sitio.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Accedendo a questo sito web, riconoscete di aver letto, compreso e accettato di essere vincolati da questi 
                    termini di servizio e da tutte le leggi e regolamenti applicabili. Se non accettate questi termini, 
                    non dovreste utilizzare questo sito.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    By accessing this website, you acknowledge that you have read, understood, and agreed to be bound by these 
                    terms of service and all applicable laws and regulations. If you do not accept these terms, 
                    you must not use this site.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '3. Utilisation du site'}
              {currentLanguage === 'es' && '3. Uso del sitio'}
              {currentLanguage === 'it' && '3. Utilizzo del sito'}
              {currentLanguage === 'en' && '3. Use of the Site'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Vous vous engagez à utiliser ce site uniquement à des fins légales et de manière à ne pas :'}
                {currentLanguage === 'es' && 'Se compromete a utilizar este sitio únicamente para fines legales y de manera que no:'}
                {currentLanguage === 'it' && 'Vi impegnate a utilizzare questo sito solo per scopi legali e in modo da non:'}
                {currentLanguage === 'en' && 'You agree to use this site only for lawful purposes and in a manner that does not:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {currentLanguage === 'fr' && 'Violer les lois, règlements ou droits de tiers'}
                  {currentLanguage === 'es' && 'Violar leyes, regulaciones o derechos de terceros'}
                  {currentLanguage === 'it' && 'Violare leggi, regolamenti o diritti di terzi'}
                  {currentLanguage === 'en' && 'Violate laws, regulations, or third-party rights'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Transmettre des contenus illégaux, offensants, diffamatoires ou nuisibles'}
                  {currentLanguage === 'es' && 'Transmitir contenidos ilegales, ofensivos, difamatorios o dañinos'}
                  {currentLanguage === 'it' && 'Trasmettere contenuti illegali, offensivi, diffamatori o dannosi'}
                  {currentLanguage === 'en' && 'Transmit illegal, offensive, defamatory, or harmful content'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Perturber ou endommager le fonctionnement du site'}
                  {currentLanguage === 'es' && 'Perturbar o dañar el funcionamiento del sitio'}
                  {currentLanguage === 'it' && 'Perturbare o danneggiare il funzionamento del sito'}
                  {currentLanguage === 'en' && 'Disrupt or damage the site\'s operation'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Tenter d\'accéder de manière non autorisée à des zones restreintes du site'}
                  {currentLanguage === 'es' && 'Intentar acceder de manera no autorizada a áreas restringidas del sitio'}
                  {currentLanguage === 'it' && 'Tentare di accedere in modo non autorizzato ad aree ristrette del sito'}
                  {currentLanguage === 'en' && 'Attempt to access restricted areas of the site without authorization'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Utiliser des robots, scripts automatisés ou autres moyens pour extraire des données'}
                  {currentLanguage === 'es' && 'Utilizar robots, scripts automatizados u otros medios para extraer datos'}
                  {currentLanguage === 'it' && 'Utilizzare robot, script automatizzati o altri mezzi per estrarre dati'}
                  {currentLanguage === 'en' && 'Use robots, automated scripts, or other means to extract data'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Reproduire, copier ou revendre tout ou partie du contenu sans autorisation'}
                  {currentLanguage === 'es' && 'Reproducir, copiar o revender todo o parte del contenido sin autorización'}
                  {currentLanguage === 'it' && 'Riprodurre, copiare o rivendere tutto o parte del contenuto senza autorizzazione'}
                  {currentLanguage === 'en' && 'Reproduce, copy, or resell any or all content without authorization'}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '4. Propriété intellectuelle'}
              {currentLanguage === 'es' && '4. Propiedad intelectual'}
              {currentLanguage === 'it' && '4. Proprietà intellettuale'}
              {currentLanguage === 'en' && '4. Intellectual Property'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    Tous les contenus de ce site (textes, images, logos, graphismes, etc.) sont la propriété exclusive de 
                    <strong> OD - Omar Deiri</strong> ou de ses partenaires et sont protégés par les lois suisses et internationales 
                    sur la propriété intellectuelle.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Todo el contenido de este sitio (textos, imágenes, logos, gráficos, etc.) es propiedad exclusiva de 
                    <strong> OD - Omar Deiri</strong> o sus socios y está protegido por las leyes suizas e internacionales 
                    sobre propiedad intelectual.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Tutti i contenuti di questo sito (testi, immagini, loghi, grafiche, ecc.) sono di proprietà esclusiva di 
                    <strong> OD - Omar Deiri</strong> o dei suoi partner e sono protetti dalle leggi svizzere e internazionali 
                    sulla proprietà intellettuale.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    All content on this site (texts, images, logos, graphics, etc.) is the exclusive property of 
                    <strong> OD - Omar Deiri</strong> or its partners and is protected by Swiss and international 
                    intellectual property laws.
                  </>
                )}
              </p>
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments 
                    du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Cualquier reproducción, representación, modificación, publicación o adaptación de todo o parte de los elementos 
                    del sitio, cualquiera que sea el medio o procedimiento utilizado, está prohibida sin autorización escrita previa.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Qualsiasi riproduzione, rappresentazione, modifica, pubblicazione o adattamento di tutto o parte degli elementi 
                    del sito, qualunque sia il mezzo o procedimento utilizzato, è vietata senza autorizzazione scritta preventiva.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    Any reproduction, representation, modification, publication, or adaptation of all or part of the site's elements, 
                    regardless of the means or process used, is prohibited without prior written authorization.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HiShieldCheck className="text-primary-600" size={24} />
              {currentLanguage === 'fr' && '5. Services proposés'}
              {currentLanguage === 'es' && '5. Servicios ofrecidos'}
              {currentLanguage === 'it' && '5. Servizi offerti'}
              {currentLanguage === 'en' && '5. Services Offered'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                <strong>OD - Omar Deiri</strong> {
                  currentLanguage === 'fr' ? 'propose les services suivants :' :
                  currentLanguage === 'es' ? 'ofrece los siguientes servicios:' :
                  currentLanguage === 'it' ? 'offre i seguenti servizi:' :
                  'offers the following services:'
                }
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {currentLanguage === 'fr' && 'Intermédiation et négociation d\'actifs mobiliers et immobiliers'}
                  {currentLanguage === 'es' && 'Intermediación y negociación de activos muebles e inmuebles'}
                  {currentLanguage === 'it' && 'Intermediazione e negoziazione di beni mobili e immobili'}
                  {currentLanguage === 'en' && 'Intermediation and negotiation of movable and immovable assets'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Conseil aux PME'}
                  {currentLanguage === 'es' && 'Consultoría para PYME'}
                  {currentLanguage === 'it' && 'Consulenza per PMI'}
                  {currentLanguage === 'en' && 'SME consulting'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Cession d\'entreprises'}
                  {currentLanguage === 'es' && 'Cesión de empresas'}
                  {currentLanguage === 'it' && 'Cessione di aziende'}
                  {currentLanguage === 'en' && 'Business transfers'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Évaluation immobilière'}
                  {currentLanguage === 'es' && 'Evaluación inmobiliaria'}
                  {currentLanguage === 'it' && 'Valutazione immobiliare'}
                  {currentLanguage === 'en' && 'Real estate evaluation'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Gestion locative'}
                  {currentLanguage === 'es' && 'Gestión de alquileres'}
                  {currentLanguage === 'it' && 'Gestione locativa'}
                  {currentLanguage === 'en' && 'Rental management'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Négociation d\'actifs dépréciés'}
                  {currentLanguage === 'es' && 'Negociación de activos depreciados'}
                  {currentLanguage === 'it' && 'Negoziazione di beni deprezzati'}
                  {currentLanguage === 'en' && 'Negotiation of depreciated assets'}
                </li>
              </ul>
              <p className="mt-3">
                {currentLanguage === 'fr' && (
                  <>
                    Les informations présentes sur ce site sont fournies à titre informatif et ne constituent pas une offre 
                    contractuelle. Toute transaction est soumise à la conclusion d'un contrat écrit spécifique.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    La información presente en este sitio se proporciona únicamente con fines informativos y no constituye una oferta 
                    contractual. Toda transacción está sujeta a la conclusión de un contrato escrito específico.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Le informazioni presenti su questo sito sono fornite a scopo informativo e non costituiscono un'offerta 
                    contrattuale. Qualsiasi transazione è soggetta alla conclusione di un contratto scritto specifico.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    The information on this site is provided for informational purposes only and does not constitute a contractual 
                    offer. Any transaction is subject to the conclusion of a specific written contract.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HiExclamationCircle className="text-primary-600" size={24} />
              {currentLanguage === 'fr' && '6. Limitation de responsabilité'}
              {currentLanguage === 'es' && '6. Limitación de responsabilidad'}
              {currentLanguage === 'it' && '6. Limitazione di responsabilità'}
              {currentLanguage === 'en' && '6. Limitation of Liability'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                <strong>OD - Omar Deiri</strong> {
                  currentLanguage === 'fr' ? 's\'efforce de fournir des informations exactes et à jour sur ce site. Cependant, nous ne garantissons pas :' :
                  currentLanguage === 'es' ? 'se esfuerza por proporcionar información precisa y actualizada en este sitio. Sin embargo, no garantizamos:' :
                  currentLanguage === 'it' ? 'si sforza di fornire informazioni accurate e aggiornate su questo sito. Tuttavia, non garantiamo:' :
                  'strives to provide accurate and up-to-date information on this site. However, we do not guarantee:'
                }
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {currentLanguage === 'fr' && 'L\'exactitude, la complétude ou l\'actualité des informations'}
                  {currentLanguage === 'es' && 'La exactitud, integridad o actualidad de la información'}
                  {currentLanguage === 'it' && 'L\'accuratezza, completezza o attualità delle informazioni'}
                  {currentLanguage === 'en' && 'The accuracy, completeness, or timeliness of information'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'L\'absence d\'interruption ou d\'erreur dans le fonctionnement du site'}
                  {currentLanguage === 'es' && 'La ausencia de interrupciones o errores en el funcionamiento del sitio'}
                  {currentLanguage === 'it' && 'L\'assenza di interruzioni o errori nel funzionamento del sito'}
                  {currentLanguage === 'en' && 'The absence of interruptions or errors in the site\'s operation'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'L\'absence de virus ou autres éléments nuisibles'}
                  {currentLanguage === 'es' && 'La ausencia de virus u otros elementos dañinos'}
                  {currentLanguage === 'it' && 'L\'assenza di virus o altri elementi dannosi'}
                  {currentLanguage === 'en' && 'The absence of viruses or other harmful elements'}
                </li>
              </ul>
              <p className="mt-3">
                {currentLanguage === 'fr' && (
                  <>
                    En aucun cas <strong>OD - Omar Deiri</strong> ne pourra être tenu responsable des dommages directs, 
                    indirects, accessoires ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser ce site.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    En ningún caso <strong>OD - Omar Deiri</strong> podrá ser considerado responsable de daños directos, 
                    indirectos, accesorios o consecuentes resultantes del uso o la imposibilidad de usar este sitio.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    In nessun caso <strong>OD - Omar Deiri</strong> potrà essere ritenuto responsabile di danni diretti, 
                    indiretti, accessori o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare questo sito.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    In no event shall <strong>OD - Omar Deiri</strong> be held liable for direct, 
                    indirect, incidental, or consequential damages resulting from the use or inability to use this site.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '7. Liens externes'}
              {currentLanguage === 'es' && '7. Enlaces externos'}
              {currentLanguage === 'it' && '7. Link esterni'}
              {currentLanguage === 'en' && '7. External Links'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    Ce site peut contenir des liens vers des sites web tiers. <strong>OD - Omar Deiri</strong> n'exerce aucun 
                    contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur politique de confidentialité 
                    ou leurs pratiques.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Este sitio puede contener enlaces a sitios web de terceros. <strong>OD - Omar Deiri</strong> no ejerce ningún 
                    control sobre estos sitios y declina toda responsabilidad con respecto a su contenido, política de privacidad 
                    o prácticas.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Questo sito può contenere link a siti web di terze parti. <strong>OD - Omar Deiri</strong> non esercita alcun 
                    controllo su questi siti e declina ogni responsabilità riguardo al loro contenuto, politica sulla privacy 
                    o pratiche.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    This site may contain links to third-party websites. <strong>OD - Omar Deiri</strong> exercises no 
                    control over these sites and disclaims all responsibility for their content, privacy policy, 
                    or practices.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Données personnelles
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Le traitement de vos données personnelles est régi par notre{' '}
                <button 
                  onClick={() => handleLinkClick('privacy-policy')}
                  className="text-primary-600 hover:underline"
                >
                  {currentLanguage === 'fr' && 'Politique de confidentialité'}
                  {currentLanguage === 'es' && 'Política de privacidad'}
                  {currentLanguage === 'it' && 'Politica sulla privacy'}
                  {currentLanguage === 'en' && 'Privacy Policy'}
                </button>, 
                {currentLanguage === 'fr' && 'qui fait partie intégrante des présentes conditions d\'utilisation.'}
                {currentLanguage === 'es' && 'que forma parte integral de estos términos de servicio.'}
                {currentLanguage === 'it' && 'che fa parte integrante di questi termini di servizio.'}
                {currentLanguage === 'en' && 'which forms an integral part of these terms of service.'}
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '9. Confidentialité professionnelle'}
              {currentLanguage === 'es' && '9. Confidencialidad profesional'}
              {currentLanguage === 'it' && '9. Riservatezza professionale'}
              {currentLanguage === 'en' && '9. Professional Confidentiality'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    <strong>OD - Omar Deiri</strong> s'engage à respecter la confidentialité de toutes les informations 
                    communiquées dans le cadre de ses prestations professionnelles, conformément aux obligations légales 
                    et déontologiques applicables.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    <strong>OD - Omar Deiri</strong> se compromete a respetar la confidencialidad de toda la información 
                    comunicada en el marco de sus servicios profesionales, de acuerdo con las obligaciones legales 
                    y deontológicas aplicables.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    <strong>OD - Omar Deiri</strong> si impegna a rispettare la riservatezza di tutte le informazioni 
                    comunicate nel quadro dei suoi servizi professionali, conformemente agli obblighi legali 
                    e deontologici applicabili.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    <strong>OD - Omar Deiri</strong> undertakes to respect the confidentiality of all information 
                    communicated in the context of its professional services, in accordance with applicable legal 
                    and ethical obligations.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div id="section-10" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '10. Droit applicable et juridiction'}
              {currentLanguage === 'es' && '10. Ley aplicable y jurisdicción'}
              {currentLanguage === 'it' && '10. Legge applicabile e giurisdizione'}
              {currentLanguage === 'en' && '10. Applicable Law and Jurisdiction'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    Les présentes conditions d'utilisation sont régies par le droit suisse. Tout litige relatif à l'utilisation 
                    de ce site sera soumis à la juridiction exclusive des tribunaux de Genève, Suisse.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Estos términos de servicio se rigen por la ley suiza. Cualquier disputa relacionada con el uso 
                    de este sitio estará sujeta a la jurisdicción exclusiva de los tribunales de Ginebra, Suiza.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Questi termini di servizio sono disciplinati dalla legge svizzera. Qualsiasi controversia relativa all'utilizzo 
                    di questo sito sarà soggetta alla giurisdizione esclusiva dei tribunali di Ginevra, Svizzera.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    These terms of service are governed by Swiss law. Any dispute relating to the use 
                    of this site shall be subject to the exclusive jurisdiction of the courts of Geneva, Switzerland.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div id="section-11" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '11. Modifications'}
              {currentLanguage === 'es' && '11. Modificaciones'}
              {currentLanguage === 'it' && '11. Modifiche'}
              {currentLanguage === 'en' && '11. Modifications'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    <strong>OD - Omar Deiri</strong> se réserve le droit de modifier les présentes conditions d'utilisation 
                    à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Il est de votre 
                    responsabilité de consulter régulièrement ces conditions.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    <strong>OD - Omar Deiri</strong> se reserva el derecho de modificar estos términos de servicio 
                    en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio. Es su 
                    responsabilidad consultar regularmente estos términos.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    <strong>OD - Omar Deiri</strong> si riserva il diritto di modificare questi termini di servizio 
                    in qualsiasi momento. Le modifiche entrano in vigore dalla loro pubblicazione sul sito. È vostra 
                    responsabilità consultare regolarmente questi termini.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    <strong>OD - Omar Deiri</strong> reserves the right to modify these terms of service 
                    at any time. Modifications take effect upon their publication on the site. It is your 
                    responsibility to regularly consult these terms.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div id="section-12" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '12. Nullité partielle'}
              {currentLanguage === 'es' && '12. Nulidad parcial'}
              {currentLanguage === 'it' && '12. Nullità parziale'}
              {currentLanguage === 'en' && '12. Partial Invalidity'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && (
                  <>
                    Si une disposition des présentes conditions d'utilisation est déclarée nulle ou inapplicable, les autres 
                    dispositions demeureront en vigueur. La disposition nulle sera remplacée par une disposition valide se 
                    rapprochant le plus possible de l'intention initiale.
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Si una disposición de estos términos de servicio se declara nula o inaplicable, las demás 
                    disposiciones permanecerán en vigor. La disposición nula será reemplazada por una disposición válida que 
                    se acerque lo más posible a la intención original.
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Se una disposizione di questi termini di servizio è dichiarata nulla o inapplicabile, le altre 
                    disposizioni rimarranno in vigore. La disposizione nulla sarà sostituita da una disposizione valida che 
                    si avvicini il più possibile all'intenzione originale.
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    If a provision of these terms of service is declared null or inapplicable, the other 
                    provisions shall remain in effect. The null provision shall be replaced by a valid provision that 
                    comes as close as possible to the original intention.
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
              {currentLanguage === 'fr' && 'Pour toute question concernant ces conditions d\'utilisation, veuillez nous contacter :'}
              {currentLanguage === 'es' && 'Para cualquier pregunta sobre estos términos de servicio, contáctenos:'}
              {currentLanguage === 'it' && 'Per qualsiasi domanda su questi termini di servizio, contattateci:'}
              {currentLanguage === 'en' && 'For any questions regarding these terms of service, please contact us:'}
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

export default TermsOfService

