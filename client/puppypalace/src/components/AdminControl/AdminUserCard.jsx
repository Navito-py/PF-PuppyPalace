import React from 'react'
import './AdminUserCard.css'

export default function AdminUserCard({changeAcount, isadmin, id ,name, onDelete, lastname, username, phone, direction, image, email}) {
    return (
        <div className='cardDiv'>
            {
                username === 'Vipets'? <p>Superadmin</p> : <button onClick={() => onDelete(id)} className='eliminatebutton'>X</button>
            }
            <p>{name} {lastname}</p>
            <p>{username}</p>
            <p>{phone}</p>
            {
                username === 'Vipets'? <p>Inmodificable</p> : <button onClick={() => changeAcount(id)}>Cambiar Derechos</button>
            }
            <p>{direction}</p>
            <p>{email}</p>
            {
                isadmin? <p>Admin</p> : <p>User</p>
            }
            <img className='img' src={image} width='100px'/>
        </div>
    )
}
