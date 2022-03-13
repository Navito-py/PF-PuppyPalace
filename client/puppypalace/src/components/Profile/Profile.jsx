import React from 'react'
import {Link} from 'react-router-dom'

export default function Profile() {
    return (
        <div>
            <img src='' width = '100px' height='100px'/>
            <p>Nombre de Usuario: </p>
            <p>Nombres: </p>
            <p>Direccion: </p>
            <Link to ='createPet'>
            <button >Crear mascota</button>
            </Link>
        </div>
    )
}
