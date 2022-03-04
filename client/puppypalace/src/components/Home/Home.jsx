import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ReserveBar from "../ReserveBar/ReserveBar";
import "./Home.css";
import Card from "../Card/Card";
import vipets from "../../media/logoVIPetsTransparent.png";

export default function Home() {
  const info = [
    {
      id: "1",
      name: "Clínica Veterinaria Patagonia",
      address: "Juan F. Cobos 231",
      province: "Mendoza",
      city: "Laprida",
      activeHours: "Lunes a Viernes 10 a 13 hs // 17 a 20 hs",
      phone: 2614321309,
      email: "emailfalso123@hotmail.com",
      image:
        "https://institutoferrer.com/wp-content/uploads/2020/08/AUXILIAR-VETERINARIA.jpg",
    },

    {
      id: "2",
      name: "Veterinaria San Roque, Hospital Veterinaria",
      address: "Av. Juan B. Justo 535",
      province: "Santa Fe",
      city: "Rosario",
      activeHours: "Lunes a Viernes 9:30 a 20 hs",
      phone: 2614233937,
      email: "emailfalso123@hotmail.com",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_PVEZ5e0LqLBdbYe7ioLlKZiNIFtv8tmpg&usqp=CAU",
    },
    {
      id: "3",
      name: "Veterinaria Nachito, amamos el mate amargo",
      address: "Av. San Martin 678",
      province: "Cordoba",
      city: "Cordoba",
      activeHours: "Lunes a Viernes 8:30 a 21 hs",
      phone: 2614233937,
      email: "emailfalso123@hotmail.com",
      image:
        "https://i.pinimg.com/originals/33/db/d6/33dbd6db49fe72c3544ee6943231ea85.jpg",
    },
  ];

  return (
    <div>
      <div className="barTop">
        <div>
          <img src={vipets} alt="vipetslogo" width="200px" height="200px" />
        </div>
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
        <br />
        <div className="all-cities">
          <div>
            <div>
              <h3>Rosario</h3>
            </div>
            <div>
              <img
                src="https://www.serargentino.com/public/images/2020/07/15948461260-EL-arco-de-C%C3%B3rdoba-773x458.jpg"
                alt="cordoba"
                width="230px"
                height="160px"
              />
            </div>
          </div>

          <div>
            <div>
              <h3>Cordoba</h3>
            </div>
            <div>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/e7/90/b4/monumento-a-la-bandera.jpg"
                alt="rosario"
                width="230px"
                height="160px"
              />
            </div>
          </div>

          <div>
            <div>
              <h3>Mendoza</h3>
            </div>
            <div>
              <img
                src="https://pasilloturistico.com/wp-content/uploads/2018/11/Mendoza-Argentina.jpg"
                alt="Mendoza"
                width="230px"
                height="160px"
              />
            </div>
          </div>
        </div>
        <br />
        <div
          className="cards"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {info.map((e) => {
            return (
              <div>
                <Link to={`detail/${e.id}`}>
                  <Card
                    name={e.name}
                    image={e.image}
                    schedule={e.activeHours}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
