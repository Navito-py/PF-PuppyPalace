import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import { getProfile } from '../../redux/actions';
import './Profile.css';
import LostCard  from '../Card/LostCard.jsx';

export default function Profile() {
    const dispatch = useDispatch();
    // const token = useSelector(state => state);
    const token = localStorage.getItem('token');
    useEffect(() => {
        dispatch(getProfile(token));
    }, [dispatch])
    
    const user = useSelector(state => state.user);
    const pets = user.pets;

    return (
        <div className='profile'>
                    <Link to='/home'>
                        <button className="buttonHome"><img src="https://cdn-icons-png.flaticon.com/512/5100/5100262.png" alt="Home" height="50px"/></button>
                    </Link>
            <div className='card-profile'>
                <div className='container-info'>
                    <img src={user.image} width = '100px' height='100px' alt='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png'/>
                    <p>Nombre de Usuario: {user.userName}</p>
                    <p>Nombres: {user.name} {user.lastName}</p>
                    <p>Direccion: {user.address} </p>
                    <p>Teléfono: {user.phone}</p>

                    <Link to ='createPet'>
                    <button className='btn-petscreate'>Crear mascota</button>
                    </Link>
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
