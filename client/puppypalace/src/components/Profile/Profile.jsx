import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate } from 'react-router-dom'
import { getProfile } from '../../redux/actions';
import './Profile.css';
import LostCard  from '../Card/LostCard.jsx';
import { resetStatus } from "../../redux/actions/index"

export default function Profile() {
    const dispatch = useDispatch();
    // const token = useSelector(state => state);
    const token = localStorage.getItem('token');
    useEffect(() => {
        dispatch(getProfile(token));
    }, [dispatch])
    
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const pets = user.pets;


    const handleLogout = () => {
        sessionStorage.removeItem("loginTokenInfo");
        dispatch(resetStatus())
        navigate("/");
      }

    return (
        <div className='profile'>
            <div className='nav-bar-profile'>
                <Link to='/home'>
                    <button className="buttonHome"><img src="https://cdn-icons-png.flaticon.com/512/5100/5100262.png" alt="Home" height="50px"/></button>
                </Link>
            </div>
            <div className='card-profile'>
                <div className='container-info'>
                    <img className='image-card' src={user.image} width = '100px' height='100px' alt='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png'/>
                    <p className='pc'>{user.userName}</p>
                    <p className='pc'>{user.name} {user.lastName}</p>
                    <p className='pc'>{user.address} </p>
                    <p className='pc'>{user.phone}</p>

                      <Link to ='createPet'>
                        <button className='btn-petscreate'>Crear mascota</button>
                      </Link>
                    <button className='btn-petscreate' onClick={handleLogout}>Cerrar Sesion</button>
                </div>
                <div>
                    {pets && pets.map(p => {
                    return <div> 
                        <LostCard
                            name={p.name} 
                            image={p.image}
                            type={p.type}
                            phone={user.phone} /> 
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
