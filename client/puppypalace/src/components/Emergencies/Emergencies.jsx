import React from "react";
import Map from "../Map/Map";

export default function Emergencies() {
  const location = {
    address: 'Santiago Bernabeu, Madrid, Espana',
    lat: 40.452360724771694,
    lng: -3.6906482727964423,
  }

  return (
    <div>
      <h1>Emergencias</h1>
      <Map location={location} zoomLevel={17} />
    </div>
  );
}
