import { Car, Wrench, FileText, CreditCard, Sparkles, Clock } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Vehicle Sales',
    description: 'Wide selection of new and certified pre-owned vehicles from top manufacturers.'
  },
  {
    icon: CreditCard,
    title: 'Financing Options',
    description: 'Flexible financing solutions with competitive rates tailored to your needs.'
  },
  {
    icon: FileText,
    title: 'Trade-In Program',
    description: 'Get the best value for your current vehicle with our fair trade-in process.'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    description: 'Expert service center with certified technicians for all your vehicle needs.'
  },
  {
    icon: Sparkles,
    title: 'Detailing Services',
    description: 'Professional detailing to keep your vehicle looking showroom fresh.'
  },
  {
    icon: Clock,
    title: 'Extended Warranty',
    description: 'Comprehensive warranty packages for peace of mind and protection.'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-400 mb-2">OUR SERVICES</h2>
          <h3 className="text-4xl sm:text-5xl mb-4">
            Complete Auto Solutions
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From sales to service, we provide everything you need for your automotive journey. 
            Experience our comprehensive range of professional services.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all duration-300 group cursor-pointer border border-gray-700 hover:border-blue-500"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl mb-3">{service.title}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}