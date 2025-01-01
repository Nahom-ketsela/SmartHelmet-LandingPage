import React from 'react';
import { Activity, Thermometer, Wind, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Real-Time Monitoring Dashboard
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          The Real-Time Monitoring Dashboard displays key safety metrics, including heart rate, room temperature, air quality, and active alerts. It ensures the safety of workers by tracking vital signs, environmental conditions, and system status. Recent activity logs provide a detailed overview of system checks, worker location updates, and hazard scans, all ensuring a secure and efficient work environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Vital Signs Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Heart Rate</h3>
              <Activity className="h-6 w-6 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">75 BPM</div>
            <div className="text-sm text-gray-500 mt-2">Normal Range</div>
          </div>

          {/* Temperature Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Room Temperature</h3>
              <Thermometer className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">25°C</div>
            <div className="text-sm text-gray-500 mt-2">Normal Range</div>
          </div>

          {/* Air Quality Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Air Quality</h3>
              <Wind className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">Good</div>
            <div className="text-sm text-gray-500 mt-2">No Toxic Gases Detected</div>
          </div>

          {/* Alerts Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Active Alerts</h3>
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">0</div>
            <div className="text-sm text-gray-500 mt-2">All Systems Normal</div>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-lg font-medium mb-4">Recent Activity Log</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">09:45 AM</span>
              <span className="text-gray-700">System Check Complete - All Parameters Normal</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">09:30 AM</span>
              <span className="text-gray-700">Worker Location Updated - Zone A</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">09:15 AM</span>
              <span className="text-gray-700">Environmental Scan - No Hazards Detected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;