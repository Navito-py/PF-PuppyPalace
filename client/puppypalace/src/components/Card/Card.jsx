import React from 'react'

export default function Card({name, image, schedule}) {
    return (
        <div>
            <h4>{name}</h4>
            <img src={image} alt='' width='230px' height='160px' />
            <p>{schedule}</p>
        </div>
    )
}
