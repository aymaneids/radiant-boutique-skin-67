
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - (scrollY * 0.002);
      const transform = `translateY(${scrollY * 0.4}px)`;
      
      if (heroRef.current) {
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
        heroRef.current.style.transform = transform;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/90"></div>
      </div>
      
      {/* Content */}
      <div ref={heroRef} className="relative h-full flex flex-col items-center justify-center text-center px-4 transition-all duration-200">
        <div className="animate-fade-in max-w-3xl">
          <div className="inline-block mx-auto mb-6 px-4 py-1 rounded-full bg-boutique-light text-boutique-dark text-sm font-medium">
            Expert Esthetician Care in Chicago Loop
          </div>
          
          <h1 className="heading-xl mb-6 text-gray-900">
            <span className="text-boutique">Facial</span> Boutique:
            <span className="block mt-2">Personalized Skincare</span>
          </h1>
          
          <p className="body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference of personalized, expert skincare treatments tailored to your unique needs. Transform your skin with our luxurious facial experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="boutique-button-primary w-full sm:w-auto">
              Book Your Appointment
            </Link>
            <Link to="/services" className="boutique-button-secondary w-full sm:w-auto">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-500 text-sm mb-2">Scroll to discover</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
