
import BookingForm from '@/components/BookingForm';

const Book = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container-boutique">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Book Your <span className="text-boutique">Appointment</span></h1>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your personalized skincare treatment with Vlada Kutseyko, 
            our expert esthetician. Fill out the form below to book your appointment.
          </p>
        </div>
        
        {/* Booking Form */}
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-boutique-light rounded-lg">
            <h3 className="font-playfair text-lg font-semibold mb-2">Cancellation Policy</h3>
            <p className="text-gray-600">
              We require 24-hour notice for cancellations. Late cancellations may incur a fee.
            </p>
          </div>
          
          <div className="p-6 bg-boutique-light rounded-lg">
            <h3 className="font-playfair text-lg font-semibold mb-2">Arrival Time</h3>
            <p className="text-gray-600">
              Please arrive 10-15 minutes before your appointment to complete any necessary paperwork.
            </p>
          </div>
          
          <div className="p-6 bg-boutique-light rounded-lg">
            <h3 className="font-playfair text-lg font-semibold mb-2">Special Requests</h3>
            <p className="text-gray-600">
              Have special requirements? Please note them in the form or contact us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
