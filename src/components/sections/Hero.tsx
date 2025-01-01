import React from 'react';
import { Shield, Activity, HardDrive } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-yellow-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base text-yellow-600 font-semibold tracking-wide uppercase">
                Innovating Safety Through Technology
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Smart Helmet for</span>
                <span className="block text-yellow-600">Enhanced Worker Safety</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Revolutionizing workplace safety with real-time health monitoring, 
              hazard detection, and advanced protection for construction workers.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                
                <div className="flex flex-col items-center lg:items-start">
                  <Activity className="h-8 w-8 text-yellow-600" />
                  <span className="mt-2 text-sm text-gray-500">Health Monitoring</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <HardDrive className="h-8 w-8 text-yellow-600" />
                  <span className="mt-2 text-sm text-gray-500">Real-time Data</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000"
                alt="Smart Construction Helmet"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;