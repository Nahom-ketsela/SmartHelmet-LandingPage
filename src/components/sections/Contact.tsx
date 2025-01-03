import React from 'react';
import { MapPin, Globe, Building } from 'lucide-react'; // Added icons for Website and Institution

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get in touch for inquiries or collaborations
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Project Information</h3>
            <div className="space-y-6">
              {/* Website */}
              <div className="flex items-start">
                <Globe className="h-6 w-6 text-yellow-600 mt-1" />
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Website</p>
                  <p className="text-gray-600"><a href='https://sites.google.com/view/ietp-96/home' className="hover:text-yellow-500 hover:underline">E-portofolio</a></p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Location</p>
                  <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              {/* Institution */}
              <div className="flex items-start">
                <Building className="h-6 w-6 text-yellow-600 mt-1" />
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Institution</p>
                  <p className="text-gray-600">Addis Ababa Science and Technology University </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                placeholder="Your Email Address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                placeholder="Your Message..."
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
