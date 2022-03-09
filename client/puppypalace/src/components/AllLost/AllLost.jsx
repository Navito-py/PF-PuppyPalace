import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPets } from "../../redux/actions";
import vipets from "../../media/logoVIPetsTransparent.png";
import LostCard from "../Card/LostCard";
import "./AllLost.css";

export default function AllLost() {
  const dispatch = useDispatch();
  const allPets = useSelector((state) =>
    state.pets.filter((e) => e.status === "Lost")
  );

  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);
  
return (
    <div className="lostCards">
        {
            allPets.map(e => {
              return (
                <div key={e.id} >
                  <LostCard name={e.name} image={e.image} type={e.type} />

                </div>
              )
            })
          /*   <div>
                <p>Nombre: {allPets.name}</p>
                <p>Imagen: <img src={allPets.image} alt="vipetslogo" width="200px" height="200px" /></p>
                <p>Genero: {allPets.gender}</p>
                <p>Especie: {allPets.type}</p>
                <p>Raza: {allPets.breed}</p>
                <p>Edad {allPets.age}</p>
                <p>Altura: {allPets.height}</p>
                <p>Peso {allPets.weight}</p>
               </div>
               : <img src={vipets} alt="noInfo" /> */
        }
    </div>
)
}