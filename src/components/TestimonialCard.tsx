
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, quote, rating, image }: TestimonialCardProps) => {
  return (
    <div className="glass-card p-6 shadow-boutique flex flex-col h-full">
      {/* Stars */}
      <div className="flex mb-4 text-boutique-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill={i < rating ? "#d4af37" : "none"}
            color={i < rating ? "#d4af37" : "#d4af37"}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="mb-6 flex-grow">
        <p className="text-gray-600 italic">&ldquo;{quote}&rdquo;</p>
      </blockquote>
      
      {/* Client */}
      <div className="flex items-center">
        {image && (
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {!image && (
          <div className="w-10 h-10 rounded-full bg-boutique-light flex items-center justify-center text-boutique mr-3">
            <span className="font-medium text-sm">{name.split(' ').map(n => n[0]).join('')}</span>
          </div>
        )}
        <div>
          <p className="font-medium text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">Client</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
