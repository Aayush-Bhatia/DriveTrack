// import React, { useState, useEffect } from 'react';

// const DriverProfile = () => {
//   const [profileData, setProfileData] = useState({
//     name: "John Doe",
//     company: "XYZ Transport",
//     email: "john@example.com",
//     phone: "123-456-7890"
//   });

//   useEffect(() => {
//     // Fetch driver profile data from an API
//     // Example: fetch('/api/driver-profile').then(res => res.json()).then(data => setProfileData(data));
//   }, []);

//   return (
//     <div className="profile-container">
//       <h2>Driver Profile</h2>
//       <p><strong>Name:</strong> {profileData.name}</p>
//       <p><strong>Company:</strong> {profileData.company}</p>
//       <p><strong>Email:</strong> {profileData.email}</p>
//       <p><strong>Phone:</strong> {profileData.phone}</p>
//     </div>
//   );
// };

// export default DriverProfile;





// import { useParams } from 'react-router-dom';

// const DriverProfile = () => {
//   const { id } = useParams();
//   const driver = mockDriverLocations.find(driver => driver.id === parseInt(id));

//   if (!driver) {
//     return <div>Driver not found</div>;
//   }

//   return (
//     <div>
//       <h1>{driver.name}'s Profile</h1>
//       <p>Location: Latitude {driver.lat}, Longitude {driver.lng}</p>
//     </div>
//   );
// };

// export default DriverProfile;


import React from 'react';
import { ArrowLeft, Calendar, Star, Clock, Calendar as CalendarIcon, Award, Brain } from 'lucide-react';

const DriverProfile = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <ArrowLeft className="mr-2" />
        <h2 className="text-xl font-bold">Driver Profile</h2>
      </div>
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <h3 className="font-semibold">Driver Name</h3>
          <p className="text-gray-600">981022XXXX</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Calendar className="mr-2" />
          <div>
            <p className="font-semibold">Attendance</p>
            <p>3/30</p>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Record Payment
        </button>
      </div>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 mr-2" />
          <span className="font-semibold">1.0</span>
          <span className="text-gray-500 ml-2">2 Ratings, 2 Reviews</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Rate Now
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { icon: Clock, label: 'Very Punctual', value: 0 },
          { icon: CalendarIcon, label: 'Quite Regular', value: 0 },
          { icon: Award, label: 'Exceptional Service', value: 0 },
          { icon: Brain, label: 'Great Attitude', value: 0 },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-gray-100 rounded-full p-3 mb-2 mx-auto w-12 h-12 flex items-center justify-center">
              <item.icon className="text-gray-600" size={20} />
            </div>
            <p className="text-xs">{item.label}</p>
            <p className="font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
      <button className="text-blue-600 font-semibold w-full text-left">
        Feedback
      </button>
    </div>
  );
};

export default DriverProfile;


