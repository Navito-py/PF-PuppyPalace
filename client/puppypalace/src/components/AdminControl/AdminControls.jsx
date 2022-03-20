import React from 'react'
import {Link} from 'react-router-dom'
import './AdminControl.css'


export default function AdminControls() {
    return (
        <div className='controlersAdmin'>
            <Link to='/home'>
                    <button className="buttonHome"><img src="https://cdn-icons-png.flaticon.com/512/5100/5100262.png" alt="Home" height="50px"/></button>
            </Link>
                <div className="break"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
                    <p className='titleAdmin'>Administrador: VIPets</p>
                        <div className='admins'>
                            <Link to='users'>
                            <button className='btnAdmin'>Users</button>
                            </Link>
                            <Link to='Clinics'>
                            <button className='btnAdmin'>Clinics</button>
                            </Link>
                        </div>
                <div className="break"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
        </div>
    )
}
