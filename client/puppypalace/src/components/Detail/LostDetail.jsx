import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLostDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import vipets from '../../media/logoVIPetsTransparent.png';


export default function LostDetail(){
    const dispatch = useDispatch();
    const { id } = useParams();
    const lostDetails = useSelector((state)=> state.pets)
    
    useEffect(()=>{
        dispatch(getLostDetail(id))
    }, [dispatch, id])

    return (
        <div>
            <a style={{fontSize:'25px'}} href="https://vipets.vercel.app/lostpets/">Volver</a>
            {
                lostDetails ?
                <div> 
                    <div>
                <p>Nombre: {lostDetails.name}</p>
                <p>Imagen: <img src={lostDetails.image} alt="vipetslogo" width="200px" height="200px" /></p>
                <p>Genero: {lostDetails.gender}</p>
                <p>Especie: {lostDetails.type}</p>
                <p>Raza: {lostDetails.breed}</p>
                <p>Edad: {lostDetails.age}</p>
                <p>Altura: {lostDetails.height}</p>
                <p>Peso: {lostDetails.weight}</p>
                <p>Teléfono: {lostDetails.phone}</p>
               </div>
                </div> : <img src={vipets} alt="noInfo" /> 
            }
        </div>
            
    )

}