
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Book Now', path: '/book' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-boutique">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="z-10">
            <h1 className="font-playfair font-bold text-2xl md:text-3xl">
              <span className="text-boutique">Facial</span> Boutique
            </h1>
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-10 text-gray-700 hover:text-boutique transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Mobile Navigation */}
          {isMobile && (
            <div 
              className={`fixed inset-0 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              style={{
                pointerEvents: isOpen ? 'auto' : 'none',
              }}
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-md shadow-lg z-0"></div>
              
              {/* Navigation links */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-8 py-20 w-full">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => 
                      `text-xl ${isActive ? 'text-boutique font-medium' : 'text-gray-700 hover:text-boutique'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
          
          {/* Desktop Mobile Navigation Fallback (when useIsMobile hook hasn't initialized yet) */}
          {!isMobile && (
            <div className={`fixed inset-0 md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              {/* Background overlay */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-md shadow-lg z-0"></div>
              
              {/* Navigation links */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-8 py-20 w-full">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => 
                      `text-xl ${isActive ? 'text-boutique font-medium' : 'text-gray-700 hover:text-boutique'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
