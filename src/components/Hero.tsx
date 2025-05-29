
import { useState } from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to properties page with search query
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920')"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Find Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Discover the perfect property with our comprehensive real estate platform
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-2 flex items-center shadow-2xl">
            <input
              type="text"
              placeholder="Search by location, property type, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none text-lg"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </form>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-lg opacity-90">Properties Listed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-lg opacity-90">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-lg opacity-90">Expert Agents</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
