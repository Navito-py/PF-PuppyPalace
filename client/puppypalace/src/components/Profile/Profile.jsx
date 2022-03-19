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
                <div className='btns-navBar'>
                   <Link to ='createPet'>
                     <button className='btn-petscreate'>Crear mascota</button>
                   </Link>
                  <button className='btn-petscreate' onClick={handleLogout}>Cerrar Sesion</button>
                </div>

            </div>
            <div className='card-profile'>
                <div className='container-info'>
                    <img className='image-card' src={user.image} width = '100px' height='100px' alt='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png'/>
                    <p className='pc'>
                       <img src="https://cdn-icons.flaticon.com/png/512/2102/premium/2102633.png?token=exp=1647722486~hmac=352950a57fad61869e27655404844e0b" alt=""  height="20px"/> {user.userName}</p>
                    <p className='pc'><img src="https://cdn-icons.flaticon.com/png/512/4321/premium/4321921.png?token=exp=1647722876~hmac=e0cc046469414f95942a3655d11d21f8" alt="" height="20px"/> {user.name} {user.lastName}</p>
                    <p className='pc'><img src="https://cdn-icons.flaticon.com/png/512/2163/premium/2163350.png?token=exp=1647722683~hmac=b40d746cc6da1b3cc1ab3e3e6993fb94" alt="" height="20px" /> {user.address} </p>
                    <p className='pc'><img src="https://cdn-icons.flaticon.com/png/512/2511/premium/2511894.png?token=exp=1647722747~hmac=2a1cdaed2e631b405092992275793255" alt="" height="20px"/> {user.phone}</p>


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
