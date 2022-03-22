import React from 'react';
import './AboutUs.css';
import { aboutUs } from './aboutus.js';
import { useState, useEffect } from 'react'
import CardAboutUs from './CardAboutUs';
import { Link } from 'react-router-dom';

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
      <div className='home-btn-au'>
              <Link to='/home'>
                <button className='inicio-detailClinic'><img src="https://cdn-icons-png.flaticon.com/512/5100/5100262.png" alt="Home" height="50px"/></button>
              </Link>
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
