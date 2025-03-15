
import { Briefcase, Award, Sparkles, Droplets, Scissors, Zap } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container-boutique">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Our <span className="text-boutique">Services</span></h1>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Experience personalized skincare treatments tailored to your unique needs. 
            Our services are designed to help you achieve and maintain healthy, radiant skin.
          </p>
        </div>

        {/* Service Categories */}
        <Tabs defaultValue="facials" className="w-full mb-16">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-8">
            <TabsTrigger value="facials" className="data-[state=active]:bg-boutique data-[state=active]:text-white">Facials</TabsTrigger>
            <TabsTrigger value="treatments" className="data-[state=active]:bg-boutique data-[state=active]:text-white">Treatments</TabsTrigger>
            <TabsTrigger value="waxing" className="data-[state=active]:bg-boutique data-[state=active]:text-white">Waxing</TabsTrigger>
          </TabsList>

          {/* Facials Tab */}
          <TabsContent value="facials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Signature Facial"
                description="Our customized facial addresses your unique skin concerns, including deep cleansing, exfoliation, and a specialized mask."
                icon={Sparkles}
                link="/book"
              />
              <ServiceCard 
                title="Anti-Aging Facial"
                description="Designed to reduce fine lines and wrinkles, this facial includes potent antioxidants and collagen-boosting ingredients."
                icon={Award}
                link="/book"
              />
              <ServiceCard 
                title="Hydrating Facial"
                description="Perfect for dry or dehydrated skin, this treatment restores moisture balance with hyaluronic acid and nutrient-rich serums."
                icon={Droplets}
                link="/book"
              />
            </div>
          </TabsContent>

          {/* Treatments Tab */}
          <TabsContent value="treatments">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Microdermabrasion"
                description="This exfoliating treatment removes dead skin cells and stimulates new cell growth for a brighter, smoother complexion."
                icon={Zap}
                link="/book"
              />
              <ServiceCard 
                title="SkinPen Microneedling"
                description="A minimally invasive procedure that creates controlled micro-injuries to stimulate the body's natural wound healing process."
                icon={Briefcase}
                link="/book"
              />
              <ServiceCard 
                title="Chemical Peels"
                description="Applied to improve skin texture and tone, chemical peels help with acne, fine lines, and uneven pigmentation."
                icon={Sparkles}
                link="/book"
              />
            </div>
          </TabsContent>

          {/* Waxing Tab */}
          <TabsContent value="waxing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Brow Waxing & Shaping"
                description="Expert brow shaping to frame your face and enhance your natural features."
                icon={Scissors}
                link="/book"
              />
              <ServiceCard 
                title="Facial Waxing"
                description="Gentle waxing services for lip, chin, and other facial areas."
                icon={Scissors}
                link="/book"
              />
              <ServiceCard 
                title="Full Body Waxing"
                description="Comprehensive waxing services for legs, arms, underarms, and other body areas."
                icon={Scissors}
                link="/book"
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Pricing Section */}
        <div className="bg-boutique-gray p-8 rounded-lg">
          <h2 className="heading-md mb-8 text-center">Service Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Facials Pricing */}
            <div>
              <h3 className="font-playfair text-xl font-semibold text-boutique mb-4">Facials</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Signature Facial (60 min)</span>
                  <span className="text-boutique font-semibold">$95</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Anti-Aging Facial (75 min)</span>
                  <span className="text-boutique font-semibold">$125</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Hydrating Facial (60 min)</span>
                  <span className="text-boutique font-semibold">$95</span>
                </li>
              </ul>
            </div>
            
            {/* Treatments Pricing */}
            <div>
              <h3 className="font-playfair text-xl font-semibold text-boutique mb-4">Treatments & Waxing</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Microdermabrasion</span>
                  <span className="text-boutique font-semibold">$120</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">SkinPen Microneedling</span>
                  <span className="text-boutique font-semibold">$250</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Brow Waxing & Shaping</span>
                  <span className="text-boutique font-semibold">$25</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 italic mb-4">*Prices may vary based on specific needs and treatment duration</p>
            <a href="/book" className="boutique-button-primary">Book Your Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
