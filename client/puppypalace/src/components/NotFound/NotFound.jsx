import React from "react";
import { Link } from "react-router-dom";
import error404 from "../../media/error404.png";
import '../NotFound/NotFound.css'

export default function NotFound() {
    return (
        <div className="container" >
            <div className="r">
                <Link to='/'>
                    <button className="buttonHomeNotFound"><img src="https://cdn-icons-png.flaticon.com/512/5100/5100262.png" alt="Home" height="50px"/></button>
                </Link>

            </div>
            <div className="break-404"><img className="center-img1" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/>Lo sentimos, no encontramos su busqueda<img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
            <img className="img404" src={error404} type="png" alt="image404"/>
           
            <div className="break-404"><img className="center-img2" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
        </div>
    )
}