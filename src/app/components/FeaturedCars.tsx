import { Fuel, Gauge, Settings, ArrowRight } from 'lucide-react';

const cars = [
  {
    id: 1,
    name: 'Premium Sports Coupe',
    price: '$85,900',
    image: 'https://images.unsplash.com/photo-1691884454440-9a414bc25bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY3MDA0MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: 2024,
    mileage: '2,500 mi',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    badge: 'New Arrival'
  },
  {
    id: 2,
    name: 'Luxury Executive Sedan',
    price: '$72,500',
    image: 'https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjcwMjQ4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: 2024,
    mileage: '5,200 mi',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    badge: 'Featured'
  },
  {
    id: 3,
    name: 'Premium SUV',
    price: '$95,000',
    image: 'https://images.unsplash.com/photo-1633867179970-c54688bcfa33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2Njk5NzUxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: 2024,
    mileage: '1,800 mi',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    badge: 'Hot Deal'
  },
  {
    id: 4,
    name: 'Electric Performance',
    price: '$89,900',
    image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhcnxlbnwxfHx8fDE3NjcwMjIwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: 2024,
    mileage: '3,100 mi',
    transmission: 'Automatic',
    fuel: 'Electric',
    badge: 'Eco-Friendly'
  }
];

export function FeaturedCars() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 mb-2">PREMIUM COLLECTION</h2>
          <h3 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Featured Vehicles
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium vehicles. Each car is carefully inspected 
            and comes with our quality guarantee.
          </p>
        </div>

        {/* Cars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                  {car.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl text-gray-900 mb-1">{car.name}</h4>
                    <p className="text-gray-500">{car.year}</p>
                  </div>
                </div>

                <div className="text-blue-600 text-2xl mb-4">{car.price}</div>

                {/* Specs */}
                <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Gauge className="w-4 h-4" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Settings className="w-4 h-4" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Fuel className="w-4 h-4" />
                    <span>{car.fuel}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group/btn">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            View All Inventory
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}