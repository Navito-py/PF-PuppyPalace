import React from 'react'
import {Link} from 'react-router-dom'
import './AdminControl.css'
import vipets from "../../media/logoVIPetsTransparent.png";

export default function AdminControls() {
    return (
        <div className='controlersAdmin'>
            <Link to='/home'>
                    <button className="buttonHome"><div className="brand-title-adm" >VIPets<img className="vipets-logo" src={vipets} alt="vipetslogo" width="100px" height="100px"/></div></button>
            </Link>
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
