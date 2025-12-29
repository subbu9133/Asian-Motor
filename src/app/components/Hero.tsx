import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjcwMDQxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury car showroom"
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-60 pb-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8 shadow-xl animate-fade-in">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            {/* <span className="text-gray-200 text-sm font-medium tracking-wide uppercase">Premium Auto Dealership Since 2010</span> */}
          </div>

          {/* Main heading */}
          <h1 className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight drop-shadow-2xl">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Dream Car</span> <br />
            at Asian Motors
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-xl sm:text-2xl mb-10 max-w-2xl font-light leading-relaxed border-l-4 border-blue-500 pl-6">
            Experience the pinnacle of luxury and performance. We curate the finest selection of vehicles for the discerning driver.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <Link
              to="/inventory"
              className="group relative bg-blue-600 text-white px-10 py-5 rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-3 font-semibold text-lg">
                Browse Inventory
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-10 py-5 rounded-full text-white font-semibold text-lg border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105"
            >
              Contact Us
            </button>
          </div>

          {/* Stats Glass Cards */}
          {/* <div className="grid grid-cols-3 gap-6 max-w-3xl">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transform hover:-translate-y-1 transition-transform">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">500+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">Cars Sold</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transform hover:-translate-y-1 transition-transform delay-75">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">98%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">Satisfaction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transform hover:-translate-y-1 transition-transform delay-150">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">15+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">Years Experience</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
