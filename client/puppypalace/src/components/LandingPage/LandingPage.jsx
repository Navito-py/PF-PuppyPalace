import {React, useEffect} from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { getProfile } from "../../redux/actions";
import LostPets from "../LostPets/LostPets";

export default function LandingPage() {

  const dispatch = useDispatch()

  const token = useSelector(state => state.token)

  const user = useSelector(state => state.user)
  
  useEffect(() => {
    dispatch(getProfile(token))
  },[token])


  if(!token){
    return (
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
