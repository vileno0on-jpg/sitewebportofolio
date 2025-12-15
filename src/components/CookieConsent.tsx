import { useState, useEffect } from 'react'
import { HiX, HiShieldCheck, HiCog } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

interface CookieConsentProps {
  setActiveSection?: (section: string) => void
}

const CookieConsent = ({ setActiveSection }: CookieConsentProps) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
  }

  const handleCustomize = () => {
    if (setActiveSection) {
      setActiveSection('cookie-policy')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up px-4 pb-4">
      <div className="bg-white border-t-4 border-primary-600 shadow-2xl rounded-lg max-w-6xl mx-auto">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="bg-primary-50 p-2 md:p-3 rounded-lg">
                <HiShieldCheck className="text-primary-600" size={28} />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {currentLanguage === 'fr' && 'Nous utilisons des cookies'}
                {currentLanguage === 'es' && 'Utilizamos cookies'}
                {currentLanguage === 'it' && 'Utilizziamo i cookie'}
                {currentLanguage === 'en' && 'We use cookies'}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                {currentLanguage === 'fr' && (
                  <>
                    Ce site utilise le stockage local du navigateur pour mémoriser vos préférences (langue, consentement). 
                    En cliquant sur "Accepter", vous acceptez notre utilisation de ces technologies. 
                    <button
                      onClick={handleCustomize}
                      className="text-primary-600 hover:underline font-semibold ml-1"
                    >
                      En savoir plus
                    </button>
                  </>
                )}
                {currentLanguage === 'es' && (
                  <>
                    Este sitio utiliza almacenamiento local del navegador para recordar sus preferencias (idioma, consentimiento). 
                    Al hacer clic en "Aceptar", acepta nuestro uso de estas tecnologías. 
                    <button
                      onClick={handleCustomize}
                      className="text-primary-600 hover:underline font-semibold ml-1"
                    >
                      Más información
                    </button>
                  </>
                )}
                {currentLanguage === 'it' && (
                  <>
                    Questo sito utilizza l'archiviazione locale del browser per ricordare le vostre preferenze (lingua, consenso). 
                    Cliccando su "Accetta", accettate il nostro utilizzo di queste tecnologie. 
                    <button
                      onClick={handleCustomize}
                      className="text-primary-600 hover:underline font-semibold ml-1"
                    >
                      Ulteriori informazioni
                    </button>
                  </>
                )}
                {currentLanguage === 'en' && (
                  <>
                    This website uses browser local storage to remember your preferences (language, consent). 
                    By clicking "Accept", you consent to our use of these technologies. 
                    <button
                      onClick={handleCustomize}
                      className="text-primary-600 hover:underline font-semibold ml-1"
                    >
                      Learn more
                    </button>
                  </>
                )}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3">
                <button
                  onClick={handleAccept}
                  className="bg-primary-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <HiShieldCheck size={18} />
                  {currentLanguage === 'fr' && 'Accepter'}
                  {currentLanguage === 'es' && 'Aceptar'}
                  {currentLanguage === 'it' && 'Accetta'}
                  {currentLanguage === 'en' && 'Accept'}
                </button>
                <button
                  onClick={handleCustomize}
                  className="bg-gray-100 text-gray-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <HiCog size={18} />
                  {currentLanguage === 'fr' && 'Personnaliser'}
                  {currentLanguage === 'es' && 'Personalizar'}
                  {currentLanguage === 'it' && 'Personalizza'}
                  {currentLanguage === 'en' && 'Customize'}
                </button>
                <button
                  onClick={handleDecline}
                  className="bg-white text-gray-700 border-2 border-gray-300 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm md:text-base"
                >
                  {currentLanguage === 'fr' && 'Refuser'}
                  {currentLanguage === 'es' && 'Rechazar'}
                  {currentLanguage === 'it' && 'Rifiuta'}
                  {currentLanguage === 'en' && 'Decline'}
                </button>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors mt-1"
              aria-label={
                currentLanguage === 'fr' ? 'Fermer' :
                currentLanguage === 'es' ? 'Cerrar' :
                currentLanguage === 'it' ? 'Chiudi' :
                'Close'
              }
            >
              <HiX size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent

