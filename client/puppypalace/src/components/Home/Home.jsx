import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ReserveBar from "../ReserveBar/ReserveBar";
import "./Home.css";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import vipets from "../../media/logoVIPetsTransparent.png";
import { useDispatch, useSelector } from "react-redux";
import { getClinics } from "../../redux/actions/index"
import { useEffect, useState } from "react";
import { filterCity } from "../../redux/actions"
import LostPets from "../LostPets/LostPets";
import '../LostPets/LostPets.css'


export default function Home() {
  const dispatch = useDispatch();
  const allClinics = useSelector((state) => state.clinics);
  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPerPage] = useState(5)
  const indexOfLastElement = currentPage * elementsPerPage
  const indexOfFirstElement = indexOfLastElement - elementsPerPage
  const currentElements = allClinics.slice(indexOfFirstElement, indexOfLastElement)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getClinics());
  }, [dispatch]);

  const handleCitySort = (e) => {
    e.preventDefault()
    dispatch(filterCity(e.target.id))
  }


  return (
    <div className="blue-backg">
      <nav className="navbar">
        <div className="brand-title">V.I.Pets</div>
        <div className="test-hide"><NavBar /></div>
        <div className="navbar-links">
          <ul>
            <li><a href="http://localhost:3000/home">Pagina principal</a></li>
            <li><a href="http://localhost:3000/home/profile">Perfil</a></li>
            <li><a href="http://localhost:3000/register">Nuevo Usuario</a></li>
            <li><a href="http://localhost:3000/login">Login</a></li>
            <li><a href="http://localhost:3000/emergencies">Emergencias</a></li>
          </ul>
        </div>
      </nav>
       
        
      <img src={vipets} alt="vipetslogo" width="200px" height="200px" />
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
              <h3>Cordoba</h3>
            </div>
            <div>
            
              <img
                src="https://www.serargentino.com/public/images/2020/07/15948461260-EL-arco-de-C%C3%B3rdoba-773x458.jpg"
                alt="cordoba"
                width="230px"
                height="160px"
                onClick={handleCitySort}
                id="cordoba"
              />
             
            </div>
          </div>

          <div>
            <div>
              <h3>Rosario</h3>
            </div>
            <div>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/e7/90/b4/monumento-a-la-bandera.jpg"
                alt="rosario"
                width="230px"
                height="160px"
                onClick={handleCitySort}
                id="rosario"
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
                onClick={handleCitySort}
                id="mendoza"
              />
            </div>
          </div>
        </div>
        <br />
        <div>
          <Paginate 
            elementsPerPage = {elementsPerPage}
            allElements = {allClinics.length}
            paginate = {paginate}
          />
        </div>
        <div
          className="cards"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {currentElements.map((e) => {
            return (
              <div key={e.id}>
                <Link to={`/clinics/${e.id}`}>
                  <Card
                    name={e.name}
                    image={e.image}
                    schedule={e.address}
                  />
                </Link>
              </div>
            );
          })}
        </div>
          <br/>

          <div className="carousel">
            <h2>Estoy perdido, ayudame a volver a casa</h2>
            <Link to="/lostpets">
            <LostPets/>
            </Link>
          </div>

      </div>
    </div>
  );
}

