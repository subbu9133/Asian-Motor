
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { cars } from '../../data/cars';
import { Fuel, Gauge, Settings, Calendar, ArrowLeft, Check, Shield, CircleDollarSign } from 'lucide-react';
import { motion } from 'framer-motion';


export function CarDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const car = cars.find(c => c.id === Number(id));
    // State for active image, default to main image. 
    // We'll combine main image + gallery for the list.
    const [selectedImage, setSelectedImage] = useState<string>('');

    // Initialize selectedImage when car loads
    if (car && !selectedImage) {
        setSelectedImage(car.image);
    }

    if (!car) {
        return (
            <div className="min-h-screen pt-32 pb-12 px-4 flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Car Not Found</h2>
                <p className="text-gray-600 mb-8">The vehicle you are looking for does not exist.</p>
                <Link to="/inventory" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" /> Back to Inventory
                </Link>
            </div>
        );
    }

    const allImages = [car.image, ...(car.gallery || [])];

    return (
        <div className="bg-white min-h-screen pt-30 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <Link to="/inventory" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Inventory
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Image Viewer (Amazon Style) */}
                    <div className="space-y-4">
                        <div className="flex flex-col-reverse lg:flex-row gap-4">
                            {/* Thumbnails (Vertical on Desktop, Bottom on Mobile) */}
                            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:h-[500px] scrollbar-hide py-2 lg:py-0">
                                {allImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-blue-600 ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <img src={img} alt={`View ${index}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="flex-1 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 h-[400px] lg:h-[500px] flex items-center justify-center relative group">
                                <motion.img
                                    key={selectedImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    src={selectedImage || car.image}
                                    alt={car.name}
                                    className="w-full h-full object-contain p-2"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                                    {car.badge}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{car.name}</h1>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {car.year}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1"><Gauge className="w-4 h-4" /> {car.mileage}</span>
                                <span>•</span>
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-semibold">In Stock</span>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <p className="text-sm text-gray-500 mb-1">Total Cash Price</p>
                                <h2 className="text-4xl font-bold text-blue-600">{car.price}</h2>
                            </div>
                        </div>

                        {/* Quick Actions / Add to Cart style */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                            <div className="flex gap-4">
                                <button
                                    onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                                >
                                    Book Test Drive
                                </button>
                                <button className="flex-1 bg-white border border-gray-300 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Make an Offer
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                <Shield className="w-4 h-4 text-green-600" />
                                <span>Secure transaction • Dealer Verified</span>
                            </div>
                        </div>

                        {/* Quick Specs Grid */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Vehicle Highlights</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Settings className="w-5 h-5" /></div>
                                    <div>
                                        <p className="text-xs text-gray-500">Transmission</p>
                                        <p className="font-medium text-gray-900">{car.transmission}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Fuel className="w-5 h-5" /></div>
                                    <div>
                                        <p className="text-xs text-gray-500">Fuel Type</p>
                                        <p className="font-medium text-gray-900">{car.fuel}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description Preview */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">About this vehicle</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {car.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Detailed Info Section (Below Fold) */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Specifications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            {['Premium Sound System', 'Leather Interior', 'Navigation System', 'Bluetooth Connectivity', 'Heated Seats', 'Backup Camera', 'Lane Departure Warning', 'Adaptive Cruise Control'].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-700">
                                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        {/* Additional sidebar info if needed, or leave empty/banner
                        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
                            <p className="mb-6 text-blue-100">Our specialists are here to help you find your dream car.</p>
                            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full">
                                Contact Specialist
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
