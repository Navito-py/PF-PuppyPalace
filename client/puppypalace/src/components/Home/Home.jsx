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
  const authtoken = useSelector(state => state.token)
  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPerPage] = useState(3)
  const indexOfLastElement = currentPage * elementsPerPage
  const indexOfFirstElement = indexOfLastElement - elementsPerPage
  const currentElements = allClinics.slice(indexOfFirstElement, indexOfLastElement)
 

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getClinics(authtoken));
  }, [dispatch]);

  const handleCitySort = (e) => {
    e.preventDefault()
    dispatch(filterCity(e.target.id))
  }

  return (
    <div className="blue-backg">
      <nav className="navbar">
        <div className="test-hide">
          <NavBar />
          </div>
            <Link to="/" className="landingLink"><div className="brand-title" >VIPets<img className="vipets-logo" src={vipets} alt="vipetslogo" width="100px" height="100px"/></div></Link>

        <div className="navbar-links">
          <ul>
            <a href="https://vipets.vercel.app/home">Pagina principal</a>
            <a href="https://vipets.vercel.app/home/profile">Perfil</a>
            {/* <li><a href="http://localhost:3000/register">Nuevo Usuario</a></li>
            <li><a href="http://localhost:3000/login">Login</a></li>
          */}
            <a href="https://vipets.vercel.app/emergencies">Emergencias</a>
            <a href="https://vipets.vercel.app/aboutus">Sobre Nosotros</a>
          </ul>
        </div>
      </nav>
      
       <div className="Carousel-logo-searchbar">
          <div className="carousel">
                <h2 className="lost-please-home"><img src="https://i.pinimg.com/originals/38/2a/25/382a257e82075d16cec2a597b4ad6f23.gif" alt="" height="100px"/> Estoy perdido, ayudame a volver a casa</h2>
                <Link to="/lostpets" className="lost-pets">
                <LostPets/>
                </Link>
              </div>
          
        </div>

      <div>

        <div className="contenedor_de_ciudades">

            <h2 className="title-cities"><img src="https://img.icons8.com/cotton/344/dog-sit--v1.png" alt="" height="50px" />Elige la ciudad que desees<img src="https://img.icons8.com/offices/344/cat.png" alt="" height="50px" /></h2>
            <br />
            <div className="all-cities">
              <div>
                <div>
                  <h3>Cordoba</h3>
                </div>
                <div>
                
                  <img
                    className="photo-cities"
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
                    className="photo-cities"
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
                    className="photo-cities"
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
        </div>

        <div className="SearchBar-Reserve">

            <div className="barSearch">
              <SearchBar />
            </div>

           {/*  <div className="barReserve">
              <ReserveBar />
            </div> */}
        </div>
       
        <div
          className="cards"
        >
          {currentElements.map((e) => {
            return (
              <div key={e.id}>
                <Link to={`/clinics/${e.id}`}>
                  <Card
                    name={e.name}
                    image={e.image}
                    schedule={e.address}
                    province={e.province}
                    phone={e.phone}
                    emergency={e.emergency}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        <div>
          <Paginate 
            elementsPerPage = {elementsPerPage}
            allElements = {allClinics.length}
            paginate = {paginate}
          />
        </div>

      <div className="break"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
      </div>
    </div>
  );
}

