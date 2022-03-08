import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-back">
      <h1>Bienvenidos a V.I.Pets</h1>

      <Link to="/formnewuser">
        <button>Nuevo Usuario</button>
      </Link>

      <Link to="/formlogin">
        <button>Login</button>
      </Link>

      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/emergencies">
        <button>Emergencias</button>
      </Link>

      <Link to="/qrcreator">
        <button>Creacion QR</button>
      </Link>
    </div>
  );
}
