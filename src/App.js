import React from 'react';
import Geolocation from './components/GeoLocation';
const apiKey = 't0uaLsJOpQUS7lBGXWjFQp7i5O7fmGpFIZOPE3Gw9u4';
const appId = 'NzN9083Q9WdlHxkWVyfv';
function App() {
  return (
    <div className="App">
      <Geolocation apiKey={apiKey} appId={appId} />
    </div>
  );
}
export default App;