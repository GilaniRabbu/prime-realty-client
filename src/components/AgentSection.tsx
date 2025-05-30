
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Eye, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Agent {
  id: string;
  full_name: string | null;
  email: string;
  phone: string | null;
  avatar_url: string | null;
  bio: string | null;
  propertyCount: number;
}

const AgentSection = () => {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  // Mock agent data for demo purposes
  const mockAgents: Agent[] = [
    {
      id: '1',
      full_name: 'John David',
      email: 'john.david@primerealty.com',
      phone: '+1 (555) 123-4567',
      avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Experienced real estate agent specializing in luxury properties with over 10 years in the market.',
      propertyCount: 15
    },
    {
      id: '2',
      full_name: 'Alice Brian',
      email: 'alice.brian@primerealty.com',
      phone: '+1 (555) 234-5678',
      avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b332c813?w=400',
      bio: 'Passionate about helping families find their perfect home. Expert in residential properties.',
      propertyCount: 12
    },
    {
      id: '3',
      full_name: 'Melissa William',
      email: 'melissa.william@primerealty.com',
      phone: '+1 (555) 345-6789',
      avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      bio: 'Commercial and residential real estate specialist with a focus on investment properties.',
      propertyCount: 18
    },
    {
      id: '4',
      full_name: 'Robert Smith',
      email: 'robert.smith@primerealty.com',
      phone: '+1 (555) 456-7890',
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'Dedicated agent focused on first-time homebuyers and investment properties.',
      propertyCount: 9
    },
    {
      id: '5',
      full_name: 'Sarah Johnson',
      email: 'sarah.johnson@primerealty.com',
      phone: '+1 (555) 567-8901',
      avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      bio: 'Luxury real estate specialist with expertise in high-end residential properties.',
      propertyCount: 21
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced team of real estate professionals is here to guide you through every step of your property journey
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {mockAgents.map((agent) => (
              <CarouselItem key={agent.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl"
                  onMouseEnter={() => setHoveredAgent(agent.id)}
                  onMouseLeave={() => setHoveredAgent(null)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={agent.avatar_url || '/placeholder.svg'}
                        alt={agent.full_name || 'Agent'}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Hover overlay */}
                      <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                        hoveredAgent === agent.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="bg-white text-black hover:bg-gray-100"
                          >
                            <Building className="h-4 w-4 mr-2" />
                            {agent.propertyCount} Listed Properties
                          </Button>
                          <Button
                            asChild
                            variant="default"
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Link to={`/agent/${agent.id}`}>
                              <Eye className="h-4 w-4 mr-2" />
                              View Profile
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {agent.full_name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {agent.bio}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Phone className="h-4 w-4 mr-2" />
                          {agent.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Mail className="h-4 w-4 mr-2" />
                          {agent.email}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px]" />
          <CarouselNext className="right-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
};

export default AgentSection;
