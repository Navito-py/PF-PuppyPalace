import React from 'react'
import {Link} from 'react-router-dom'
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile'>
            <div className='card-profile'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png' width = '100px' height='100px'/>
                <p>Nombre de Usuario:  </p>
                <p>Nombres: </p>
                <p>Direccion: </p>
                <Link to ='createPet'>
                <button >Crear mascota</button>
                </Link>
            </div>
        </div>
    )
}
