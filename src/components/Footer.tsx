
import { House, MapPin, Phone, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <House className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold">PrimeRealty</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner in finding the perfect home. We provide exceptional real estate services with a commitment to excellence and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Real Estate Ave, San Francisco, CA 94102</span>
              </div>
            </div>
            <div className="flex items-center text-gray-300 mt-2">
              <Phone className="h-5 w-5 mr-2" />
              <span>(555) 123-REAL</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/properties" className="text-gray-300 hover:text-white transition-colors">Properties</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/agents" className="text-gray-300 hover:text-white transition-colors">Our Agents</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Buy Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sell Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rent Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investment Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 PrimeRealty. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
