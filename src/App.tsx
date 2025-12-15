import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import CookieConsent from './components/CookieConsent'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'about' && <About />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'faq' && <FAQ setActiveSection={setActiveSection} />}
        {activeSection === 'privacy-policy' && <PrivacyPolicy setActiveSection={setActiveSection} />}
        {activeSection === 'terms-of-service' && <TermsOfService setActiveSection={setActiveSection} />}
        {activeSection === 'cookie-policy' && <CookiePolicy setActiveSection={setActiveSection} />}
      </main>
      <Footer setActiveSection={setActiveSection} />
      <CookieConsent setActiveSection={setActiveSection} />
    </div>
  )
}

export default App