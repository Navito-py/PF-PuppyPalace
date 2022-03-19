import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addClinic } from '../../redux/actions'
import {Link} from 'react-router-dom'


export default function CreateClinic() {

    const dispatch = useDispatch()

    const authToken = localStorage.getItem('token')

    const [info, setInfo] = useState({
        name: '',
        address: '',
        province: '',
        city: '',
        activeHours: '',
        email: '',
        phone: '',
        image: '',

    })

    function handleOnChange(e) {
        e.preventDefault()
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        })
        console.log(info)
    }

    function handleProvince(e){
        e.preventDefault()
        setInfo({
            ...info,
            province: e.target.value
        })
    }

    function handleCity(e){
        e.preventDefault()
        setInfo({
            ...info,
            city: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addClinic(info, authToken))
    }

    return (
        <div>
            <Link to='/admin/controls/Clinics'>
                <button>Volver</button>
            </Link>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => handleOnChange(e)} type='text' placeholder='Nombre' name='name'/>
                <input onChange={(e) => handleOnChange(e)} type='text' placeholder='Direccion' name='address'/>
                <select onChange={(e) => handleProvince(e)}>
                    <option hidden>Provincia</option>
                    <option value='Córdoba'>Córdoba</option>
                    <option value='Mendoza'>Mendoza</option>
                    <option value='Santa Fe'>Santa Fe</option>
                </select>
                <select onChange={e => handleCity(e)}>
                    <option hidden>Cuidad</option>
                    <option value='Córdoba'>Córdoba</option>
                    <option value='Mendoza'>Mendoza</option>
                    <option value='Rosario'>Rosario</option>
                </select>
                <input onChange={(e) => handleOnChange(e)} type='text' placeholder='Horario de atencion' name='activeHours'/>
                <input onChange={(e) => handleOnChange(e)} type='text' placeholder='Email' name='email'/>
                <input onChange={(e) => handleOnChange(e)} type='text' placeholder='Telefono (10 caracteres)' name='phone'/>
                <input onChange={(e) => handleOnChange(e)} type='text' placeholder='Imagen' name='image'/>
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}
