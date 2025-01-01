import React from 'react';
import { Heart, Zap, Building2 } from 'lucide-react';

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">
              Global Impact
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Contributing to the UN Sustainable Development Goals
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* SDG 3: Good Health and Well-being */}
            <div className="group bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-yellow-100">
              <div className="relative">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
                  alt="Health and Safety"
                  className="w-full h-48 object-cover rounded-lg mt-8 mb-6"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">SDG 3: Good Health</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Real-time vital sign monitoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Early hazard detection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Immediate emergency response
                </li>
              </ul>
            </div>

            {/* SDG 7: Affordable and Clean Energy */}
            <div className="group bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-yellow-100">
              <div className="relative">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400"
                  alt="Sustainable Energy"
                  className="w-full h-48 object-cover rounded-lg mt-8 mb-6"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">SDG 7: Clean Energy</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Solar-powered components
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Energy-efficient sensors
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Sustainable battery life
                </li>
              </ul>
            </div>

            {/* SDG 11: Sustainable Cities */}
            <div className="group bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-yellow-100">
              <div className="relative">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400"
                  alt="Sustainable Cities"
                  className="w-full h-48 object-cover rounded-lg mt-8 mb-6"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">SDG 11: Sustainable Cities</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Safer construction practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Smart infrastructure support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Urban development safety
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;