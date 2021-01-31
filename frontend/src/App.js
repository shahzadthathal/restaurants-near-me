import React, { useState,useEffect } from 'react';


import logo from './logo.svg';
import './App.css';
import RestaurantsComponent from './RestaurantsComponent';

function App() {


  return (
    <div className="App">

    
      <div style={{ height: '100vh', width: '100%' }}>


      <RestaurantsComponent
        isMarkerShown
        googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyDoC_LRmWwCF_LnyH1Kf1tNSddMGSn2kW4"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

        
      </div>

    </div>
  );
}

export default App;
