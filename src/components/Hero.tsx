import { useState, useEffect } from 'react'
import { HiArrowRight, HiPhone, HiMail, HiLocationMarker, HiCheckCircle, HiAcademicCap, HiShieldCheck, HiHeart, HiSparkles, HiClock } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/images/hero-geneva.png'
import aboutImage from '../assets/images/about-portrait.png'

interface HeroProps {
  setActiveSection?: (section: string) => void
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setIsVisible(true)
    // Update time every minute for live feel
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  // Check if business is currently open (9 AM - 6 PM Geneva time)
  const isBusinessHours = () => {
    const genevaTime = new Date(currentTime.toLocaleString("en-US", {timeZone: "Europe/Zurich"}))
    const hour = genevaTime.getHours()
    return hour >= 9 && hour < 18
  }

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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Warm Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Geneva cityscape"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Warm gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-100/60 via-amber-50/40 to-yellow-50/60"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className={`text-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Warm Welcome Message */}
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-orange-200/50 shadow-lg transition-all duration-700 delay-100 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <HiHeart className="text-orange-600 animate-pulse" size={18} />
              <span className="text-orange-800 font-medium text-sm">Welcome to your trusted Geneva real estate partner</span>
              <div className={`flex items-center gap-1 ml-2 ${isBusinessHours() ? 'text-green-600' : 'text-gray-500'}`}>
                <div className={`w-2 h-2 rounded-full ${isBusinessHours() ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-xs font-medium">{isBusinessHours() ? 'Online now' : 'Available soon'}</span>
              </div>
            </div>

            {/* Personal Photo */}
            <div className={`mb-8 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative inline-block">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={aboutImage}
                    alt="Omar Deiri - Your Geneva Real Estate Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2 shadow-lg">
                  <HiSparkles size={16} />
                </div>
              </div>
            </div>

            {/* Warm Personal Title */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-orange-800 via-amber-700 to-yellow-800 bg-clip-text text-transparent transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {t('hero.title')}
            </h1>

            {/* Warm Subtitle */}
            <p className={`text-xl md:text-2xl lg:text-3xl text-orange-900 mb-6 max-w-4xl mx-auto font-semibold transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {t('hero.subtitle')}
            </p>

            {/* Personal Touch Description */}
            <p className={`text-base md:text-lg text-orange-800 mb-10 max-w-2xl mx-auto leading-relaxed transition-opacity duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <span className="font-medium">Hi there!</span> I'm Omar, and I've been helping families and investors find their perfect Geneva properties for over 15 years. Let's make your real estate dreams a reality together.
            </p>

            {/* Warm CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <button
                onClick={handleScrollToServices}
                className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('hero.discoverServices')}
                <HiArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={handleScrollToContact}
                className="group bg-white/90 hover:bg-white text-orange-800 hover:text-orange-900 px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-orange-200"
              >
                <HiPhone className="inline mr-2" size={16} />
                {t('hero.contactUs')}
              </button>
            </div>

            {/* Current Time & Availability */}
            <div className={`inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-16 shadow-lg border border-orange-200 transition-all duration-700 delay-550 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <HiClock className="text-orange-600" size={18} />
              <span className="text-orange-800 font-medium">
                Geneva: {currentTime.toLocaleTimeString('en-US', {
                  timeZone: 'Europe/Zurich',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false
                })}
              </span>
              <div className={`flex items-center gap-2 ${isBusinessHours() ? 'text-green-600' : 'text-orange-600'}`}>
                <div className={`w-2 h-2 rounded-full ${isBusinessHours() ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`}></div>
                <span className="text-sm font-medium">
                  {isBusinessHours() ? 'Open for business' : 'Available by appointment'}
                </span>
              </div>
            </div>

            {/* Warm Statistics Section */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16 transition-opacity duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 backdrop-blur-sm p-6 rounded-2xl border border-orange-200/50 hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1.5">15+</div>
                <div className="text-sm text-orange-700 font-medium">Years Experience</div>
                <div className="text-xs text-orange-600 mt-1">🏆 Trusted expert</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 backdrop-blur-sm p-6 rounded-2xl border border-green-200/50 hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1.5">100%</div>
                <div className="text-sm text-green-700 font-medium">Confidential</div>
                <div className="text-xs text-green-600 mt-1">🔒 Your privacy matters</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 backdrop-blur-sm p-6 rounded-2xl border border-blue-200/50 hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1.5">24h</div>
                <div className="text-sm text-blue-700 font-medium">Response Time</div>
                <div className="text-xs text-blue-600 mt-1">⚡ Always responsive</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 backdrop-blur-sm p-6 rounded-2xl border border-purple-200/50 hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-1.5">Direct</div>
                <div className="text-sm text-purple-700 font-medium">Contact</div>
                <div className="text-xs text-purple-600 mt-1">📞 No middlemen</div>
              </div>
            </div>

            {/* Warm Contact Info Cards */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-opacity duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="group bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border border-orange-200/50">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <HiPhone className="text-orange-600" size={24} />
                </div>
                <h3 className="font-semibold text-orange-900 mb-2 text-base">📞 Call me anytime</h3>
                <a href="tel:+41227890060" className="text-orange-800 font-medium hover:text-orange-600 transition-colors text-sm block">
                  022 789 00 60
                </a>
                <p className="text-orange-700 text-xs mt-1">Available 24/7 for urgent matters</p>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border border-green-200/50">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <HiMail className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-green-900 mb-2 text-base">💌 Drop me a message</h3>
                <a href="mailto:omar@deiri.ch" className="text-green-800 font-medium hover:text-green-600 transition-colors break-all text-sm block">
                  omar@deiri.ch
                </a>
                <p className="text-green-700 text-xs mt-1">Usually responds within 2 hours</p>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border border-blue-200/50">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <HiLocationMarker className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2 text-base">🏠 Visit my office</h3>
                <p className="text-blue-800 font-medium text-sm mb-2" dangerouslySetInnerHTML={{ __html: t('hero.addressValue') }} />
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-blue-700 text-xs bg-blue-100 px-2 py-1 rounded-full">
                    🚗 Free parking
                  </span>
                  <span className="inline-flex items-center gap-1 text-blue-700 text-xs bg-blue-100 px-2 py-1 rounded-full">
                    🚌 Bus stop nearby
                  </span>
                </div>

                {/* Interactive Map */}
                <div className="relative w-full h-32 rounded-lg overflow-hidden border border-blue-200/50 shadow-sm">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=6.1400%2C46.2000%2C6.1500%2C46.2100&layer=mapnik&marker=46.2048%2C6.1448"
                    width="100%"
                    height="128"
                    style={{ border: 0 }}
                    title="Omar Deiri Office Location - Route de Frontenex 46, Geneva"
                    className="rounded-lg"
                    loading="lazy"
                  ></iframe>
                  {/* Custom marker overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="relative">
                      <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-4 border-l-transparent border-r-transparent border-t-red-500"></div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 mt-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Route+de+Frontenex+46,+1207+Geneva,+Switzerland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 text-xs font-medium bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <HiLocationMarker size={12} />
                    Directions
                  </a>
                  <a
                    href="https://www.openstreetmap.org/?mlat=46.2048&mlon=6.1448&zoom=16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 text-xs font-medium bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors"
                  >
                    🗺️ Larger map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warm Trust & Stories Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-800 to-amber-800 bg-clip-text text-transparent mb-3">
              Why families choose me
            </h2>
            <p className="text-orange-700 max-w-2xl mx-auto font-medium">
              It's not just about properties—it's about finding your perfect home and trusted partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-orange-200/50 shadow-lg">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-200 to-amber-200 rounded-2xl flex items-center justify-center shadow-md">
                  <HiShieldCheck className="text-orange-700" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Official Recognition</h3>
              <p className="text-orange-800 text-sm leading-relaxed mb-4">
                Authorized by the Geneva State Council with official certification. Your security and rights are my top priority.
              </p>
              <div className="text-xs text-orange-700 font-medium">✓ Licensed & insured</div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-200/50 shadow-lg">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-r from-green-200 to-emerald-200 rounded-2xl flex items-center justify-center shadow-md">
                  <HiAcademicCap className="text-green-700" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">University Educated</h3>
              <p className="text-green-800 text-sm leading-relaxed mb-4">
                Business degree from University of Geneva, specialized in real estate law and international markets.
              </p>
              <div className="text-xs text-green-700 font-medium">🎓 MBA in Real Estate</div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200/50 shadow-lg">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl flex items-center justify-center shadow-md">
                  <HiCheckCircle className="text-blue-700" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">15+ Years Experience</h3>
              <p className="text-blue-800 text-sm leading-relaxed mb-4">
                Helped over 500 families find their dream homes. Every client becomes a long-term friend and referral source.
              </p>
              <div className="text-xs text-blue-700 font-medium">⭐ 500+ happy families</div>
            </div>
          </div>

          {/* Quick Testimonials */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-orange-200/50">
              <div className="text-center">
                <div className="text-2xl mb-1">⭐⭐⭐⭐⭐</div>
                <p className="text-sm text-orange-800 font-medium">"Omar made our dream come true!"</p>
                <p className="text-xs text-orange-600">- Marie & Jean-Pierre L.</p>
              </div>
              <div className="w-px h-12 bg-orange-200"></div>
              <div className="text-center">
                <div className="text-2xl mb-1">⭐⭐⭐⭐⭐</div>
                <p className="text-sm text-orange-800 font-medium">"Professional and caring"</p>
                <p className="text-xs text-orange-600">- Ahmed Family</p>
              </div>
              <div className="w-px h-12 bg-orange-200"></div>
              <div className="text-center">
                <div className="text-2xl mb-1">⭐⭐⭐⭐⭐</div>
                <p className="text-sm text-orange-800 font-medium">"Our trusted advisor"</p>
                <p className="text-xs text-orange-600">- Dr. Müller</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

