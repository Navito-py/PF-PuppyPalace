import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProfile, modifyUser} from '../../redux/actions'
import './ModUser.css';

export default function ModifyUser() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const authToken = sessionStorage.getItem('token')
    let user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getProfile(authToken))
    },[dispatch])

    
    function handleOnChange(e){
        e.preventDefault()
        user = {
            ...user,
            [e.target.name] : e.target.value
        }
        console.log(user)
    }

    function handleSubmit(e){
        e.preventDefault()
        user.phone = parseInt(user.phone)
        dispatch(modifyUser(id, user, authToken))
        console.log(user);
    }
    
    return (
        <div className='form-pet'>
            <Link to='/home/profile'>
                <button>Volver</button>
            </Link>
               { user.name?
            <form onSubmit={e => handleSubmit(e)}>
                <label style={{margin:'10px'}}>Nombre de usuario: </label>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={user.userName} name='userName'/>
                <label>Nombre y Apellido:  </label>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={user.name} name='name'/>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={user.lastName} name='lastName'/>
                <label>Dirección:  </label>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={user.address} name='address'/>
                <label>Email:  </label>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={user.email} name='email'/>
                <label>Teléfono:  </label>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={user.phone} name='phone'/>
                <label>Provincia:  </label>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={user.province} name='province'/>
                <label>Ciudad:  </label>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={user.city} name='city'/>
                {/* <label style={{margin:'10px'}}>{pet.type}</label>
                <label>Raza: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.breed} name='breed'/>
                <label>Edad: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.age} name='age'/>
                <label>Altura: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.height} name='height'/>
                <label>Peso: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.weight} name='weight'/>
                <label>Historial clínico: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.history} name='history'/>
                <label>Imagen: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.image} name='image'/>
                <label>Vacunas: </label>
                <input onChange={e => handleChangeVaccines(e)} type='text' placeholder={pet.vaccines} name='vaccines'/>
                <input type={'button'} value={'Add vaccine'} onClick ={(e) => handleSubmitVaccine(e)}/>
                {vaccines.length>0 && vaccines.map(v =>
                    <div key={v}>
                        <span>{v}</span>
                        <button id={v} className='vac-delete' onClick={(e) => handleDelete(e)}>X</button>
                    </div>)}
                <label>Estado: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.status} name='status'/> */}
                <button className='form-btn' type='submit'>Modificar</button>
            </form> : <p>loading...</p>
               }
        </div>
    )
}