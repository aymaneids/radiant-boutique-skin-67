
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Map from '@/components/Map';
import { Flower, Droplets, Scissors, Award, Star, Clock, MapPin, Phone } from 'lucide-react';

const Index = () => {
  // Featured services
  const services = [
    {
      title: 'Facial Treatments',
      description: 'Customized facial treatments to address your specific skin concerns and enhance your natural beauty.',
      icon: Flower,
      link: '/services'
    },
    {
      title: 'Microdermabrasion',
      description: 'Exfoliate and rejuvenate your skin with our professional microdermabrasion treatments.',
      icon: Droplets,
      link: '/services'
    },
    {
      title: 'Brow Waxing',
      description: 'Shape and define your eyebrows with our precise and gentle waxing techniques.',
      icon: Scissors,
      link: '/services'
    },
    {
      title: 'SkinPen Microneedling',
      description: 'Advanced microneedling treatments to improve skin texture, reduce scars, and promote collagen production.',
      icon: Award,
      link: '/services'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      quote: 'Vlada is absolutely amazing! She takes the time to understand your skin concerns and provides personalized treatments that really work. My skin has never looked better!',
      rating: 5
    },
    {
      name: 'Michael Davis',
      quote: 'I was nervous about my first facial, but Vlada made me feel comfortable and explained everything throughout the process. The results were incredible!',
      rating: 5
    },
    {
      name: 'Jennifer Smith',
      quote: 'The microdermabrasion treatment completely transformed my skin. The boutique has such a relaxing atmosphere, and Vlada is truly an expert in her field.',
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-boutique">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="animate-fade-in">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-boutique-light text-boutique-dark text-sm font-medium">
                  About Facial Boutique
                </div>
                <h2 className="heading-lg mb-4">Experience Expert Skincare in Chicago Loop</h2>
                <p className="body-md text-gray-600 mb-6">
                  At Facial Boutique, we believe that beautiful skin begins with personalized care. Our founder, Vlada Kutseyko, is a highly skilled esthetician with years of experience in advanced skincare treatments.
                </p>
                <p className="body-md text-gray-600 mb-8">
                  We take a holistic approach to skincare, focusing on your unique needs and goals. Every treatment is customized to address your specific concerns and deliver visible results.
                </p>
                <Link to="/about" className="boutique-button-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-boutique animate-fade-in">
                  <img 
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000"
                    alt="Esthetician performing facial treatment"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 hidden md:block">
                  <div className="glass-card p-4 shadow-boutique animate-fade-in-delay">
                    <div className="flex items-center space-x-2 text-boutique">
                      <Star fill="#9b87f5" />
                      <span className="font-semibold">4.9</span>
                      <span className="text-gray-500 text-sm">(120+ Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-boutique-gray">
        <div className="container-boutique">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-boutique-light text-boutique-dark text-sm font-medium">
              Our Services
            </div>
            <h2 className="heading-lg mb-4">Featured Treatments</h2>
            <p className="body-md text-gray-600">
              We offer a range of premium skincare treatments designed to address your specific needs and enhance your natural beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="boutique-button-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Promo Section */}
      <section className="py-20 bg-gradient-boutique relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern-dots" style={{ backgroundSize: '20px 20px', backgroundImage: 'radial-gradient(#FFF 2px, transparent 0)' }}></div>
        </div>
        <div className="container-boutique relative">
          <div className="glass-card py-12 px-8 text-center max-w-3xl mx-auto">
            <h2 className="heading-md mb-4 text-boutique-dark">Special Offer for New Clients</h2>
            <p className="body-md text-gray-600 mb-6">
              Book your first treatment and receive a complimentary skin analysis and personalized skincare routine ($50 value).
            </p>
            <Link to="/book" className="boutique-button-primary">
              Book Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-boutique">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-boutique-light text-boutique-dark text-sm font-medium">
              Client Testimonials
            </div>
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="body-md text-gray-600">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experiences at Facial Boutique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="section-padding bg-boutique-gray">
        <div className="container-boutique">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="animate-fade-in-left">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-boutique-light text-boutique-dark text-sm font-medium">
                  Visit Us
                </div>
                <h2 className="heading-lg mb-6">Our Location</h2>
                <p className="body-md text-gray-600 mb-8">
                  Facial Boutique is conveniently located in the heart of Chicago Loop, in The Garland Building. We look forward to welcoming you to our tranquil space.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <MapPin className="text-boutique mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">111 N Wabash Ave, Chicago, IL 60602</p>
                      <p className="text-gray-600">The Garland Building</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-boutique mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-gray-600">Monday - Friday: 10am - 8pm</p>
                      <p className="text-gray-600">Saturday: 10am - 6pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-boutique mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Contact</p>
                      <p className="text-gray-600">(312) 555-1234</p>
                      <p className="text-gray-600">info@facialboutique.com</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/contact" className="boutique-button-primary">
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <Map />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-boutique">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">Ready to Experience the Difference?</h2>
            <p className="body-md text-gray-600 mb-8">
              Book your appointment today and take the first step towards healthier, more radiant skin.
            </p>
            <Link to="/book" className="boutique-button-primary mx-2">
              Book Your Appointment
            </Link>
            <Link to="/contact" className="boutique-button-secondary mx-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
