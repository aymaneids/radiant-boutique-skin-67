
import { Link } from 'react-router-dom';
import { Award, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Personalized Approach",
      description: "We believe that no two skin types are the same. Every treatment is customized to your unique skin needs and goals."
    },
    {
      title: "Expert Knowledge",
      description: "Our founder Vlada continuously updates her skills with the latest techniques and technologies in skincare."
    },
    {
      title: "Quality Products",
      description: "We only use and recommend professional-grade skincare products that deliver real results."
    },
    {
      title: "Holistic Perspective",
      description: "We consider lifestyle, diet, and skincare routines to provide comprehensive skin health solutions."
    }
  ];

  const certifications = [
    "Licensed Esthetician - State of Illinois",
    "Advanced Chemical Peel Specialist",
    "SkinPen Microneedling Certified",
    "Advanced Facial Techniques",
    "Brow Artistry Certificate"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-boutique-light overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10" style={{ backgroundSize: '20px 20px', backgroundImage: 'radial-gradient(#9b87f5 2px, transparent 0)' }}></div>
        <div className="container-boutique relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 text-gray-900">About <span className="text-boutique">Facial Boutique</span></h1>
            <p className="body-lg text-gray-600 mb-8">
              Discover the story behind Chicago's premier skincare destination and meet our expert esthetician, Vlada Kutseyko.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Vlada Section */}
      <section className="section-padding bg-white">
        <div className="container-boutique">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-boutique-lg animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000"
                  alt="Vlada Kutseyko, Esthetician"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-20 hidden md:block">
                <div className="glass-card p-4 shadow-boutique animate-fade-in-delay">
                  <div className="flex items-center space-x-1 text-boutique">
                    <Star fill="#9b87f5" size={18} />
                    <Star fill="#9b87f5" size={18} />
                    <Star fill="#9b87f5" size={18} />
                    <Star fill="#9b87f5" size={18} />
                    <Star fill="#9b87f5" size={18} />
                  </div>
                  <p className="text-sm font-medium mt-1">10+ Years Experience</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-boutique opacity-10 transform -translate-x-8 -translate-y-8 rounded-lg z-0"></div>
            </div>
            
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-boutique-light text-boutique-dark text-sm font-medium">
                Meet Your Esthetician
              </div>
              <h2 className="heading-lg mb-4">Vlada Kutseyko</h2>
              <p className="body-md text-gray-600 mb-4">
                With over a decade of experience in the skincare industry, Vlada Kutseyko brings her passion and expertise to every treatment at Facial Boutique.
              </p>
              <p className="body-md text-gray-600 mb-4">
                After completing her esthetician training, Vlada continued to advance her skills through specialized education and certifications in advanced skincare techniques. Her approach combines scientific knowledge with a natural touch, ensuring that each client receives personalized care that addresses their unique skin concerns.
              </p>
              <p className="body-md text-gray-600 mb-6">
                Vlada founded Facial Boutique with a mission to provide exceptional skincare services in a relaxing, boutique environment. She believes that beautiful skin is a reflection of overall well-being and is committed to helping her clients achieve their best skin possible.
              </p>
              
              <div className="mt-8">
                <h3 className="heading-sm mb-4">Certifications & Training</h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={18} className="text-boutique mr-2 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section-padding bg-boutique-gray">
        <div className="container-boutique">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-boutique-light text-boutique-dark text-sm font-medium">
                Our Story
              </div>
              <h2 className="heading-lg mb-4">The Facial Boutique Journey</h2>
              <p className="body-md text-gray-600 mb-4">
                Facial Boutique was born from a vision to create a skincare destination that offers more than just treatments – a place where clients can experience personalized care that transforms not just their skin, but how they feel about themselves.
              </p>
              <p className="body-md text-gray-600 mb-4">
                After years of working in high-end spas and skincare clinics, Vlada noticed that many clients were not receiving the personalized attention they deserved. She dreamed of creating a space where each client's unique skin concerns would be addressed with customized treatments and ongoing care.
              </p>
              <p className="body-md text-gray-600 mb-4">
                In 2018, that dream became reality when Facial Boutique opened its doors in Chicago's vibrant Loop district. Since then, we've helped hundreds of clients achieve healthier, more radiant skin through our expert treatments and guidance.
              </p>
              <p className="body-md text-gray-600">
                Today, Facial Boutique continues to grow, but our commitment to personalized care remains unchanged. We're proud to be a trusted skincare destination for clients throughout Chicago and beyond.
              </p>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-boutique">
                  <img 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000"
                    alt="Facial Boutique interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-boutique mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1629019725235-d6cd888b76c9?q=80&w=1000"
                    alt="Skincare products"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-boutique">
                  <img 
                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000"
                    alt="Facial treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-boutique mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1000"
                    alt="Skincare consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="section-padding bg-white">
        <div className="container-boutique">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-boutique-light text-boutique-dark text-sm font-medium">
              Our Philosophy
            </div>
            <h2 className="heading-lg mb-4">Our Values & Approach</h2>
            <p className="body-md text-gray-600">
              At Facial Boutique, our approach to skincare is guided by these core values that inform everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 shadow-boutique animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full bg-boutique-light flex items-center justify-center mb-4 text-boutique">
                  <Award size={24} />
                </div>
                <h3 className="heading-sm mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-boutique relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern-dots" style={{ backgroundSize: '20px 20px', backgroundImage: 'radial-gradient(#FFF 2px, transparent 0)' }}></div>
        </div>
        <div className="container-boutique relative">
          <div className="glass-card py-12 px-8 text-center max-w-3xl mx-auto">
            <h2 className="heading-md mb-4 text-boutique-dark">Experience the Facial Boutique Difference</h2>
            <p className="body-md text-gray-600 mb-6">
              Book your appointment today and discover personalized skincare that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book" className="boutique-button-primary w-full sm:w-auto">
                Book Your Appointment
              </Link>
              <Link to="/services" className="boutique-button-secondary w-full sm:w-auto">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
