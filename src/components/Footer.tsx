import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

interface FooterProps {
  setActiveSection?: (section: string) => void
}

const Footer = ({ setActiveSection }: FooterProps) => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (section: string) => {
    if (setActiveSection) {
      setActiveSection(section)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Omar Deiri</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <HiPhone className="text-primary-400 mr-2" size={16} />
                <span className="text-gray-300">022 789 00 60</span>
              </div>
              <div className="flex items-center">
                <HiMail className="text-primary-400 mr-2" size={16} />
                <span className="text-gray-300">omar@deiri.ch</span>
              </div>
              <div className="flex items-start">
                <HiLocationMarker className="text-primary-400 mr-2 mt-1" size={16} />
                <span className="text-gray-300">
                  Route de Frontenex 46<br />
                  1207 Genève, Suisse
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleLinkClick('services')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  {t('footer.servicesItems.realEstate')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  {t('footer.servicesItems.consulting')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  {t('footer.servicesItems.depreciated')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  {t('footer.servicesItems.evaluation')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  {t('footer.servicesItems.management')}
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  {t('nav.contact')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('faq')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  {t('nav.faq')}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 mt-8 pt-8 border-t border-gray-800">
            <h4 className="text-lg font-semibold mb-4">{t('footer.legal')}</h4>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => handleLinkClick('privacy-policy')}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                {t('footer.legalItems.privacy')}
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => handleLinkClick('terms-of-service')}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                {t('footer.legalItems.terms')}
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => handleLinkClick('cookie-policy')}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                {t('footer.legalItems.cookies')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
