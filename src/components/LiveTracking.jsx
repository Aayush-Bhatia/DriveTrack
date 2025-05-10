// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { mockDriverLocations } from '../data/mockData';

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = {
//   lat: 0,
//   lng: 0
// };

// const LiveTracking = () => {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2">Live GPS Tracking</h2>
//       <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={2}
//         >
//           {mockDriverLocations.map((location, index) => (
//             <Marker
//               key={index}
//               position={{ lat: location.lat, lng: location.lng }}
//               title={`Driver ${index + 1}`}
//             />
//           ))}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default LiveTracking;
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { mockDriverLocations } from '../data/mockData'; // Correct path


// Map container styles
const containerStyle = {
  width: '100%',
  height: '400px'
};

// Initial center of the map (somewhere over the world)
const center = {
  lat: 20.5937, // Default latitude (e.g., India)
  lng: 78.9629  // Default longitude (e.g., India)
};

// Mock data for driver locations (randomly generated)
const generateRandomLocations = (numDrivers) => {
  const locations = [];
  for (let i = 0; i < numDrivers; i++) {
    // Generate random latitude and longitude around a certain range (for example, in India)
    const randomLat = 20 + Math.random() * 10;  // Latitude range
    const randomLng = 75 + Math.random() * 10;  // Longitude range
    locations.push({ lat: randomLat, lng: randomLng });
  }
  return locations;
};

const LiveTracking = () => {
  const [driverLocations, setDriverLocations] = useState(generateRandomLocations(5));

  useEffect(() => {
    // Simulate real-time location updates
    const interval = setInterval(() => {
      setDriverLocations(generateRandomLocations(5));  // Update locations every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Live GPS Tracking (Mock Data)</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
        >
          {driverLocations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              title={`Driver ${index + 1}`}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LiveTracking;
