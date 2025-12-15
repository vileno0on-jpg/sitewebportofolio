import { HiCheckCircle, HiUserGroup, HiAcademicCap, HiOfficeBuilding } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import aboutImage from '../assets/images/about-portrait.png'

const About = () => {
  const { t } = useTranslation()
  
  const values = [
    {
      icon: HiAcademicCap,
      title: t('about.values.education.title'),
      description: t('about.values.education.description')
    },
    {
      icon: HiOfficeBuilding,
      title: t('about.values.structure.title'),
      description: t('about.values.structure.description')
    },
    {
      icon: HiUserGroup,
      title: t('about.values.approach.title'),
      description: t('about.values.approach.description')
    },
    {
      icon: HiCheckCircle,
      title: t('about.values.reactivity.title'),
      description: t('about.values.reactivity.description')
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl group">
              <img 
                src={aboutImage} 
                alt="Poignée de main professionnelle à Genève - Négociation d'affaires" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium drop-shadow-lg bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
                  Expertise professionnelle à Genève
                </p>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('about.expertiseTitle')}
            </h3>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                {t('about.expertise1')}
              </p>
              <p>
                {t('about.expertise2')}
              </p>
              <p>
                {t('about.expertise3')}
              </p>
              <p>
                {t('about.expertise4')}
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mr-4">
                    <value.icon className="text-primary-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Detail */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('about.marketKnowledge.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('about.marketKnowledge.realEstate.title')}</h4>
              <p className="text-gray-600 mb-4">
                {t('about.marketKnowledge.realEstate.description')}
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                  {t('about.marketKnowledge.realEstate.features.1')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                  {t('about.marketKnowledge.realEstate.features.2')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                  {t('about.marketKnowledge.realEstate.features.3')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                  {t('about.marketKnowledge.realEstate.features.4')}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('about.marketKnowledge.business.title')}</h4>
              <p className="text-gray-600 mb-4">
                {t('about.marketKnowledge.business.description')}
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                  {t('about.marketKnowledge.business.features.1')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                  {t('about.marketKnowledge.business.features.2')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                  {t('about.marketKnowledge.business.features.3')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                  {t('about.marketKnowledge.business.features.4')}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-10 md:p-12 rounded-xl text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            {t('about.cta.title')}
          </h3>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            {t('about.cta.description')}
          </p>
          <button className="bg-white text-primary-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
            {t('about.cta.button')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default About