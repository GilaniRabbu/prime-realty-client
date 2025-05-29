
import { Link } from 'react-router-dom';
import { Property } from '@/types/property';
import { Bed, House, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number, listingType: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
    
    return listingType === 'rent' ? `${formatted}/mo` : formatted;
  };

  return (
    <Link to={`/property/${property.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
              property.listingType === 'sale' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              For {property.listingType === 'sale' ? 'Sale' : 'Rent'}
            </span>
          </div>
          {property.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {property.title}
            </h3>
            <p className="text-xl font-bold text-blue-600">
              {formatPrice(property.price, property.listingType)}
            </p>
          </div>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <p className="text-sm">{property.address}, {property.city}, {property.state}</p>
          </div>

          <div className="flex items-center space-x-4 text-gray-600 mb-3">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.bedrooms} bed</span>
            </div>
            <div className="flex items-center">
              <House className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.bathrooms} bath</span>
            </div>
            <div className="text-sm">
              {property.squareFeet.toLocaleString()} sqft
            </div>
          </div>

          <p className="text-gray-700 text-sm line-clamp-2">
            {property.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
