import React from "react";
import "./Emergencies.css";
import Map from "../Map/Map";
import {Link} from 'react-router-dom'
import vipets from "../../media/logoVIPetsTransparent.png";

export default function Emergencies() {
  return (
    <div className="emergencies">
      <div className="TopBar-Emergencies">
      <Link to="/" className="landingLink"><div className="brand-title1" >VIPets<img className="vipets-logo" src={vipets} alt="vipetslogo" width="100px" height="100px"/></div></Link>
      </div>
      <h1 className="title-emergencies">Emergencias</h1>
      <Map />
      <div className="break-emergency"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
    </div>
  );
}
