
import React, { useState,useEffect } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


 

const RestaurantsComponent = withScriptjs(withGoogleMap((props) =>{

    
    const [loading, setLoading]= useState(false)
    const [center, setCenter]= useState( {
        lat: 59.95,
        lng: 30.33
    } );
    const [zoom, setZoom]= useState(15)
    const [restaurants, setRestaurants]= useState([])

    useEffect(() => {
      if(!loading){
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("User current position")
          console.log(position)
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          setCenter({ lat: position.coords.latitude, lng: position.coords.longitude})
        });
       
        getRestuarants();
      }
    }, [loading])


    const getRestuarants = () => {
        console.log("getRestuarants called from useEffect()")

        fetch("http://localhost:3000/api/restaurants")
        .then(res => res.json())
        .then((result) => {
            console.log(result.data);
            setRestaurants(result.data)
            setLoading(true)
        })
    }
    const onMarkerClick = () => {
      console.log("marker clicked")
    }

    return (
      <div style={{ height: '100vh', width: '100%' }}>

        {loading && <GoogleMap
          defaultZoom={zoom}
          defaultCenter={center}
          >
           
              {restaurants.map((marker, index)=> {
                return (
                  <Marker
                    position={{ lat: marker.lat, lng: marker.long }}
                    key={marker._id}
                    title={marker.name}
                    onClick={onMarkerClick}
                  />
                )
              })}
            
          </GoogleMap>
        }
      </div>
    )
}))

export default RestaurantsComponent;