import { useState } from 'react'
import { HiQuestionMarkCircle, HiChevronDown, HiChevronUp, HiHome, HiBriefcase, HiCurrencyDollar, HiShieldCheck, HiPhone, HiMail } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

interface FAQItem {
  question: string
  answer: string
  category: string
}

interface FAQProps {
  setActiveSection?: (section: string) => void
}

const FAQ = ({ setActiveSection }: FAQProps) => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const handleLinkClick = (section: string) => {
    if (setActiveSection) {
      setActiveSection(section)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const faqs: FAQItem[] = [
    {
      category: 'services',
      question: t('faq.questions.services1.q'),
      answer: t('faq.questions.services1.a')
    },
    {
      category: 'services',
      question: t('faq.questions.services2.q'),
      answer: t('faq.questions.services2.a')
    },
    {
      category: 'services',
      question: t('faq.questions.services3.q'),
      answer: t('faq.questions.services3.a')
    },
    {
      category: 'services',
      question: t('faq.questions.services4.q'),
      answer: t('faq.questions.services4.a')
    },
    {
      category: 'process',
      question: t('faq.questions.process1.q'),
      answer: t('faq.questions.process1.a')
    },
    {
      category: 'process',
      question: t('faq.questions.process2.q'),
      answer: t('faq.questions.process2.a')
    },
    {
      category: 'process',
      question: t('faq.questions.process3.q'),
      answer: t('faq.questions.process3.a')
    },
    {
      category: 'legal',
      question: t('faq.questions.legal1.q'),
      answer: t('faq.questions.legal1.a')
    },
    {
      category: 'legal',
      question: t('faq.questions.legal2.q'),
      answer: t('faq.questions.legal2.a')
    },
    {
      category: 'legal',
      question: t('faq.questions.legal3.q'),
      answer: t('faq.questions.legal3.a')
    },
    {
      category: 'geographic',
      question: t('faq.questions.geographic1.q'),
      answer: t('faq.questions.geographic1.a')
    },
    {
      category: 'geographic',
      question: t('faq.questions.geographic2.q'),
      answer: t('faq.questions.geographic2.a')
    },
    {
      category: 'urgency',
      question: t('faq.questions.urgency1.q'),
      answer: t('faq.questions.urgency1.a')
    },
    {
      category: 'experience',
      question: t('faq.questions.experience1.q'),
      answer: t('faq.questions.experience1.a')
    },
    {
      category: 'contact',
      question: t('faq.questions.contact1.q'),
      answer: t('faq.questions.contact1.a')
    },
    {
      category: 'contact',
      question: t('faq.questions.contact2.q'),
      answer: t('faq.questions.contact2.a')
    }
  ]

  const categories = [
    { id: 'all', label: t('faq.categories.all'), icon: HiQuestionMarkCircle },
    { id: 'services', label: t('faq.categories.services'), icon: HiBriefcase },
    { id: 'process', label: t('faq.categories.process'), icon: HiHome },
    { id: 'legal', label: t('faq.categories.legal'), icon: HiShieldCheck },
    { id: 'geographic', label: t('faq.categories.geographic'), icon: HiHome },
    { id: 'urgency', label: t('faq.categories.urgency'), icon: HiCurrencyDollar },
    { id: 'experience', label: t('faq.categories.experience'), icon: HiBriefcase },
    { id: 'contact', label: t('faq.categories.contact'), icon: HiPhone }
  ]

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HiQuestionMarkCircle className="text-primary-600" size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setOpenIndex(null)
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <Icon size={20} />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-200 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <HiChevronUp className="text-primary-600 flex-shrink-0" size={24} />
                  ) : (
                    <HiChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-primary-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            {t('faq.cta.title')}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {t('faq.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <HiPhone size={20} />
              022 789 00 60
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <HiMail size={20} />
              omar@deiri.ch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

