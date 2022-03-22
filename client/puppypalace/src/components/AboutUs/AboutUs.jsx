import React from 'react';
import './AboutUs.css';
import { aboutUs } from './aboutus.js';
import { useState, useEffect } from 'react'


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
    <div className='AboutUs'>
      <div className="container">
              {data.map((d)=>(
                <div className="item">
                    <img src = {d.img}
                     alt="" className='img-aboutus'/>
                    <h3 className='h3AboutUs'>{d.name}</h3>
                    <a href={d.link}>Web</a>
                    <a href={d.link_Github}>GitHub</a>
                    <a href={d.link_linkedin}>LinkedIn</a>
                    <p>{d.description}</p>
                </div>
                ))} 
      </div>
    </div>
  )
}
