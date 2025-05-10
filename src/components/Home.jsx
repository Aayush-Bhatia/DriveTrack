import React from 'react';
import { Bell, MessageSquare, Search, UserCircle, Plus, Info, MapPin, BarChart2, CheckCircle, UserCheck } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      

      <main className="container mx-auto p-6">
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to DriveTrack</h2>
            <p className="text-lg text-gray-600">Track your fleet, monitor performance, and ensure safety—all in one place.</p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: 'Real-Time Tracking', icon: <MapPin size={24} /> },
              { name: 'Performance Monitoring', icon: <BarChart2 size={24} /> },
              { name: 'Task Management', icon: <CheckCircle size={24} /> },
              { name: 'Driver Safety', icon: <UserCheck size={24} /> },
              { name: 'Analytics & Reports', icon: <BarChart2 size={24} /> },
              { name: '24/7 Support', icon: <Info size={24} /> }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg text-center shadow hover:shadow-md transition-shadow">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <p className="font-semibold text-gray-700">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose DriveTrack?</h2>
            <p className="text-lg text-gray-600">DriveTrack provides advanced fleet management solutions to optimize your operations, save costs, and ensure driver safety.</p>
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-lg p-4 mt-8">
        <div className="container mx-auto text-center">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-6 rounded-full font-semibold hover:shadow-lg transition-shadow">
            AI CHAT BOT
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Home;

{/* <header className="bg-white shadow-lg p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
              DT
            </div>
            <h1 className="text-2xl font-bold text-gray-800">DriveTrack</h1>
          </div>
          <div className="flex items-center space-x-6">
            <Search className="text-gray-600 hover:text-indigo-500 cursor-pointer transition-colors" />
            <Bell className="text-gray-600 hover:text-indigo-500 cursor-pointer transition-colors" />
            <MessageSquare className="text-gray-600 hover:text-indigo-500 cursor-pointer transition-colors" />
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-1">
              <UserCircle className="text-white" size={28} />
            </div>
          </div>
        </div>
      </header> */}
