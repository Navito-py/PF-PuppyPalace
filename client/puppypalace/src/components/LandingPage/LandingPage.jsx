import {React, useEffect} from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { getProfile } from "../../redux/actions";
import LostPets from "../LostPets/LostPets";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import { useState } from "react";
import { getClinics } from "../../redux/actions/index"
import '../LostPets/LostPets.css'
import SearchBar from "../SearchBar/SearchBar";

export default function LandingPage() {

  const dispatch = useDispatch()

  const token = useSelector(state => state.token)
  const allClinics = useSelector((state) => state.clinics);
  const user = useSelector(state => state.user)
  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPerPage] = useState(3)
  const indexOfLastElement = currentPage * elementsPerPage
  const indexOfFirstElement = indexOfLastElement - elementsPerPage
  const currentElements = allClinics.slice(indexOfFirstElement, indexOfLastElement)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getClinics());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProfile(token))
  },[token])


  if(!token){
    return (
      <div className="landing-back">
      <div className="welcome-text">
        <h1 className="h1-title">Bienvenidos a VIPets</h1>

      </div>
      <div className="parent-button">
        <div className="order-btns">
          <Link to="/emergencies">
            <button type="button" class="btn primary-emergency">
              Emergencias
            </button>
          </Link>
          
          <Link to="/register">
            <button type="button" class="btn primary">
              Nuevo Usuario
            </button>
          </Link>

          <Link to="/login">
            <button type="button" class="btn primary">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="break2"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
      
      <div className="Carousel-logo-searchbar">
          <div className="carousel">
                <h2 className="lost-please1">Estoy perdido, ayudame a volver a casa</h2>
                <Link to="/lostpets" className="lost-pets">
                <LostPets/>
                </Link>
          </div>
        </div>
      <div className="break2"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
        {/*card clinicas*/}
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
                <Link to={`/login`}>
                  <Card
                    name={e.name}
                    image={e.image}
                    schedule={e.address}
                    province={e.province}
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
        <div className="break2"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
    </div>
  )}else if(token){
    return(
      <div>
        <div className="landing-back">
      <div className="welcome-text">
        <h1 className="h1-title">Bienvenidos a V.I.Pets</h1>
      </div>
        <div className="parent-button">
              <div className="order-btns">
                <Link to="/emergencies">
                  <button type="button" class="btn primary-emergency">
                    Emergencias
                  </button>
                </Link>
                
{/*                 <Link to="/register">
                  <button type="button" class="btn primary">
                    Nuevo Usuario
                  </button>
                </Link>

                <Link to="/login">
                  <button type="button" class="btn primary">
                    Login
                  </button>
                </Link> */}

                <Link to="/home">
                  <button type="button" class="btn primary">
                    Home
                  </button>
                </Link>
                <Link to="/qrcreator">
                  <button type="button" class="btn primary">
                    Creacion QR
                  </button>
                </Link>
                {
                  user.isAdmin === true &&
                  <Link to="/admin/controls">
                  <button type="button" class="btn primary">
                    Admin
                  </button>
                </Link>
                }
              </div>
        </div>
         <div className="break2"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
           <div className="Carousel-logo-searchbar">
              <div className="carousel">
                    <h2 className="lost-please1">Estoy perdido, ayudame a volver a casa</h2>
                    <Link to="/lostpets" className="lost-pets">
                    <LostPets/>
                    </Link>
              </div>
           </div>
         <div className="break2"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
      </div>
    </div>
    )
  }
}
