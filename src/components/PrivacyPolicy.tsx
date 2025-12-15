import { HiShieldCheck, HiLockClosed, HiEye, HiUser, HiMail } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

interface PrivacyPolicyProps {
  setActiveSection?: (section: string) => void
}

const PrivacyPolicy = ({ setActiveSection }: PrivacyPolicyProps) => {
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
            <HiShieldCheck className="text-primary-600" size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'fr' && 'Politique de Confidentialité'}
            {currentLanguage === 'es' && 'Política de Privacidad'}
            {currentLanguage === 'it' && 'Politica sulla Privacy'}
            {currentLanguage === 'en' && 'Privacy Policy'}
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
                <strong>OD - Omar Deiri</strong> s'engage à protéger votre vie privée et vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons 
                vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD) 
                et à la Loi fédérale suisse sur la protection des données (LPD).
              </>
            )}
            {currentLanguage === 'es' && (
              <>
                <strong>OD - Omar Deiri</strong> se compromete a proteger su privacidad y datos personales. 
                Esta política de privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos 
                su información personal de acuerdo con el Reglamento General de Protección de Datos (RGPD) 
                y la Ley Federal Suiza de Protección de Datos (LPD).
              </>
            )}
            {currentLanguage === 'it' && (
              <>
                <strong>OD - Omar Deiri</strong> si impegna a proteggere la vostra privacy e i vostri dati personali. 
                Questa politica sulla privacy spiega come raccogliamo, utilizziamo, archiviamo e proteggiamo 
                le vostre informazioni personali in conformità con il Regolamento Generale sulla Protezione dei Dati (RGPD) 
                e la Legge Federale Svizzera sulla Protezione dei Dati (LPD).
              </>
            )}
            {currentLanguage === 'en' && (
              <>
                <strong>OD - Omar Deiri</strong> is committed to protecting your privacy and personal data. 
                This privacy policy explains how we collect, use, store, and protect your personal information 
                in accordance with the General Data Protection Regulation (GDPR) and the Swiss Federal Data Protection Act (DPA).
              </>
            )}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HiUser className="text-primary-600" size={24} />
              {currentLanguage === 'fr' && '1. Responsable du traitement'}
              {currentLanguage === 'es' && '1. Responsable del tratamiento'}
              {currentLanguage === 'it' && '1. Responsabile del trattamento'}
              {currentLanguage === 'en' && '1. Data Controller'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Le responsable du traitement des données est :'}
                {currentLanguage === 'es' && 'El responsable del tratamiento de datos es:'}
                {currentLanguage === 'it' && 'Il responsabile del trattamento dei dati è:'}
                {currentLanguage === 'en' && 'The data controller is:'}
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
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HiEye className="text-primary-600" size={24} />
              {currentLanguage === 'fr' && '2. Données collectées'}
              {currentLanguage === 'es' && '2. Datos recopilados'}
              {currentLanguage === 'it' && '2. Dati raccolti'}
              {currentLanguage === 'en' && '2. Data Collected'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Nous collectons les types de données personnelles suivants :'}
                {currentLanguage === 'es' && 'Recopilamos los siguientes tipos de datos personales:'}
                {currentLanguage === 'it' && 'Raccogliamo i seguenti tipi di dati personali:'}
                {currentLanguage === 'en' && 'We collect the following types of personal data:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {currentLanguage === 'fr' && 'Données d\'identification : nom, prénom, adresse email, numéro de téléphone'}
                  {currentLanguage === 'es' && 'Datos de identificación: nombre, apellido, dirección de correo electrónico, número de teléfono'}
                  {currentLanguage === 'it' && 'Dati di identificazione: nome, cognome, indirizzo email, numero di telefono'}
                  {currentLanguage === 'en' && 'Identification data: name, surname, email address, phone number'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Données de navigation : adresse IP, type de navigateur, pages visitées, durée de visite'}
                  {currentLanguage === 'es' && 'Datos de navegación: dirección IP, tipo de navegador, páginas visitadas, duración de la visita'}
                  {currentLanguage === 'it' && 'Dati di navigazione: indirizzo IP, tipo di browser, pagine visitate, durata della visita'}
                  {currentLanguage === 'en' && 'Navigation data: IP address, browser type, pages visited, visit duration'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Données de communication : messages envoyés via le formulaire de contact'}
                  {currentLanguage === 'es' && 'Datos de comunicación: mensajes enviados a través del formulario de contacto'}
                  {currentLanguage === 'it' && 'Dati di comunicazione: messaggi inviati tramite il modulo di contatto'}
                  {currentLanguage === 'en' && 'Communication data: messages sent via the contact form'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Préférences : langue sélectionnée, préférences de cookies'}
                  {currentLanguage === 'es' && 'Preferencias: idioma seleccionado, preferencias de cookies'}
                  {currentLanguage === 'it' && 'Preferenze: lingua selezionata, preferenze dei cookie'}
                  {currentLanguage === 'en' && 'Preferences: selected language, cookie preferences'}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '3. Finalités du traitement'}
              {currentLanguage === 'es' && '3. Finalidades del tratamiento'}
              {currentLanguage === 'it' && '3. Finalità del trattamento'}
              {currentLanguage === 'en' && '3. Purpose of Processing'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Vos données personnelles sont traitées pour les finalités suivantes :'}
                {currentLanguage === 'es' && 'Sus datos personales se procesan para los siguientes fines:'}
                {currentLanguage === 'it' && 'I vostri dati personali vengono trattati per le seguenti finalità:'}
                {currentLanguage === 'en' && 'Your personal data is processed for the following purposes:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {currentLanguage === 'fr' && 'Répondre à vos demandes de contact et de renseignements'}
                  {currentLanguage === 'es' && 'Responder a sus solicitudes de contacto e información'}
                  {currentLanguage === 'it' && 'Rispondere alle vostre richieste di contatto e informazioni'}
                  {currentLanguage === 'en' && 'Responding to your contact and information requests'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Fournir nos services professionnels (intermédiation, négociation, conseil)'}
                  {currentLanguage === 'es' && 'Proporcionar nuestros servicios profesionales (intermediación, negociación, consultoría)'}
                  {currentLanguage === 'it' && 'Fornire i nostri servizi professionali (intermediazione, negoziazione, consulenza)'}
                  {currentLanguage === 'en' && 'Providing our professional services (intermediation, negotiation, consulting)'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Améliorer notre site web et l\'expérience utilisateur'}
                  {currentLanguage === 'es' && 'Mejorar nuestro sitio web y la experiencia del usuario'}
                  {currentLanguage === 'it' && 'Migliorare il nostro sito web e l\'esperienza dell\'utente'}
                  {currentLanguage === 'en' && 'Improving our website and user experience'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Respecter nos obligations légales et réglementaires'}
                  {currentLanguage === 'es' && 'Cumplir con nuestras obligaciones legales y regulatorias'}
                  {currentLanguage === 'it' && 'Rispettare i nostri obblighi legali e normativi'}
                  {currentLanguage === 'en' && 'Complying with our legal and regulatory obligations'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Gérer la relation client et la communication'}
                  {currentLanguage === 'es' && 'Gestionar la relación con el cliente y la comunicación'}
                  {currentLanguage === 'it' && 'Gestire la relazione con il cliente e la comunicazione'}
                  {currentLanguage === 'en' && 'Managing customer relationship and communication'}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '4. Base légale du traitement'}
              {currentLanguage === 'es' && '4. Base legal del tratamiento'}
              {currentLanguage === 'it' && '4. Base legale del trattamento'}
              {currentLanguage === 'en' && '4. Legal Basis for Processing'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Le traitement de vos données personnelles est fondé sur :'}
                {currentLanguage === 'es' && 'El tratamiento de sus datos personales se basa en:'}
                {currentLanguage === 'it' && 'Il trattamento dei vostri dati personali si basa su:'}
                {currentLanguage === 'en' && 'The processing of your personal data is based on:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {currentLanguage === 'fr' && 'Votre consentement explicite (formulaire de contact, cookies non essentiels)'}
                  {currentLanguage === 'es' && 'Su consentimiento explícito (formulario de contacto, cookies no esenciales)'}
                  {currentLanguage === 'it' && 'Il vostro consenso esplicito (modulo di contatto, cookie non essenziali)'}
                  {currentLanguage === 'en' && 'Your explicit consent (contact form, non-essential cookies)'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'L\'exécution d\'un contrat ou de mesures précontractuelles'}
                  {currentLanguage === 'es' && 'La ejecución de un contrato o medidas precontractuales'}
                  {currentLanguage === 'it' && 'L\'esecuzione di un contratto o misure precontrattuali'}
                  {currentLanguage === 'en' && 'The execution of a contract or pre-contractual measures'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Le respect d\'obligations légales (conservation de documents, obligations comptables)'}
                  {currentLanguage === 'es' && 'El cumplimiento de obligaciones legales (conservación de documentos, obligaciones contables)'}
                  {currentLanguage === 'it' && 'Il rispetto di obblighi legali (conservazione di documenti, obblighi contabili)'}
                  {currentLanguage === 'en' && 'Compliance with legal obligations (document retention, accounting obligations)'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Notre intérêt légitime (amélioration du site, sécurité, prévention de la fraude)'}
                  {currentLanguage === 'es' && 'Nuestro interés legítimo (mejora del sitio, seguridad, prevención de fraude)'}
                  {currentLanguage === 'it' && 'Il nostro interesse legittimo (miglioramento del sito, sicurezza, prevenzione delle frodi)'}
                  {currentLanguage === 'en' && 'Our legitimate interest (website improvement, security, fraud prevention)'}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HiLockClosed className="text-primary-600" size={24} />
              {currentLanguage === 'fr' && '5. Conservation des données'}
              {currentLanguage === 'es' && '5. Conservación de datos'}
              {currentLanguage === 'it' && '5. Conservazione dei dati'}
              {currentLanguage === 'en' && '5. Data Retention'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :'}
                {currentLanguage === 'es' && 'Conservamos sus datos personales solo durante el tiempo necesario para los fines para los que fueron recopilados:'}
                {currentLanguage === 'it' && 'Conserviamo i vostri dati personali solo per il tempo necessario alle finalità per le quali sono stati raccolti:'}
                {currentLanguage === 'en' && 'We retain your personal data only for as long as necessary for the purposes for which they were collected:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {currentLanguage === 'fr' && 'Données de contact : 3 ans après le dernier contact'}
                  {currentLanguage === 'es' && 'Datos de contacto: 3 años después del último contacto'}
                  {currentLanguage === 'it' && 'Dati di contatto: 3 anni dopo l\'ultimo contatto'}
                  {currentLanguage === 'en' && 'Contact data: 3 years after last contact'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Données contractuelles : durée du contrat + 10 ans (obligations légales suisses)'}
                  {currentLanguage === 'es' && 'Datos contractuales: duración del contrato + 10 años (obligaciones legales suizas)'}
                  {currentLanguage === 'it' && 'Dati contrattuali: durata del contratto + 10 anni (obblighi legali svizzeri)'}
                  {currentLanguage === 'en' && 'Contractual data: contract duration + 10 years (Swiss legal obligations)'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Données de navigation : 13 mois maximum'}
                  {currentLanguage === 'es' && 'Datos de navegación: máximo 13 meses'}
                  {currentLanguage === 'it' && 'Dati di navigazione: massimo 13 mesi'}
                  {currentLanguage === 'en' && 'Navigation data: maximum 13 months'}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '6. Partage des données'}
              {currentLanguage === 'es' && '6. Compartir datos'}
              {currentLanguage === 'it' && '6. Condivisione dei dati'}
              {currentLanguage === 'en' && '6. Data Sharing'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf dans les cas suivants :'}
                {currentLanguage === 'es' && 'No vendemos, alquilamos ni compartimos sus datos personales con terceros, excepto en los siguientes casos:'}
                {currentLanguage === 'it' && 'Non vendiamo, affittiamo né condividiamo i vostri dati personali con terzi, tranne nei seguenti casi:'}
                {currentLanguage === 'en' && 'We do not sell, rent, or share your personal data with third parties, except in the following cases:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {currentLanguage === 'fr' && 'Prestataires de services techniques (hébergement, maintenance) sous contrat de confidentialité strict'}
                  {currentLanguage === 'es' && 'Proveedores de servicios técnicos (alojamiento, mantenimiento) bajo estricto acuerdo de confidencialidad'}
                  {currentLanguage === 'it' && 'Fornitori di servizi tecnici (hosting, manutenzione) sotto stretto accordo di riservatezza'}
                  {currentLanguage === 'en' && 'Technical service providers (hosting, maintenance) under strict confidentiality agreement'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Obligations légales (autorités judiciaires, fiscales, régulateurs)'}
                  {currentLanguage === 'es' && 'Obligaciones legales (autoridades judiciales, fiscales, reguladores)'}
                  {currentLanguage === 'it' && 'Obblighi legali (autorità giudiziarie, fiscali, regolatori)'}
                  {currentLanguage === 'en' && 'Legal obligations (judicial, tax, regulatory authorities)'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'Avec votre consentement explicite'}
                  {currentLanguage === 'es' && 'Con su consentimiento explícito'}
                  {currentLanguage === 'it' && 'Con il vostro consenso esplicito'}
                  {currentLanguage === 'en' && 'With your explicit consent'}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '7. Vos droits'}
              {currentLanguage === 'es' && '7. Sus derechos'}
              {currentLanguage === 'it' && '7. I vostri diritti'}
              {currentLanguage === 'en' && '7. Your Rights'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Conformément au RGPD et à la LPD suisse, vous disposez des droits suivants :'}
                {currentLanguage === 'es' && 'De acuerdo con el RGPD y la LPD suiza, tiene los siguientes derechos:'}
                {currentLanguage === 'it' && 'In conformità con il RGPD e la LPD svizzera, avete i seguenti diritti:'}
                {currentLanguage === 'en' && 'In accordance with GDPR and Swiss DPA, you have the following rights:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>
                    {currentLanguage === 'fr' && 'Droit d\'accès :'}
                    {currentLanguage === 'es' && 'Derecho de acceso:'}
                    {currentLanguage === 'it' && 'Diritto di accesso:'}
                    {currentLanguage === 'en' && 'Right of access:'}
                  </strong>
                  {' '}
                  {currentLanguage === 'fr' && 'obtenir une copie de vos données personnelles'}
                  {currentLanguage === 'es' && 'obtener una copia de sus datos personales'}
                  {currentLanguage === 'it' && 'ottenere una copia dei vostri dati personali'}
                  {currentLanguage === 'en' && 'obtain a copy of your personal data'}
                </li>
                <li>
                  <strong>
                    {currentLanguage === 'fr' && 'Droit de rectification :'}
                    {currentLanguage === 'es' && 'Derecho de rectificación:'}
                    {currentLanguage === 'it' && 'Diritto di rettifica:'}
                    {currentLanguage === 'en' && 'Right to rectification:'}
                  </strong>
                  {' '}
                  {currentLanguage === 'fr' && 'corriger vos données inexactes ou incomplètes'}
                  {currentLanguage === 'es' && 'corregir sus datos inexactos o incompletos'}
                  {currentLanguage === 'it' && 'correggere i vostri dati inesatti o incompleti'}
                  {currentLanguage === 'en' && 'correct your inaccurate or incomplete data'}
                </li>
                <li>
                  <strong>
                    {currentLanguage === 'fr' && 'Droit à l\'effacement :'}
                    {currentLanguage === 'es' && 'Derecho al borrado:'}
                    {currentLanguage === 'it' && 'Diritto alla cancellazione:'}
                    {currentLanguage === 'en' && 'Right to erasure:'}
                  </strong>
                  {' '}
                  {currentLanguage === 'fr' && 'demander la suppression de vos données (sous certaines conditions)'}
                  {currentLanguage === 'es' && 'solicitar la eliminación de sus datos (bajo ciertas condiciones)'}
                  {currentLanguage === 'it' && 'richiedere la cancellazione dei vostri dati (in determinate condizioni)'}
                  {currentLanguage === 'en' && 'request deletion of your data (under certain conditions)'}
                </li>
                <li>
                  <strong>
                    {currentLanguage === 'fr' && 'Droit à la limitation :'}
                    {currentLanguage === 'es' && 'Derecho a la limitación:'}
                    {currentLanguage === 'it' && 'Diritto alla limitazione:'}
                    {currentLanguage === 'en' && 'Right to restriction:'}
                  </strong>
                  {' '}
                  {currentLanguage === 'fr' && 'limiter le traitement de vos données'}
                  {currentLanguage === 'es' && 'limitar el tratamiento de sus datos'}
                  {currentLanguage === 'it' && 'limitare il trattamento dei vostri dati'}
                  {currentLanguage === 'en' && 'restrict the processing of your data'}
                </li>
                <li>
                  <strong>
                    {currentLanguage === 'fr' && 'Droit à la portabilité :'}
                    {currentLanguage === 'es' && 'Derecho a la portabilidad:'}
                    {currentLanguage === 'it' && 'Diritto alla portabilità:'}
                    {currentLanguage === 'en' && 'Right to data portability:'}
                  </strong>
                  {' '}
                  {currentLanguage === 'fr' && 'recevoir vos données dans un format structuré'}
                  {currentLanguage === 'es' && 'recibir sus datos en un formato estructurado'}
                  {currentLanguage === 'it' && 'ricevere i vostri dati in un formato strutturato'}
                  {currentLanguage === 'en' && 'receive your data in a structured format'}
                </li>
                <li>
                  <strong>
                    {currentLanguage === 'fr' && 'Droit d\'opposition :'}
                    {currentLanguage === 'es' && 'Derecho de oposición:'}
                    {currentLanguage === 'it' && 'Diritto di opposizione:'}
                    {currentLanguage === 'en' && 'Right to object:'}
                  </strong>
                  {' '}
                  {currentLanguage === 'fr' && 'vous opposer au traitement de vos données'}
                  {currentLanguage === 'es' && 'oponerse al tratamiento de sus datos'}
                  {currentLanguage === 'it' && 'opporvi al trattamento dei vostri dati'}
                  {currentLanguage === 'en' && 'object to the processing of your data'}
                </li>
                <li>
                  <strong>
                    {currentLanguage === 'fr' && 'Droit de retirer votre consentement :'}
                    {currentLanguage === 'es' && 'Derecho a retirar su consentimiento:'}
                    {currentLanguage === 'it' && 'Diritto di revocare il consenso:'}
                    {currentLanguage === 'en' && 'Right to withdraw consent:'}
                  </strong>
                  {' '}
                  {currentLanguage === 'fr' && 'à tout moment, sans affecter la licéité du traitement antérieur'}
                  {currentLanguage === 'es' && 'en cualquier momento, sin afectar la licitud del tratamiento anterior'}
                  {currentLanguage === 'it' && 'in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente'}
                  {currentLanguage === 'en' && 'at any time, without affecting the lawfulness of prior processing'}
                </li>
              </ul>
              <p className="mt-3">
                {currentLanguage === 'fr' && 'Pour exercer ces droits, contactez-nous à omar@deiri.ch. Nous répondrons dans un délai d\'un mois.'}
                {currentLanguage === 'es' && 'Para ejercer estos derechos, contáctenos en omar@deiri.ch. Responderemos dentro de un mes.'}
                {currentLanguage === 'it' && 'Per esercitare questi diritti, contattateci a omar@deiri.ch. Risponderemo entro un mese.'}
                {currentLanguage === 'en' && 'To exercise these rights, contact us at omar@deiri.ch. We will respond within one month.'}
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '8. Sécurité des données'}
              {currentLanguage === 'es' && '8. Seguridad de datos'}
              {currentLanguage === 'it' && '8. Sicurezza dei dati'}
              {currentLanguage === 'en' && '8. Data Security'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :'}
                {currentLanguage === 'es' && 'Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra:'}
                {currentLanguage === 'it' && 'Implementiamo misure tecniche e organizzative appropriate per proteggere i vostri dati personali contro:'}
                {currentLanguage === 'en' && 'We implement appropriate technical and organizational measures to protect your personal data against:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {currentLanguage === 'fr' && 'L\'accès non autorisé'}
                  {currentLanguage === 'es' && 'Acceso no autorizado'}
                  {currentLanguage === 'it' && 'Accesso non autorizzato'}
                  {currentLanguage === 'en' && 'Unauthorized access'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'La perte, la destruction ou l\'altération accidentelle'}
                  {currentLanguage === 'es' && 'Pérdida, destrucción o alteración accidental'}
                  {currentLanguage === 'it' && 'Perdita, distruzione o alterazione accidentale'}
                  {currentLanguage === 'en' && 'Loss, destruction, or accidental alteration'}
                </li>
                <li>
                  {currentLanguage === 'fr' && 'La divulgation non autorisée'}
                  {currentLanguage === 'es' && 'Divulgación no autorizada'}
                  {currentLanguage === 'it' && 'Divulgazione non autorizzata'}
                  {currentLanguage === 'en' && 'Unauthorized disclosure'}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '9. Transferts internationaux'}
              {currentLanguage === 'es' && '9. Transferencias internacionales'}
              {currentLanguage === 'it' && '9. Trasferimenti internazionali'}
              {currentLanguage === 'en' && '9. International Transfers'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Vos données personnelles sont principalement stockées et traitées en Suisse et dans l\'Espace économique européen (EEE). En cas de transfert vers un pays tiers, nous nous assurons que des garanties appropriées sont en place conformément au RGPD.'}
                {currentLanguage === 'es' && 'Sus datos personales se almacenan y procesan principalmente en Suiza y en el Espacio Económico Europeo (EEE). En caso de transferencia a un tercer país, nos aseguramos de que existan garantías apropiadas de acuerdo con el RGPD.'}
                {currentLanguage === 'it' && 'I vostri dati personali sono principalmente archiviati e trattati in Svizzera e nello Spazio Economico Europeo (SEE). In caso di trasferimento verso un paese terzo, ci assicuriamo che siano in atto garanzie appropriate in conformità con il RGPD.'}
                {currentLanguage === 'en' && 'Your personal data is primarily stored and processed in Switzerland and the European Economic Area (EEA). In case of transfer to a third country, we ensure that appropriate safeguards are in place in accordance with GDPR.'}
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '10. Cookies'}
              {currentLanguage === 'es' && '10. Cookies'}
              {currentLanguage === 'it' && '10. Cookie'}
              {currentLanguage === 'en' && '10. Cookies'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Notre site utilise des cookies. Pour plus d\'informations sur notre utilisation des cookies, veuillez consulter notre '}
                {currentLanguage === 'es' && 'Nuestro sitio utiliza cookies. Para obtener más información sobre nuestro uso de cookies, consulte nuestra '}
                {currentLanguage === 'it' && 'Il nostro sito utilizza i cookie. Per ulteriori informazioni sul nostro utilizzo dei cookie, consultate la nostra '}
                {currentLanguage === 'en' && 'Our website uses cookies. For more information about our use of cookies, please see our '}
                <button 
                  onClick={() => handleLinkClick('cookie-policy')}
                  className="text-primary-600 hover:underline"
                >
                  {currentLanguage === 'fr' && 'Politique des cookies'}
                  {currentLanguage === 'es' && 'Política de cookies'}
                  {currentLanguage === 'it' && 'Politica sui cookie'}
                  {currentLanguage === 'en' && 'Cookie Policy'}
                </button>.
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '11. Modifications'}
              {currentLanguage === 'es' && '11. Modificaciones'}
              {currentLanguage === 'it' && '11. Modifiche'}
              {currentLanguage === 'en' && '11. Modifications'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Nous vous encourageons à consulter régulièrement cette page.'}
                {currentLanguage === 'es' && 'Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio. Le recomendamos que consulte esta página regularmente.'}
                {currentLanguage === 'it' && 'Ci riserviamo il diritto di modificare questa politica sulla privacy in qualsiasi momento. Le modifiche entrano in vigore dalla loro pubblicazione sul sito. Vi incoraggiamo a consultare regolarmente questa pagina.'}
                {currentLanguage === 'en' && 'We reserve the right to modify this privacy policy at any time. Modifications take effect upon their publication on the website. We encourage you to consult this page regularly.'}
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' && '12. Réclamations'}
              {currentLanguage === 'es' && '12. Reclamaciones'}
              {currentLanguage === 'it' && '12. Reclami'}
              {currentLanguage === 'en' && '12. Complaints'}
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                {currentLanguage === 'fr' && 'Si vous estimez que le traitement de vos données personnelles constitue une violation de la législation sur la protection des données, vous avez le droit d\'introduire une réclamation auprès de l\'autorité de contrôle compétente :'}
                {currentLanguage === 'es' && 'Si considera que el tratamiento de sus datos personales constituye una violación de la legislación de protección de datos, tiene derecho a presentar una reclamación ante la autoridad de control competente:'}
                {currentLanguage === 'it' && 'Se ritenete che il trattamento dei vostri dati personali costituisca una violazione della legislazione sulla protezione dei dati, avete il diritto di presentare un reclamo all\'autorità di controllo competente:'}
                {currentLanguage === 'en' && 'If you believe that the processing of your personal data constitutes a violation of data protection legislation, you have the right to file a complaint with the competent supervisory authority:'}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">
                  {currentLanguage === 'fr' && 'Préposé fédéral à la protection des données et à la transparence (PFPDT)'}
                  {currentLanguage === 'es' && 'Comisionado Federal de Protección de Datos y Transparencia (PFPDT)'}
                  {currentLanguage === 'it' && 'Incaricato federale della protezione dei dati e della trasparenza (IFPDT)'}
                  {currentLanguage === 'en' && 'Federal Data Protection and Information Commissioner (FDPIC)'}
                </p>
                <p>Feldeggweg 1, 3003 Berne, Suisse</p>
                <p>
                  {currentLanguage === 'fr' && 'Site web : '}
                  {currentLanguage === 'es' && 'Sitio web: '}
                  {currentLanguage === 'it' && 'Sito web: '}
                  {currentLanguage === 'en' && 'Website: '}
                  <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    www.edoeb.admin.ch
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-primary-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <HiMail className="text-primary-600" size={24} />
              {currentLanguage === 'fr' && 'Contact'}
              {currentLanguage === 'es' && 'Contacto'}
              {currentLanguage === 'it' && 'Contatto'}
              {currentLanguage === 'en' && 'Contact'}
            </h3>
            <p className="text-gray-700 mb-4">
              {currentLanguage === 'fr' && 'Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, veuillez nous contacter :'}
              {currentLanguage === 'es' && 'Para cualquier pregunta sobre esta política de privacidad o para ejercer sus derechos, contáctenos:'}
              {currentLanguage === 'it' && 'Per qualsiasi domanda su questa politica sulla privacy o per esercitare i vostri diritti, contattateci:'}
              {currentLanguage === 'en' && 'For any questions regarding this privacy policy or to exercise your rights, please contact us:'}
            </p>
            <div className="mt-4 space-y-1">
              <p><strong>Email :</strong> omar@deiri.ch</p>
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

export default PrivacyPolicy
