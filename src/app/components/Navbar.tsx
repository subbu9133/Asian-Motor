import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar */}
      <div className="bg-gray-950 text-gray-400 py-1.5 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs tracking-wide">
            <div className="flex items-center gap-6">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3 h-3" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@asianmotors.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3 h-3" />
                <span>info@asianmotors.com</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - Glass Effect */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center gap-3"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                  <span className="text-white font-bold font-serif">AM</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-gray-900 tracking-tight leading-none">Asian Motors</span>
                  <span className="text-[10px] text-blue-600 uppercase tracking-widest font-semibold mt-1">Premium Dealership</span>
                </div>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-600 hover:text-blue-700 font-medium transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/inventory" className="text-gray-600 hover:text-blue-700 font-medium transition-colors relative group">
                Inventory
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-700 font-medium transition-colors relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-700 font-medium transition-colors relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-700 font-medium transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium text-sm">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Home
            </Link>
            <Link to="/inventory" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Inventory
            </Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Services
            </Link>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Contact
            </button>
            <button onClick={() => scrollToSection('contact')} className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors block text-center">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
