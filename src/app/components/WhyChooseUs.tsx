import { Shield, Award, Users, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified Quality',
    description: 'Every vehicle undergoes rigorous inspection and comes with comprehensive warranty coverage.'
  },
  {
    icon: Award,
    title: 'Best Prices',
    description: 'Competitive pricing and flexible financing options to fit your budget and lifestyle.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our knowledgeable staff is dedicated to helping you find the perfect vehicle.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer service for all your questions and concerns.'
  }
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1592891024301-bf7948cee673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwdGVhbXxlbnwxfHx8fDE3NjcwMjk1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Asian Motors Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl mb-1">15+</div>
              <div>Years of Excellence</div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-blue-600 mb-2">WHY CHOOSE US</h2>
            <h3 className="text-4xl sm:text-5xl text-gray-900 mb-6">
              Your Trusted Auto Partner
            </h3>
            <p className="text-gray-600 mb-8">
              At Asian Motors, we're committed to providing an exceptional car buying experience. 
              With over 15 years in the industry, we've built a reputation for quality, integrity, 
              and outstanding customer service.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}