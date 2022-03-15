import React from 'react'

export default function AdminClinicCard({name, direction, onDelete, image}) {
    return (
        <div width='250px'>
            <button onClick={(e) => onDelete(e)}>X</button>
            <h4>{name}</h4>
            <img src={image} width='200px'/>
            <p>{direction}</p>
        </div>
    )
}
