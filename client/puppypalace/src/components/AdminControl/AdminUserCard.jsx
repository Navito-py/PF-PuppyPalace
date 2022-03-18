import React from 'react'
import './AdminUserCard.css'

export default function AdminUserCard({ id ,name, onDelete, lastname, username, phone, direction, image, email}) {
    return (
        <div className='cardDiv'>
            <button onClick={() => onDelete(id)} className='eliminatebutton'>X</button>
            <p>{name} {lastname}</p>
            <p>{username}</p>
            <p>{phone}</p>
            <p>{direction}</p>
            <p>{email}</p>
            <img className='img' src={image} width='100px'/>
        </div>
    )
}
