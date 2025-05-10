import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DriverDashboard = () => {
  const [driverData, setDriverData] = useState({
    name: "John Doe",
    salary: 50000,
    checkInTime: '9:00 AM',
    checkOutTime: '6:00 PM',
    location: 'Main Street, City',
    pickupTime: '8:00 AM',
    currentTask: 'Pickup at City Center',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('driverData');
    if (storedData) {
      setDriverData(JSON.parse(storedData));
    }
    // Add fetch API logic if dynamic data is needed
  }, []);

  const handleTrackLocationClick = () => {
    navigate('/live-track'); // Redirect to LiveTrack
  };

  const handlePaymentSummaryClick = () => {
    navigate('/salary-summary'); // Redirect to Salary Summary
  };

  const handleTaskManagementClick = () => {
    navigate('/task-management'); // Redirect to Task Management
  };

  // Function to trigger alert pop-up
  const handleAlertClick = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  // Function to close alert pop-up
  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertMessage('');
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 p-8 min-h-screen">
      {/* Driver Information Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 transform hover:scale-105 transition duration-300">
        <h2 className="text-xl font-bold mb-4">Driver Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p><strong>Check-In Time:</strong> {driverData.checkInTime}</p>
            <p><strong>Check-Out Time:</strong> {driverData.checkOutTime}</p>
            <p><strong>Pickup Time:</strong> {driverData.pickupTime}</p>
          </div>
          <div>
            <p><strong>Location:</strong> {driverData.location}</p>
            <p><strong>Current Task:</strong> {driverData.currentTask}</p>
          </div>
        </div>
      </div>

      {/* Tracking and Payments Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Tracking & Payments</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <p className="font-bold">Track Shift</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center" onClick={handleTrackLocationClick}>
            <p className="font-bold">Track Location</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center" onClick={handlePaymentSummaryClick}>
            <p className="font-bold">Payment Summary</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <p className="font-bold">Performance Report</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center" onClick={handleTaskManagementClick}>
            <p className="font-bold">Task Management</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <p className="font-bold">Feedback & Ratings</p>
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Alerts</h2>
        <div className="grid grid-cols-4 gap-6">
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center cursor-pointer relative"
            onClick={() => handleAlertClick('Fuel level is low!')}
          >
            <p className="font-bold">Fuel Alert</p>
            <div className="absolute top-0 right-0 bg-red-500 w-4 h-4 rounded-full animate-pulse"></div>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center cursor-pointer relative"
            onClick={() => handleAlertClick('Pollution check is due soon!')}
          >
            <p className="font-bold">Pollution Check</p>
            <div className="absolute top-0 right-0 bg-yellow-500 w-4 h-4 rounded-full animate-pulse"></div>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center cursor-pointer relative"
            onClick={() => handleAlertClick('License renewal required!')}
          >
            <p className="font-bold">License Renewal</p>
            <div className="absolute top-0 right-0 bg-green-500 w-4 h-4 rounded-full animate-pulse"></div>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center cursor-pointer relative"
            onClick={() => handleAlertClick('Vehicle cleaning needed!')}
          >
            <p className="font-bold">Cleaning Alerts</p>
            <div className="absolute top-0 right-0 bg-blue-500 w-4 h-4 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Alert Notification Modal */}
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 text-center">
            <h3 className="text-2xl font-bold mb-4">Alert</h3>
            <p className="mb-6">{alertMessage}</p>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
              onClick={handleCloseAlert}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Safety Features Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Safety Features</h2>
        <div className="flex space-x-6">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <p className="font-bold">Phone Usage</p>
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <p className="font-bold">Drowsiness Detection</p>
          </div>
        </div>
      </div>

      {/* AI Chatbot with Animation and Hover Effects */}
      <div className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-500 transform hover:scale-110 transition duration-300 cursor-pointer">
        <div className="flex items-center space-x-2">
          <span>AI Chat Bot</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3-3m0 0l3 3m-3-3v12" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
