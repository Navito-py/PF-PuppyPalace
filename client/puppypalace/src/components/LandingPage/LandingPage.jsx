import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-back">
      <div className="welcome-text">
        <h1>Bienvenidos a V.I.Pets</h1>
      </div>

      <div className="parent-button">
        <div className="order-btns">
          <Link to="/register">
            <button type="button" class="btn btn-primary">
              Nuevo Usuario
            </button>
          </Link>

          <Link to="/login">
            <button type="button" class="btn btn-primary">
              Login
            </button>
          </Link>

          <Link to="/home">
            <button type="button" class="btn btn-primary">
              Home
            </button>
          </Link>

          <Link to="/emergencies">
            <button type="button" class="btn btn-primary">
              Emergencias
            </button>
          </Link>

          <Link to="/qrcreator">
            <button type="button" class="btn btn-primary">
              Creacion QR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
