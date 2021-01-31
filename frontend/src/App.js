import React, { useState,useEffect } from 'react';


import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';

function App() {

  const [center, setCenter]= useState( {
    lat: 59.95,
    lng: 30.33
  } );

  const [zoom, setZoom]= useState(11)

  const [loading, setLoading]= useState(false)


    useEffect(() => {
      //if(!loading){
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("User current position")
          console.log(position)
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          setCenter({ lat: position.coords.latitude, lng: position.coords.longitude})
        });
        setLoading(true)
      //}
    }, [loading])


  return (
    <div className="App">
      
      <div style={{ height: '100vh', width: '100%' }}>
       {loading &&  <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDoC_LRmWwCF_LnyH1Kf1tNSddMGSn2kW4' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >

        </GoogleMapReact>
        }
        </div>

    </div>
  );
}

export default App;
