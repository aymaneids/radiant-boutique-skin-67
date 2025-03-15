
import GalleryGrid from '@/components/GalleryGrid';

const Gallery = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container-boutique">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Our <span className="text-boutique">Gallery</span></h1>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of before and after transformations, 
            treatment photos, and the premium products we use for our services.
          </p>
        </div>
        
        {/* Gallery Grid Component */}
        <GalleryGrid />
        
        {/* Products Section */}
        <div className="mt-20">
          <h2 className="heading-md text-center mb-12">Premium Products We Use</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="glass-card p-6 hover-lift text-center">
              <div className="h-40 flex items-center justify-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1614859638024-2f71344fc782?q=80&w=1887" 
                  alt="Premium Skincare Product" 
                  className="h-full object-contain"
                />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Medical-Grade Serums</h3>
              <p className="text-gray-600">
                We use only the highest quality, medical-grade serums that deliver potent active ingredients deep into the skin.
              </p>
            </div>
            
            {/* Product 2 */}
            <div className="glass-card p-6 hover-lift text-center">
              <div className="h-40 flex items-center justify-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1619451683797-90fccc3b73d7?q=80&w=1887" 
                  alt="Professional Facial Masks" 
                  className="h-full object-contain"
                />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Professional Facial Masks</h3>
              <p className="text-gray-600">
                Our specialized masks are formulated to address specific skin concerns, from hydration to brightening and rejuvenation.
              </p>
            </div>
            
            {/* Product 3 */}
            <div className="glass-card p-6 hover-lift text-center">
              <div className="h-40 flex items-center justify-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1887" 
                  alt="Advanced Technology" 
                  className="h-full object-contain"
                />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">
                We utilize state-of-the-art equipment and technology to enhance treatments and deliver superior results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
