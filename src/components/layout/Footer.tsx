import React from 'react';
import { HardHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4">
              <HardHat className="h-10 w-10 text-yellow-500 transform transition-transform duration-300 hover:scale-110" />
              <span className="text-white font-bold text-3xl">Smart Helmet</span>
            </div>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              Innovating workplace safety through advanced technology and real-time monitoring.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-500 hover:underline">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-500 hover:underline">About</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-yellow-500 hover:underline">Features</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-500 hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Addis Ababa, Ethiopia</li>
              <li><a href="https://sites.google.com/view/ietp-96/home" className="hover:text-yellow-500 hover:underline">Contact Info</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Smart Helmet Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
