import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <span className="font-bold text-lg">Asian Motors</span>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Your trusted partner for premium vehicles. Quality, integrity, and exceptional service since 2010.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-2 font-semibold">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/inventory" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Inventory
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-2 font-semibold">Our Services</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Vehicle Sales</li>
              <li>Financing Options</li>
              <li>Trade-In Program</li>
              <li>Maintenance & Repair</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-2 font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to newsletter for deals.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-3 py-1.5 rounded-md bg-gray-800 border border-gray-700 text-white text-sm placeholder-gray-500 focus:border-blue-500 outline-none"
              />
              <button className="bg-blue-600 px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p className="text-gray-400">
            © 2025 Asian Motors. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
