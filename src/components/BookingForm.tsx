
import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  
  const services: Service[] = [
    { id: 'facial', name: 'Classic Facial', duration: '60 min', price: '$95' },
    { id: 'microdermabrasion', name: 'Microdermabrasion', duration: '45 min', price: '$120' },
    { id: 'microneedling', name: 'SkinPen Microneedling', duration: '75 min', price: '$250' },
    { id: 'browwax', name: 'Brow Waxing', duration: '30 min', price: '$35' },
    { id: 'chemicalpeel', name: 'Chemical Peel', duration: '45 min', price: '$150' },
  ];
  
  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', 
    '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.service || !formData.date || !formData.time || !formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    // In a real application, you would send this data to your backend
    console.log('Booking submitted:', formData);
    
    // Show success message
    toast.success('Your appointment has been requested!', {
      description: 'We will contact you shortly to confirm your booking.'
    });
    
    // Reset form
    setFormData({
      service: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      notes: '',
    });
  };
  
  return (
    <div className="glass-card p-8 shadow-boutique">
      <h3 className="heading-md text-center mb-6">Book Your Appointment</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Selection */}
          <div className="space-y-2">
            <label htmlFor="service" className="block text-gray-700 font-medium">
              Service <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full input-boutique pl-10 py-3 appearance-none"
                required
              >
                <option value="" disabled>Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} ({service.price})
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <User size={18} />
              </div>
            </div>
          </div>
          
          {/* Date Selection */}
          <div className="space-y-2">
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full input-boutique pl-10 py-3"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Calendar size={18} />
              </div>
            </div>
          </div>
          
          {/* Time Selection */}
          <div className="space-y-2">
            <label htmlFor="time" className="block text-gray-700 font-medium">
              Time <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full input-boutique pl-10 py-3 appearance-none"
                required
              >
                <option value="" disabled>Select a time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Clock size={18} />
              </div>
            </div>
          </div>
          
          {/* Full Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
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
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
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
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full input-boutique pl-10 py-3"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Phone size={18} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Notes */}
        <div className="space-y-2">
          <label htmlFor="notes" className="block text-gray-700 font-medium">
            Notes (Optional)
          </label>
          <div className="relative">
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special requests or information we should know"
              rows={4}
              className="w-full input-boutique pl-10 py-3"
            ></textarea>
            <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none text-gray-500">
              <MessageSquare size={18} />
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="boutique-button-primary w-full md:w-auto md:px-12"
          >
            Request Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
