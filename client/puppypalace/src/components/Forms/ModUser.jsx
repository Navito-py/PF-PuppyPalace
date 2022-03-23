import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProfile, modifyUser} from '../../redux/actions'
import './ModUser.css';

export default function ModifyUser() {
    const dispatch = useDispatch()
    const { userId } = useParams()
    const authToken = sessionStorage.getItem('token')
    const user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getProfile(authToken))
        console.log(data)
    },[dispatch, userId])

    const [data, setData] = useState(user)
    
    function handleOnChange(e){
        e.preventDefault()
        const { name, value } = e.target;
        setData({
            ...data,
            [name] : value
        })
        console.log(data)
    }
    function handleSubmit(e){
        e.preventDefault()
        
        dispatch(modifyUser(userId, data, authToken))

    }
    

    return (
        <div className='form-pet'>
            <Link to='/home/profile'>
                <button>Volver</button>
            </Link>
               { user.name?
            <form onSubmit={e => handleSubmit(e)}>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={user.name} name='name'/>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={user.lastName} name='type'/>
               
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