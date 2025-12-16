import { useState, useEffect } from 'react';
import servicesBuilding from '../assets/images/services-building.png';
import contactCityscape from '../assets/images/contact-cityscape.png';

// Floating Buildings Widget
const FloatingBuildingsWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-16 right-4 md:bottom-20 md:right-8 z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="relative group cursor-pointer">
        {/* Floating animation container */}
        <div className="animate-float-slow">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-3 md:p-4 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-105">
            {/* Building image */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden mb-3 shadow-lg">
              <img
                src={servicesBuilding}
                alt="Modern buildings"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Widget content */}
            <div className="text-center">
              <div className="text-xs font-semibold text-gray-700 mb-1">Premium Properties</div>
              <div className="text-xs text-gray-500">Available Now</div>
            </div>

            {/* Subtle pulse effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary-500/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-50 animation-delay-1000"></div>
      </div>
    </div>
  );
};

// Floating Lake Widget
const FloatingLakeWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-16 left-4 md:bottom-20 md:left-8 z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="relative group cursor-pointer">
        {/* Floating animation container */}
        <div className="animate-float-reverse">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-3 md:p-4 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-105">
            {/* Lake/cityscape image */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden mb-3 shadow-lg">
              <img
                src={contactCityscape}
                alt="Lake Geneva cityscape"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Widget content */}
            <div className="text-center">
              <div className="text-xs font-semibold text-gray-700 mb-1">Lake Geneva Views</div>
              <div className="text-xs text-gray-500">Stunning Locations</div>
            </div>

            {/* Subtle pulse effect */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-50"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary-500 rounded-full animate-ping opacity-75 animation-delay-1500"></div>
      </div>
    </div>
  );
};

// Human Touch Enhancement - Dynamic Background Elements
const DynamicBackground = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create floating particles for a more human feel
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    // Track mouse movement for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-random"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Interactive gradient orbs that follow mouse subtly */}
      <div
        className="absolute w-40 h-40 bg-primary-500/8 rounded-full blur-2xl animate-pulse transition-all duration-1000"
        style={{
          left: `${(mousePosition.x / window.innerWidth) * 100}%`,
          top: `${(mousePosition.y / window.innerHeight) * 100}%`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/6 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-green-500/5 rounded-full blur-lg animate-pulse animation-delay-1000"></div>

      {/* Subtle geometric patterns */}
      <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-white/20 rotate-45 animate-pulse animation-delay-3000"></div>
      <div className="absolute bottom-1/6 left-1/6 w-1.5 h-1.5 bg-primary-400/30 rounded-full animate-ping animation-delay-4000"></div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-page relative">
      {/* Dynamic background elements for human feel */}
      <DynamicBackground />

      {/* Floating widgets */}
      <FloatingBuildingsWidget />
      <FloatingLakeWidget />

      {/* Main content area - can be expanded with more sections */}
      <section className="relative z-10">
        {/* Add welcome message or other content here */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center text-white/80">
            <h1 className="text-2xl font-light mb-2">Welcome to Deiri Immobilier</h1>
            <p className="text-sm opacity-75">Your trusted real estate partner in Geneva</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
