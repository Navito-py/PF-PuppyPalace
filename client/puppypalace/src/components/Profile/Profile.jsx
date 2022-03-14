import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import { getProfile } from '../../redux/actions';
import './Profile.css';

export default function Profile() {
    const dispatch = useDispatch();
    // const token = useSelector(state => state);
    const token = localStorage.getItem('token');
    useEffect(() => {
        dispatch(getProfile(token));
    }, [dispatch])
    const user = useSelector(state => state.user);

    return (
        <div className='profile'>
            <div className='card-profile'>
                <img src={user.image} width = '100px' height='100px'/>
                <p>Nombre de Usuario: {user.userName}</p>
                <p>Nombres: {user.name} {user.lastName}</p>
                <p>Direccion: {user.address} </p>
                <p>Teléfono: {user.phone}</p>
                <Link to ='createPet'>
                <button >Crear mascota</button>
                </Link>
            </div>
        </div>
    )
}
