import { HiHome, HiOfficeBuilding, HiCurrencyDollar, HiBriefcase } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import servicesImage from '../assets/images/services-building.png'
import ctaImage from '../assets/images/cta-businessman.png'

const Services = () => {
  const { t } = useTranslation()
  
  const services = [
    {
      icon: HiCurrencyDollar,
      title: t('services.depreciatedAssets.title'),
      description: t('services.depreciatedAssets.description'),
      features: [
        t('services.depreciatedAssets.features.1'),
        t('services.depreciatedAssets.features.2'),
        t('services.depreciatedAssets.features.3'),
        t('services.depreciatedAssets.features.4')
      ]
    },
    {
      icon: HiHome,
      title: t('services.realEstate.title'),
      description: t('services.realEstate.description'),
      features: [
        t('services.realEstate.features.1'),
        t('services.realEstate.features.2'),
        t('services.realEstate.features.3'),
        t('services.realEstate.features.4')
      ]
    },
    {
      icon: HiBriefcase,
      title: t('services.businessTransfer.title'),
      description: t('services.businessTransfer.description'),
      features: [
        t('services.businessTransfer.features.1'),
        t('services.businessTransfer.features.2'),
        t('services.businessTransfer.features.3'),
        t('services.businessTransfer.features.4')
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image Section */}
        <div className="relative mb-16 rounded-lg overflow-hidden shadow-xl">
          <img 
            src={servicesImage} 
            alt="Modern Geneva architecture representing our services" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/55 via-primary-800/40 to-transparent flex items-center">
            <div className="px-8 py-12 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {t('services.title')}
              </h2>
              <p className="text-xl md:text-2xl max-w-2xl drop-shadow-md">
                {t('services.subtitle')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6 mx-auto">
                <service.icon className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={ctaImage} 
              alt="Bâtiment moderne avec architecture en verre représentant notre expertise professionnelle" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 via-primary-800/50 to-primary-700/40 flex items-center justify-center">
              <div className="text-white p-8 max-w-4xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">
                  {t('services.cta.title')}
                </h3>
                <p className="text-lg md:text-xl mb-6 opacity-95 drop-shadow-md">
                  {t('services.cta.description')}
                </p>
                <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
                  {t('services.cta.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services