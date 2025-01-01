import React from 'react';
import { Target, AlertTriangle, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About The Project
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Addressing critical safety challenges in the construction industry through innovative technology.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Project Goals */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <div className="inline-flex p-4 bg-yellow-200 rounded-full mb-4">
                <Target className="h-12 w-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Project Goals</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Improve workplace safety</li>
                <li>• Real-time well-being monitoring</li>
                <li>• Align with SDG 3, 7 & 11</li>
                <li>• Reduce workplace accidents</li>
              </ul>
            </div>

            {/* Problem Statement */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <div className="inline-flex p-4 bg-yellow-200 rounded-full mb-4">
                <AlertTriangle className="h-12 w-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Problem Statement</h3>
              <p className="text-gray-600">
                Construction workers face daily risks from environmental hazards, physical strain, and accidents. Current safety measures lack real-time monitoring and immediate response capabilities.
              </p>
            </div>

            {/* Team */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <div className="inline-flex p-4 bg-yellow-200 rounded-full mb-4">
                <Users className="h-12 w-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Team</h3>
              <p className="text-gray-600 mb-4">
                A multidisciplinary team of engineering students from the University of Addis Ababa Science and Technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
