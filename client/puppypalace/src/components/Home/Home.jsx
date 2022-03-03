import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ReserveBar from "../ReserveBar/ReserveBar";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="barTop">
        <div className="divnavbar">
          <NavBar />
        </div>
        <Link to="/formnewuser">
          <button>Crear usuario</button>
        </Link>
        <Link to="/formlogin">
          <button>Ingresar</button>
        </Link>
      </div>
      <br />
      <div className="barSearch">
        <SearchBar />
      </div>
      <br />
      <div className="barReserve">
        <ReserveBar />
      </div>
      <br />
      <div>
        <h2 className="title-cities">Elige la ciudad que desees</h2>
        <div>
          <div className="cordoba-position">
            <div className="cordoba">
              <h3>Rosario</h3>
            </div>
            <div className="img-cordoba">
              <img
                src="https://www.serargentino.com/public/images/2020/07/15948461260-EL-arco-de-C%C3%B3rdoba-773x458.jpg"
                alt="cordoba"
                width="230px"
                height="160px"
              />
            </div>
          </div>

          <div className="rosario-position">
            <div className="rosario">
              <h3>Cordoba</h3>
            </div>
            <div className="img-rosario">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/e7/90/b4/monumento-a-la-bandera.jpg"
                alt="rosario"
                width="230px"
                height="160px"
              />
            </div>
          </div>

          <div className="mendoza-position">
            <div className="mendoza">
              <h3>Mendoza</h3>
            </div>
            <div className="img-mendoza">
              <img
                src="https://pasilloturistico.com/wp-content/uploads/2018/11/Mendoza-Argentina.jpg"
                alt="Mendoza"
                width="230px"
                height="160px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
