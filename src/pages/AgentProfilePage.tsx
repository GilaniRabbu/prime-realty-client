
import { useParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Building, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AgentProfilePage = () => {
  const { id } = useParams();
  
  // Mock agent data - in real app this would come from the database
  const agent = {
    id: id,
    full_name: 'John David',
    email: 'john.david@primerealty.com',
    phone: '+1 (555) 123-4567',
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Experienced real estate agent specializing in luxury properties with over 10 years in the market. I am passionate about helping clients find their dream homes and have a proven track record of successful transactions.',
    experience_years: 10,
    properties_sold: 150,
    total_sales: '$25M',
    specialties: ['Luxury Properties', 'Commercial Real Estate', 'Investment Properties'],
    rating: 4.9,
    reviews_count: 87
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Agent Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <img
                src={agent.avatar_url}
                alt={agent.full_name}
                className="w-32 h-32 rounded-full object-cover"
              />
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {agent.full_name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Real Estate Professional
                </p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{agent.rating}</span>
                    <span className="text-gray-500 ml-1">({agent.reviews_count} reviews)</span>
                  </div>
                  <Badge variant="secondary">{agent.experience_years} years experience</Badge>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {agent.bio}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Agent
                  </Button>
                  <Button variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    {agent.phone}
                  </Button>
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    {agent.email}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Performance Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {agent.properties_sold}
                    </div>
                    <div className="text-gray-600">Properties Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {agent.total_sales}
                    </div>
                    <div className="text-gray-600">Total Sales Volume</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {agent.experience_years}
                    </div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Properties */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Property listings would be displayed here.</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Specialties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {agent.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="block text-center">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-gray-400" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-gray-400" />
                  <span className="text-sm">{agent.email}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfilePage;
