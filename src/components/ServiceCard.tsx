
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  return (
    <div className="glass-card p-6 hover-lift group">
      <div className="w-14 h-14 rounded-full bg-boutique-light flex items-center justify-center mb-5 text-boutique group-hover:bg-boutique group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <h3 className="heading-sm mb-3 text-gray-800 group-hover:text-boutique transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <Link to={link} className="inline-flex items-center text-boutique font-medium hover:text-boutique-dark transition-colors">
        Learn More
        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
