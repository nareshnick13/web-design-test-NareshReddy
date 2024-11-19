import React from 'react';
import {
  Droplets,
  Battery,
  Smartphone,
  Bluetooth,
  ThermometerSun,
  Bell,
} from 'lucide-react';

const features = [
  {
    name: 'Smart  Tracking',
    description:
      'Lightweight and durable ABS construction Comfortable NBR handle for optimal grip',
    icon: Droplets,
  },
  {
    name: '30-Day Battery Life',
    description: 'Long-lasting battery with wireless charging capability',
    icon: Battery,
  },
  {
    name: 'Mobile App Integration',
    description: 'Sync with our iOS and Android apps for detailed insights',
    icon: Smartphone,
  },
  {
    name: 'Bluetooth 5.0',
    description: 'Seamless connectivity with your devices',
    icon: Bluetooth,
  },
  {
    name: 'Sensors',
    description:
      'Equipped with high-precision accelerometers, gyroscopes, and magnetometers for accurate and nuanced tracking of swings, shots, and spins.',
    icon: ThermometerSun,
  },
  {
    name: 'Smart Reminders',
    description: 'Gentle notifications to keep you on track with your goals',
    icon: Bell,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Smart cricket for modern life
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Every feature is thoughtfully designed to help you stay healthy and
            enjoy throughout your day.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
