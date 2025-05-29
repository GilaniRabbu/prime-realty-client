
export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: 'house' | 'apartment' | 'condo' | 'townhouse';
  listingType: 'sale' | 'rent';
  description: string;
  images: string[];
  amenities: string[];
  yearBuilt: number;
  lotSize?: number;
  agent: {
    name: string;
    email: string;
    phone: string;
    image?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
}

export interface PropertyFilters {
  priceMin?: number;
  priceMax?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
  listingType?: 'sale' | 'rent';
  city?: string;
  searchQuery?: string;
}
