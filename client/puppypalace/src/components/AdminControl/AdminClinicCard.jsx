import React from 'react'
import './AdminClinicCard.css'

export default function AdminClinicCard({id, hours, name, direction, onDelete, image, city}) {
    return (
        <div className='cardPrincipal'>
            <button style={{margin: '5px'},{backgroundColor: 'red'}} onClick={() => onDelete(id)}>X</button>
            <h4 style={{textAlign: 'center'}}>{name}</h4>
            <img className='imagen' src={image} width='200px'/>
            <p className='dirandcity' >{direction}</p>
            <p className='dirandcity' >{city}</p>
            <p className='dirandcity' >{hours}</p>
        </div>
    )
}
