
import { Property } from '@/types/property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Luxury Condo',
    price: 850000,
    address: '123 Main Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    propertyType: 'condo',
    listingType: 'sale',
    description: 'Stunning modern condo in the heart of downtown with panoramic city views, premium finishes, and luxury amenities.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'
    ],
    amenities: ['Gym', 'Pool', 'Concierge', 'Rooftop Deck', 'Parking'],
    yearBuilt: 2019,
    agent: {
      name: 'Sarah Johnson',
      email: 'sarah@realestate.com',
      phone: '(555) 123-4567',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400'
    },
    coordinates: { lat: 37.7749, lng: -122.4194 },
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
    featured: true
  },
  {
    id: '2',
    title: 'Charming Victorian Family Home',
    price: 1200000,
    address: '456 Oak Avenue',
    city: 'Oakland',
    state: 'CA',
    zipCode: '94610',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2500,
    propertyType: 'house',
    listingType: 'sale',
    description: 'Beautiful Victorian home with original character, modern updates, and a large backyard perfect for families.',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    ],
    amenities: ['Garden', 'Garage', 'Fireplace', 'Hardwood Floors'],
    yearBuilt: 1925,
    lotSize: 5000,
    agent: {
      name: 'Michael Chen',
      email: 'michael@realestate.com',
      phone: '(555) 234-5678'
    },
    coordinates: { lat: 37.8044, lng: -122.2711 },
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
    featured: true
  },
  {
    id: '3',
    title: 'Luxury Waterfront Apartment',
    price: 4500,
    address: '789 Bay Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94109',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 850,
    propertyType: 'apartment',
    listingType: 'rent',
    description: 'Exclusive waterfront apartment with breathtaking bay views, premium amenities, and prime location.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800'
    ],
    amenities: ['Water View', 'Balcony', 'Gym', 'Doorman', 'Pet-Friendly'],
    yearBuilt: 2020,
    agent: {
      name: 'Emily Rodriguez',
      email: 'emily@realestate.com',
      phone: '(555) 345-6789'
    },
    coordinates: { lat: 37.8049, lng: -122.4094 },
    createdAt: '2024-01-08',
    updatedAt: '2024-01-08'
  },
  {
    id: '4',
    title: 'Modern Townhouse with Garage',
    price: 950000,
    address: '321 Pine Street',
    city: 'Berkeley',
    state: 'CA',
    zipCode: '94710',
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1800,
    propertyType: 'townhouse',
    listingType: 'sale',
    description: 'Contemporary townhouse featuring an open floor plan, modern kitchen, and attached two-car garage.',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
    ],
    amenities: ['Garage', 'Patio', 'Modern Kitchen', 'Walk-in Closet'],
    yearBuilt: 2018,
    agent: {
      name: 'David Wilson',
      email: 'david@realestate.com',
      phone: '(555) 456-7890'
    },
    coordinates: { lat: 37.8715, lng: -122.2730 },
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05'
  }
];
