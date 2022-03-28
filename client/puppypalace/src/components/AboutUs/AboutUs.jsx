import React from 'react';
import './AboutUs.css';
import { aboutUs } from './aboutus.js';
import { useState, useEffect } from 'react'
import CardAboutUs from './CardAboutUs';
import { Link } from 'react-router-dom';
import logoVipets from "../../media/VIPETS_LOGO.png";

export default function AboutUs() {
  const [selected, setSelected] = useState("aboutUs");
  const [ data, setData ] = useState([]);

  useEffect(()=>{
      switch(selected){
        case "aboutUs":
            setData(aboutUs);
            break;
            default:
            setData(aboutUs);
    }
},[selected]);

  return (
    <div className='all'>
     <div className="First">
        <div className="Second">
          <div className="welcome-text">
            <Link to='/'>
             <h1 className="h1-title">VIPets <img src={logoVipets} alt="" height='70px'/></h1>
            </Link>
            <div className="rigth">
           </div>
          </div>
        </div>
     </div> 
        <div className="AboutUs">
          <h1 className='title-AboutUs'>Grupo 10: Soy Henry Bootcamp</h1>
                {data.map((data)=>{ 
                  return (
                    <Link to={'/aboutus'}>
                      <CardAboutUs
                         img={data.img}
                         name={data.name}
                         github={data.github}
                         description={data.description}
                         linkedin={data.linkedin}
                      />
                    
                    </Link>

                  )
                })
              } 
        </div>
    </div>
  )
}
