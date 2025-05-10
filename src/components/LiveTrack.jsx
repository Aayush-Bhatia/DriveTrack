import React, { useEffect, useState } from 'react';

const LiveTrack = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        });
      } else {
        console.log("Geolocation not supported");
      }
    };

    updateLocation();
    const interval = setInterval(updateLocation, 1000); // Update location every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-xl font-bold mb-4">Live Location Tracking</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        {location.lat && location.lon ? (
          <div>
            <p><strong>Latitude:</strong> {location.lat}</p>
            <p><strong>Longitude:</strong> {location.lon}</p>
          </div>
        ) : (
          <p>Fetching location...</p>
        )}
      </div>
    </div>
  );
};

export default LiveTrack;
