
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container-boutique">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Contact <span className="text-boutique">Us</span></h1>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services or want to schedule an appointment?
            Get in touch with us today.
          </p>
        </div>
        
        {/* Contact Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="heading-sm mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="heading-sm mb-6">Our Information</h2>
            
            <div className="glass-card p-8 mb-8">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin size={24} className="text-boutique mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-gray-600">111 N Wabash Ave, Chicago, IL 60602</p>
                    <p className="text-gray-600">The Garland Building</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone size={24} className="text-boutique mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+13125551234" className="hover:text-boutique transition-colors">(312) 555-1234</a>
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail size={24} className="text-boutique mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@facialboutique.com" className="hover:text-boutique transition-colors">info@facialboutique.com</a>
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock size={24} className="text-boutique mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 10am - 8pm</p>
                    <p className="text-gray-600">Saturday: 10am - 6pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Special Promotion */}
            <div className="bg-boutique/10 p-6 rounded-lg border border-boutique/20">
              <h3 className="font-playfair text-lg font-semibold text-boutique mb-2">First-Time Client Special</h3>
              <p className="text-gray-600 mb-4">
                Mention this website when booking to receive 15% off your first facial treatment!
              </p>
              <a href="/book" className="boutique-button-primary">Book Now</a>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="h-[400px]">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
