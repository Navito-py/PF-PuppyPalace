import React from "react";
import "./Emergencies.css";
import Map from "../Map/Map";
import {Link} from 'react-router-dom'

export default function Emergencies() {
  return (
    <div className="emergencies">
      <Link to='/'>
        <button className="buttonHome"><img src="https://cdn-icons-png.flaticon.com/512/5100/5100262.png" alt="Home" height="50px"/></button>
        </Link>
      <h1 className="title-emergencies">Emergencias</h1>
      <Map />
    </div>
  );
}
