import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Link to="/formnewuser">
        <button>Crear usuario</button>
      </Link>
      <Link to="/formlogin">
        <button>Login</button>
      </Link>
    </div>
  );
}
