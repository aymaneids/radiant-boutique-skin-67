
import { useState } from 'react';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    // In a real application, you would send this data to your backend
    console.log('Contact form submitted:', formData);
    
    // Show success message
    toast.success('Message sent successfully!', {
      description: 'We will get back to you as soon as possible.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };
  
  return (
    <div className="glass-card p-8 shadow-boutique h-full">
      <h3 className="heading-md mb-6">Get In Touch</h3>
      <p className="text-gray-600 mb-6">
        Have questions or want to learn more about our services? Send us a message and we'll get back to you as soon as possible.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="contact-name" className="block text-gray-700 font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full input-boutique pl-10 py-3"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <User size={18} />
            </div>
          </div>
        </div>
        
        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="contact-email" className="block text-gray-700 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full input-boutique pl-10 py-3"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <Mail size={18} />
            </div>
          </div>
        </div>
        
        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="contact-phone" className="block text-gray-700 font-medium">
            Phone
          </label>
          <div className="relative">
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number (optional)"
              className="w-full input-boutique pl-10 py-3"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <Phone size={18} />
            </div>
          </div>
        </div>
        
        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="contact-message" className="block text-gray-700 font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={5}
              className="w-full input-boutique pl-10 py-3"
              required
            ></textarea>
            <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none text-gray-500">
              <MessageSquare size={18} />
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="boutique-button-primary w-full md:w-auto md:px-12"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
