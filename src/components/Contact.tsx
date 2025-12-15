import { useState } from 'react'
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiShieldCheck, HiChatAlt, HiDocumentText, HiCurrencyDollar } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import contactImage from '../assets/images/contact-cityscape.png'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert(t('contact.form.success'))
  }

  const contactMethods = [
    {
      icon: HiPhone,
      title: t('contact.methods.phone.title'),
      description: t('contact.methods.phone.description'),
      contact: t('contact.methods.phone.contact'),
      availability: t('contact.methods.phone.availability')
    },
    {
      icon: HiMail,
      title: t('contact.methods.email.title'),
      description: t('contact.methods.email.description'),
      contact: t('contact.methods.email.contact'),
      availability: t('contact.methods.email.availability')
    },
    {
      icon: HiChatAlt,
      title: t('contact.methods.appointment.title'),
      description: t('contact.methods.appointment.description'),
      contact: t('contact.methods.appointment.contact'),
      availability: t('contact.methods.appointment.availability')
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image Section */}
        <div className="relative mb-16 rounded-lg overflow-hidden shadow-xl">
          <img 
            src={contactImage} 
            alt="Geneva cityscape with communication icons" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-800/85 to-primary-700/75"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-8 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {t('contact.title')}
              </h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 drop-shadow-md">
                {t('contact.subtitle')}
              </p>
              <div className="flex items-center justify-center gap-2 text-primary-200">
                <HiShieldCheck size={24} />
                <span className="text-lg font-medium drop-shadow-md">{t('contact.confidential')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-primary-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4">
                <method.icon className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-3">
                {method.description}
              </p>
              <p className="font-semibold text-primary-600 mb-1">
                {method.contact}
              </p>
              <p className="text-sm text-gray-500">
                {method.availability}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('contact.form.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('contact.form.description')}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-300"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-300"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-300"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  >
                    <option value="" className="text-gray-300">{t('contact.form.servicePlaceholder')}</option>
                    <option value="actifs-depreciees">{t('contact.form.serviceOptions.depreciated')}</option>
                    <option value="immobilier">{t('contact.form.serviceOptions.realEstate')}</option>
                    <option value="cession-entreprises">{t('contact.form.serviceOptions.businessTransfer')}</option>
                    <option value="conseil-pme">{t('contact.form.serviceOptions.consulting')}</option>
                    <option value="autre">{t('contact.form.serviceOptions.other')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-300"
                    placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-300"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <HiDocumentText size={16} />
                <span>{t('contact.form.confidential')}</span>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <HiMail size={20} />
                {t('contact.form.submit')}
              </button>
            </form>
          </div>

          {/* Contact Information & Business Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.info.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('contact.info.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mr-4 flex-shrink-0">
                    <HiLocationMarker className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.address')}</h4>
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('contact.info.addressValue') }} />
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mr-4 flex-shrink-0">
                    <HiPhone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.phone')}</h4>
                    <p className="text-gray-600">{t('contact.info.phoneValue')}</p>
                    <p className="text-sm text-gray-500">{t('contact.info.phoneNote')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mr-4 flex-shrink-0">
                    <HiMail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.email')}</h4>
                    <p className="text-gray-600">{t('contact.info.emailValue')}</p>
                    <p className="text-sm text-gray-500">{t('contact.info.emailNote')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mr-4 flex-shrink-0">
                    <HiClock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.hours')}</h4>
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('contact.info.hoursValue') }} />
                    <p className="text-sm text-gray-500 mt-1">{t('contact.info.hoursNote')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Credentials */}
            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <HiShieldCheck className="text-primary-600" size={24} />
                {t('contact.credentials.title')}
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{t('contact.credentials.items.1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{t('contact.credentials.items.2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{t('contact.credentials.items.3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{t('contact.credentials.items.4')}</span>
                </li>
              </ul>
            </div>

            {/* Interactive Map */}
            <div className="rounded-lg overflow-hidden shadow-lg border-2 border-primary-100">
              <div className="relative">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=6.1450%2C46.1950%2C6.1750%2C46.2100&layer=mapnik&marker=46.20222%2C6.1602"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  title="Carte de Genève - Route de Frontenex 46, 1207 Genève"
                  className="w-full"
                  allowFullScreen
                ></iframe>
                <div className="absolute top-4 right-4">
                  <a
                    href="https://www.openstreetmap.org/?mlat=46.20222&mlon=6.1602&zoom=16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-primary-50 text-primary-600 px-4 py-2 rounded-lg shadow-md font-semibold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <HiLocationMarker size={18} />
                    {t('contact.map.viewLarger') || 'View Larger Map'}
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 border-t border-primary-200">
                <div className="flex items-start gap-3">
                  <HiLocationMarker className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{t('contact.location.title')}</h4>
                    <p className="text-gray-700 text-base font-medium mb-1" dangerouslySetInnerHTML={{ __html: t('contact.location.address') }} />
                    <p className="text-gray-600 text-sm">
                      Route de Frontenex 46, 1207 Genève, Switzerland
                    </p>
                    <p className="text-gray-500 text-xs mt-3 italic">
                      {t('contact.location.note')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency Notice */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                <HiCurrencyDollar className="text-yellow-600" size={20} />
                {t('contact.urgency.title')}
              </h4>
              <p className="text-yellow-700 text-sm">
                {t('contact.urgency.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-primary-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            {t('contact.cta.title')}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {t('contact.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2">
              <HiPhone size={20} />
              022 789 00 60
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              omar@deiri.ch
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            {t('contact.cta.confidential')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact