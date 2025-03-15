
const Map = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-boutique h-full w-full min-h-[300px]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2247166687156!2d-87.6296188!3d41.8835308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca3085e35a3%3A0x5f12be92eb1840b7!2s111%20N%20Wabash%20Ave%2C%20Chicago%2C%20IL%2060602!5e0!3m2!1sen!2sus!4v1718458144860!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0, minHeight: '300px' }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Facial Boutique Location"
      ></iframe>
    </div>
  );
};

export default Map;
