import React from 'react';
import './CardAboutUs.css';

export default function CardAboutUs({name, img, web, description, github, linkedin}) {
  return (
    <div className='Container'>
        <img src={img} alt="img not found" className='imagen-aboutus'/>
        <div className='description-aboutus'>
            <h2 className='name-aboutus'>{name}</h2>
            <p className='description'>{description}</p>
            <a href={github}><p className='description'><img src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" height="40px"/>Github/Web</p></a>
            <p className='description'>Si quieres saber mas de mi:</p>
            <a href={linkedin}><p className='description'><img src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955051.png?token=exp=1647951474~hmac=bd4143198b5cb065c6845b54e0c19e54" alt="" height="40px"/> Linkedin</p></a>
        </div>
    </div>
  )
}

