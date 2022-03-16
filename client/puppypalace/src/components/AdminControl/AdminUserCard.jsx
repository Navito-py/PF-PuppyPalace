import React from 'react'

export default function AdminUserCard({name, lastname, username, phone, direction, image, email}) {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <button>X</button>
            <p>{name} {lastname}</p>
            <p>{username}</p>
            <p>{phone}</p>
            <p>{direction}</p>
            <p>{email}</p>
            <img src={image} width='100px'/>
        </div>
    )
}
