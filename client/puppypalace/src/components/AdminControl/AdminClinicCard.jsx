import React from 'react'
import { Link } from 'react-router-dom'
import './AdminClinicCard.css'

export default function AdminClinicCard({id, hours, name, direction, onDelete, image, city}) {
    return (
        <div className='cardPrincipal'>
            <button className='btn-clear' onClick={() => onDelete(id)}>X</button>
            <h4 style={{textAlign: 'center'}}>{name}</h4>
            <img className='imagen' src={image} width='200px'/>
            <p className='dirandcity' >{direction}</p>
            <p className='dirandcity' >{city}</p>
            <p className='dirandcity' >{hours}</p>
            <Link to={`/admin/controls/Clinics/${id}`}>
                <button className='btnAdmin1'>Modificar</button>
            </Link>
        </div>
    )
}
