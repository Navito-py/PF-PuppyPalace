import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SearchBar/>
      <Link to="/formnewuser">
        <button>Crear usuario</button>
      </Link>
      <Link to="/formlogin">
        <button>Login</button>
      </Link>
    </div>
  );
}
