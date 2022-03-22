import React, { useState } from "react";
import "./Map.css";


export default function Map() {
  const [city, setCity] = useState("");

  function mapsAllCities() {
    if (city === "rosario") {
      return (
        <iframe
          className="size-maps"
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d107124.29988013311!2d-60.7537568!3d-32.9606614!3m2!1i1024!2i768!4f13.1!2m1!1sveterinarias%2024%20hs%20rosario%20santa%20fe!5e0!3m2!1ses-419!2sco!4v1646745201238!5m2!1ses-419!2sco"
          allowfullscreen=""
          //loading="lazy"
        ></iframe>
      );
    }
    if (city === "cordoba") {
      return (
        <iframe
          className="size-maps"
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d108976.30304076688!2d-64.2842367!3d-31.4000865!3m2!1i1024!2i768!4f13.1!2m1!1sveterinarias%2024%20hs%20%20Cordoba%2C%20cordoba!5e0!3m2!1ses-419!2sco!4v1646745215808!5m2!1ses-419!2sco"
          allowfullscreen=""
         // loading="lazy"
        ></iframe>
      );
    }
    if (city === "mendoza") {
      return (
        <iframe
          className="size-maps"
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d53604.90163921768!2d-68.8700302!3d-32.8900676!3m2!1i1024!2i768!4f13.1!2m1!1sveterinarias%2024%20hs%20%20Mendoza%2C%20mendoza!5e0!3m2!1ses-419!2sco!4v1646745227530!5m2!1ses-419!2sco"
          allowfullscreen=""
        //  loading="lazy"
        ></iframe>
      );
    }
    if (!city) {
      return(
        <iframe
        className="size-maps"
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d108976.30304076688!2d-64.2842367!3d-31.4000865!3m2!1i1024!2i768!4f13.1!2m1!1sveterinarias%2024%20hs%20%20Cordoba%2C%20cordoba!5e0!3m2!1ses-419!2sco!4v1646745215808!5m2!1ses-419!2sco"
          allowfullscreen=""
        //  loading="lazy"
        />
      )
    }
  }
  
  return (
    <div>
      <div className="containerp-5">
        <div className="filter-column">
          <h1 className="titleemergencies">Selecciona la ciudad para ver las clinicas 24h</h1>
          <br />
          <button className="emergencies-button"
            aria-label="Default select example"
            value="rosario"
            onClick={(e) => {
              const Rosario = e.target.value;
              setCity(Rosario);
            }}>
              Rosario
          </button>
          
          <button className="emergencies-button"
            aria-label="Default select example"
            value="cordoba"
            onClick={(e) => {
              const Cordoba = e.target.value;
              setCity(Cordoba);
            }}>
              Córdoba
          </button>

          <button className="emergencies-button"
            aria-label="Default select example"
            value="mendoza"
            onClick={(e) => {
              const Mendoza = e.target.value;
              setCity(Mendoza);
            }}>
              Mendoza
          </button>
        
       {/*
        <select
          class="form-select" 
          aria-label="Default select example"
          onChange={(e) => {
            const selectedCity = e.target.value;
            setCity(selectedCity);
          }}
        >
          <option value="" disabled="">
            - Selecciona la ciudad -
          </option>
          <option value="rosario">Rosario</option>
          <option value="cordoba">Cordoba</option>
          <option value="mendoza">Mendoza</option>
        </select>*/}
        </div>
      <div className="map-right">{mapsAllCities()}</div>
      </div>
    </div>
  );
}
