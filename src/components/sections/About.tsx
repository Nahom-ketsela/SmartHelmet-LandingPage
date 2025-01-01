import React from 'react';
import { Target, AlertTriangle, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About The Project
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Addressing critical safety challenges in construction industries through innovative technology.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-yellow-50 p-8 rounded-lg">
              <Target className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Project Goals</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Improve workplace safety</li>
                <li>• Real-time health monitoring</li>
                <li>• Align with SDG 3 & 8</li>
                <li>• Reduce workplace accidents</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <AlertTriangle className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Problem Statement</h3>
              <p className="text-gray-600">
                Construction workers face daily risks from environmental hazards,
                physical strain, and accidents. Current safety measures lack real-time
                monitoring and immediate response capabilities.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <Users className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Team</h3>
              <p className="text-gray-600 mb-4">
                A multidisciplinary team of engineers and researchers led by:
              </p>
              <p className="font-medium">Instructor Mamuye T.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;