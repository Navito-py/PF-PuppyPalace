import React from 'react'
import {Link} from 'react-router-dom'



export default function AdminControls() {
    return (
        <div>
            <Link to='users'>
            <button>Users</button>
            </Link>
            <Link to='Clinics'>
            <button>Clinics</button>
            </Link>
        </div>
    )
}
