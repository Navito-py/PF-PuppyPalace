import React from "react";
import { Link } from "react-router-dom";
import error404 from "../../media/error404.png";


export default function NotFound() {
    return (
        <div >
         <img src={error404} type="png" alt="image404"/>
         <h2>Lo sentimos, no encontramos su busqueda</h2>
         <Link to="/"><button>Regresar</button></Link>
        </div>
    )
}