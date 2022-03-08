import React from 'react'
import {Link} from 'react-router-dom'

export default function Profile() {
    return (
        <div>
            <img src='https://pm1.narvii.com/6650/1e1210b9c20ad495d949496e77b195597813315f_hq.jpg' width = '100px' height='100px'/>
            <p>Nombre de Usurario: </p>
            <p>Nombres: </p>
            <p>Direccion: </p>
            <Link to ='createPet'>
            <button >Crear mascota</button>
            </Link>
        </div>
    )
}
