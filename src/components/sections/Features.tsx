import React from 'react';
import { HardHat, Wifi, Battery, AlertTriangle, Smartphone, Thermometer, Radio, Shield, MapPin } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-yellow-600" />,
      title: 'Hazard Alerts',
      description: 'Advanced sensors detect and warn of potential hazardous gases and unsafe conditions.'
    },
    {
      icon: <MapPin className="h-6 w-6 text-yellow-600" />,
      title: 'GPS Tracking',
      description: 'Pinpoint your location with ease for emergency response and zone management.'
    },
    {
      icon: <Thermometer className="h-6 w-6 text-yellow-600" />,
      title: 'Health Monitoring',
      description: 'Keep track of heart rate and environmental temperature to ensure worker well-being.'
    },
    {
      icon: <HardHat className="h-6 w-6 text-yellow-600" />,
      title: 'Impact Protection',
      description: 'Built tough to protect against falling objects and other workplace hazards.'
    },
    {
      icon: <Smartphone className="h-6 w-6 text-yellow-600" />,
      title: 'Communication Tools',
      description: 'Seamless communication system for better coordination and immediate alerts.'
    },
    {
      icon: <Shield className="h-6 w-6 text-yellow-600" />,
      title: 'Custom Fit',
      description: 'Ergonomically designed for all-day comfort, ensuring a perfect fit for every worker.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-r from-yellow-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Key Features of the Smart Helmet
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Protecting workers and improving productivity with real-time health and environmental hazard monitoring.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:opacity-90"
              >
                <div className="inline-flex p-3 bg-yellow-50 rounded-lg transition-all duration-300 group-hover:bg-yellow-200">
                  {feature.icon}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-yellow-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-700 transition-all duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
