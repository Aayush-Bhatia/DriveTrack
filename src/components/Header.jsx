// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Driver Management System</h1>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><Link to="/driver-profile">Profile</Link></li>
//           <li><Link to="/logout">Logout</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Branding/Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
            DT
          </div>
          <h1 className="text-2xl font-bold text-gray-800">DriveTrack</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/home" className="hover:text-gray-200 transition-colors duration-300">Home</Link>
          <Link to="/" className="hover:text-gray-200 transition-colors duration-300">Login</Link>
          <Link to="/signup" className="hover:text-gray-200 transition-colors duration-300">Signup</Link>
          <Link to="/driver-form" className="hover:text-gray-200 transition-colors duration-300">Form</Link>
          <Link to="/driver-dashboard" className="hover:text-gray-200 transition-colors duration-300">Dashboard</Link>
          <Link to="/salary-summary" className="hover:text-gray-200 transition-colors duration-300">Salary Summary</Link>
          <Link to="/task-management" className="hover:text-gray-200 transition-colors duration-300">Task Management</Link>
          <Link to="/live-track" className="hover:text-gray-200 transition-colors duration-300">Live Track</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;




