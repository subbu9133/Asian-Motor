import { Link } from 'react-router-dom';
import { Fuel, Gauge, Settings, ArrowRight } from 'lucide-react';
import { cars } from '../../data/cars';

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
                <Link
                  to={`/inventory/${car.id}`}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
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