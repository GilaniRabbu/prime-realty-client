
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Property, PropertyFilters } from '@/types/property';

export const useProperties = (filters?: PropertyFilters) => {
  return useQuery({
    queryKey: ['properties', filters],
    queryFn: async () => {
      let query = supabase
        .from('properties')
        .select(`
          *,
          agent:profiles(full_name, email, phone, avatar_url)
        `)
        .eq('status', 'active');

      // Apply filters
      if (filters?.priceMin) {
        query = query.gte('price', filters.priceMin);
      }
      if (filters?.priceMax) {
        query = query.lte('price', filters.priceMax);
      }
      if (filters?.bedrooms) {
        query = query.gte('bedrooms', filters.bedrooms);
      }
      if (filters?.bathrooms) {
        query = query.gte('bathrooms', filters.bathrooms);
      }
      if (filters?.propertyType) {
        query = query.eq('property_type', filters.propertyType);
      }
      if (filters?.listingType) {
        query = query.eq('listing_type', filters.listingType);
      }
      if (filters?.city) {
        query = query.ilike('city', `%${filters.city}%`);
      }
      if (filters?.searchQuery) {
        query = query.or(`title.ilike.%${filters.searchQuery}%, description.ilike.%${filters.searchQuery}%, address.ilike.%${filters.searchQuery}%`);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;

      return data.map(item => ({
        id: item.id,
        title: item.title,
        price: Number(item.price),
        address: item.address,
        city: item.city,
        state: item.state,
        zipCode: item.zip_code,
        bedrooms: item.bedrooms,
        bathrooms: item.bathrooms,
        squareFeet: item.square_feet,
        propertyType: item.property_type,
        listingType: item.listing_type,
        description: item.description || '',
        images: item.images || [],
        amenities: item.amenities || [],
        yearBuilt: item.year_built || new Date().getFullYear(),
        lotSize: item.lot_size,
        agent: {
          name: item.agent?.full_name || 'Unknown',
          email: item.agent?.email || '',
          phone: item.agent?.phone || '',
          image: item.agent?.avatar_url,
        },
        coordinates: {
          lat: Number(item.latitude) || 0,
          lng: Number(item.longitude) || 0,
        },
        createdAt: item.created_at,
        updatedAt: item.updated_at,
        featured: item.featured || false,
      })) as Property[];
    },
  });
};

export const useProperty = (id: string) => {
  return useQuery({
    queryKey: ['property', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('properties')
        .select(`
          *,
          agent:profiles(full_name, email, phone, avatar_url)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;

      return {
        id: data.id,
        title: data.title,
        price: Number(data.price),
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zip_code,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        squareFeet: data.square_feet,
        propertyType: data.property_type,
        listingType: data.listing_type,
        description: data.description || '',
        images: data.images || [],
        amenities: data.amenities || [],
        yearBuilt: data.year_built || new Date().getFullYear(),
        lotSize: data.lot_size,
        agent: {
          name: data.agent?.full_name || 'Unknown',
          email: data.agent?.email || '',
          phone: data.agent?.phone || '',
          image: data.agent?.avatar_url,
        },
        coordinates: {
          lat: Number(data.latitude) || 0,
          lng: Number(data.longitude) || 0,
        },
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        featured: data.featured || false,
      } as Property;
    },
    enabled: !!id,
  });
};

export const useFavorites = () => {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('favorites')
        .select(`
          *,
          property:properties(
            *,
            agent:profiles(full_name, email, phone, avatar_url)
          )
        `);

      if (error) throw error;
      return data;
    },
  });
};

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ propertyId, userId }: { propertyId: string; userId: string }) => {
      // Check if already favorited
      const { data: existing } = await supabase
        .from('favorites')
        .select('id')
        .eq('property_id', propertyId)
        .eq('user_id', userId)
        .single();

      if (existing) {
        // Remove from favorites
        const { error } = await supabase
          .from('favorites')
          .delete()
          .eq('property_id', propertyId)
          .eq('user_id', userId);
        if (error) throw error;
        return false;
      } else {
        // Add to favorites
        const { error } = await supabase
          .from('favorites')
          .insert({ property_id: propertyId, user_id: userId });
        if (error) throw error;
        return true;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
};
