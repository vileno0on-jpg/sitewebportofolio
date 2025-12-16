import { useState, useEffect } from 'react'
import { HiArrowRight, HiPhone, HiMail, HiLocationMarker, HiCheckCircle, HiAcademicCap, HiShieldCheck } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/images/hero-geneva.png'

interface HeroProps {
  setActiveSection?: (section: string) => void
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScrollToServices = () => {
    if (setActiveSection) {
      setActiveSection('services')
    }
  }

  const handleScrollToContact = () => {
    if (setActiveSection) {
      setActiveSection('contact')
    }
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Professional Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Geneva cityscape" 
            className="w-full h-full object-cover"
          />
          {/* Professional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className={`text-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Professional Badge */}
            <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-md mb-8 border border-white/20 transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <HiShieldCheck className="text-white" size={18} />
              <span className="text-white font-medium text-sm tracking-wide">Authorized Business Agency - Geneva State Council</span>
            </div>

            {/* Professional Title */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {t('hero.title')}
            </h1>
            
            {/* Professional Subtitle */}
            <p className={`text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 max-w-4xl mx-auto font-medium transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {t('hero.subtitle')}
            </p>
            
            {/* Professional Description */}
            <p className={`text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed transition-opacity duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {t('hero.description')}
            </p>

            {/* Professional CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-20 transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <button 
                onClick={handleScrollToServices}
                className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-md font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {t('hero.discoverServices')}
                <HiArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={handleScrollToContact}
                className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-3.5 rounded-md font-semibold text-base transition-all duration-200 backdrop-blur-sm"
              >
                {t('hero.contactUs')}
              </button>
            </div>

            {/* Professional Statistics Section */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16 transition-opacity duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">15+</div>
                <div className="text-sm text-white/70 font-medium">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">100%</div>
                <div className="text-sm text-white/70 font-medium">Confidential</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">24h</div>
                <div className="text-sm text-white/70 font-medium">Response Time</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">Direct</div>
                <div className="text-sm text-white/70 font-medium">Contact</div>
              </div>
            </div>

            {/* Professional Contact Info Cards */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-opacity duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-lg mb-4 mx-auto group-hover:bg-primary-100 transition-colors">
                  <HiPhone className="text-primary-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{t('hero.phone')}</h3>
                <a href="tel:+41227890060" className="text-gray-700 font-medium hover:text-primary-600 transition-colors text-sm">
                  022 789 00 60
                </a>
              </div>

              <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-lg mb-4 mx-auto group-hover:bg-primary-100 transition-colors">
                  <HiMail className="text-primary-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{t('hero.email')}</h3>
                <a href="mailto:omar@deiri.ch" className="text-gray-700 font-medium hover:text-primary-600 transition-colors break-all text-sm">
                  omar@deiri.ch
                </a>
              </div>

              <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-lg mb-4 mx-auto group-hover:bg-primary-100 transition-colors">
                  <HiLocationMarker className="text-primary-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{t('hero.address')}</h3>
                <p className="text-gray-700 font-medium text-sm" dangerouslySetInnerHTML={{ __html: t('hero.addressValue') }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Trust Indicators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{t('hero.whyChooseUs.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('hero.whyChooseUs.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 border border-gray-200">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center">
                  <HiShieldCheck className="text-primary-600" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('hero.whyChooseUs.authorizedAgency.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('hero.whyChooseUs.authorizedAgency.description')}</p>
            </div>

            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 border border-gray-200">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center">
                  <HiAcademicCap className="text-primary-600" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('hero.whyChooseUs.universityEducation.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('hero.whyChooseUs.universityEducation.description')}</p>
            </div>

            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 border border-gray-200">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center">
                  <HiCheckCircle className="text-primary-600" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('hero.whyChooseUs.provenExpertise.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('hero.whyChooseUs.provenExpertise.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
