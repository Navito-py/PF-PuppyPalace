import React from 'react'

export default function Card({name, image, schedule}) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt='' width='230px' height='160px' />
            <h3>{schedule}</h3>
        </div>
    )
}
