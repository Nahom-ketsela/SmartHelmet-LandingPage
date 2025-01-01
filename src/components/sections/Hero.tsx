import React from 'react';
import { Shield, Activity, HardDrive } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-yellow-50 pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-yellow-200 opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base text-yellow-600 font-semibold tracking-wide uppercase">
                Innovating Safety Through Technology
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Smart Helmet with</span>
                <span className="block text-yellow-600"> Wearable Health and Environmental Monitering</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Revolutionizing workplace safety with real-time health monitoring, 
              hazard detection, and advanced protection for construction workers.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {/* Interactive Icons */}
                <div className="flex flex-col items-center lg:items-start transition-transform duration-300 transform hover:scale-105">
                  <Activity className="h-8 w-8 text-yellow-600 transition-all duration-300 hover:text-yellow-800" />
                  <span className="mt-2 text-sm text-gray-500">Health Monitoring</span>
                </div>
                <div className="flex flex-col items-center lg:items-start transition-transform duration-300 transform hover:scale-105">
                  <HardDrive className="h-8 w-8 text-yellow-600 transition-all duration-300 hover:text-yellow-800" />
                  <span className="mt-2 text-sm text-gray-500">Real-time Data</span>
                </div>
                <div className="flex flex-col items-center lg:items-start transition-transform duration-300 transform hover:scale-105">
                  <Shield className="h-8 w-8 text-yellow-600 transition-all duration-300 hover:text-yellow-800" />
                  <span className="mt-2 text-sm text-gray-500">Advanced Protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with Image */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg transform transition-all duration-500 hover:scale-105"
                src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/6704078aaff74b001e95afcd.png"
                alt="Smart Construction Helmet"
              />
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <a
            href="#features"
            className="inline-block bg-yellow-600 text-white text-lg font-medium py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:bg-yellow-700 hover:scale-105"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
