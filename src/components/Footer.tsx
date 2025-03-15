
import { NavLink } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-boutique-light pt-16 pb-8">
      <div className="container-boutique">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-2xl">
              <span className="text-boutique">Facial</span> Boutique
            </h3>
            <p className="text-gray-600">
              Personalized skincare treatments in Chicago Loop with expert esthetician Vlada Kutseyko.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-boutique shadow-sm hover:shadow-md transition-all hover:bg-boutique hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-600 hover:text-boutique transition-colors">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-600 hover:text-boutique transition-colors">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-600 hover:text-boutique transition-colors">Services</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="text-gray-600 hover:text-boutique transition-colors">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/book" className="text-gray-600 hover:text-boutique transition-colors">Book Now</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-600 hover:text-boutique transition-colors">Contact</NavLink>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-boutique mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">111 N Wabash Ave, Chicago, IL 60602, The Garland Building</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-boutique mr-2 flex-shrink-0" />
                <a href="tel:+13125551234" className="text-gray-600 hover:text-boutique transition-colors">(312) 555-1234</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-boutique mr-2 flex-shrink-0" />
                <a href="mailto:info@facialboutique.com" className="text-gray-600 hover:text-boutique transition-colors">info@facialboutique.com</a>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg">Working Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={18} className="text-boutique mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">Monday - Friday: 10am - 8pm</p>
                  <p className="text-gray-600">Saturday: 10am - 6pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Facial Boutique. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-boutique transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-boutique transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
