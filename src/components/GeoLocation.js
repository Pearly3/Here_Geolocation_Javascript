import React, { useState, useEffect } from 'react';

const Geolocation = ({ apiKey, appId }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const H = window.H;

    const platform = new H.service.Platform({
      'apikey': apiKey
    });

    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(
      document.getElementById('mapdiv'),
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 },
      }
    );

    new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          map.setCenter({ lat: latitude, lng: longitude });
          map.setZoom(14);

          const marker = new H.map.Marker({ lat: latitude, lng: longitude });
          map.addObject(marker);
        }, (err) => {
          setError("Error getting location: " + err.message);
        });
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getCurrentPosition();
  }, [apiKey]);

  return (
    <div>
      <h2>Current Device Position on HERE Map</h2>
      {error && <p>{error}</p>}
      <div id="mapdiv" style={{ width: '100%', height: '500px', marginTop: '15px' }}></div>
    </div>
  );
};

export default Geolocation;