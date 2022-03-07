import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import LocationPin from '../LocationPin/LocationPin';


export default function Map({ location, zoomLevel }) {

  return (
    <div className="map">
    <h2 className="map-h2">Mirate ese mapa papá</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBRQUhLNT4oiXb2CzbNIOlBug5P0RquO9U' }} //api key
        defaultCenter={location} // es simplemente el centro del mapa cuando se carga por primera vez
        defaultZoom={zoomLevel} // define la escala inicial del mapa
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  );
}


  
