import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LiveTracking from './LiveTracking';
import SalaryCalculator from './SalarySummary';
import { mockDrivers } from '../data/mockData';

const ManagerDashboard = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Driver List</h2>
          <ul className="bg-white rounded-lg shadow">
            {mockDrivers.map((driver) => (
              <li key={driver.id} className="p-2 hover:bg-gray-100">
                <button
                  onClick={() => setSelectedDriver(driver)}
                  className="w-full text-left"
                >
                  {driver.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {selectedDriver && (
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-2">Driver Details</h2>
              <p>Name: {selectedDriver.name}</p>
              <p>Email: {selectedDriver.email}</p>
              <Link
                to={`/driver-profile/${selectedDriver.id}`}
                className="text-blue-500 hover:underline"
              >
                View Full Profile
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="mt-8">
        <LiveTracking />
      </div>
      <div className="mt-8">
        <SalaryCalculator />
      </div>
    </div>
  );
};

export default ManagerDashboard;