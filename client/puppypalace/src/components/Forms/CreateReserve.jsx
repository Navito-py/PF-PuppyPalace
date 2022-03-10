import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { ReserveSubmit } from '../../redux/actions'
import { Link } from 'react-router-dom'

export default function CreateReserve() {
    const dispatch = useDispatch()

    const [info, setInfo] = useState({
        ammount: '',
        date: '',
        hourly: '',
        description: '',
        city: ''
    })

    function hanleOnChange(e) {
        e.preventDefault();
        setInfo({
          ...info,
          [e.target.name]: e.target.value,
        });
        console.log(info)
    }

    function handleSelectCity(e) {
        e.preventDefault();
        setInfo({
          ...info,
          city: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        info.ammount = parseInt(info.ammount)
        dispatch(ReserveSubmit(info));
        setInfo({
            ammount: '',
            date: '',
            hourly: '',
            description: '',
            city: ''
        });
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input onChange={e => hanleOnChange(e)} type='text' name='ammount' placeholder='Precio (solo numero)'/>
                <input onChange={e => hanleOnChange(e)} type='date' name='date'/>
                <input onChange={e => hanleOnChange(e)} type='time' name='hourly'/>
                <input onChange={e => hanleOnChange(e)} type='text' name='description' placeholder='Descripcion'/>
                <select onChange={e => handleSelectCity(e)}>
                    <option hidden value=''>Ciudad</option>
                    <option value='Cordoba'>Cordoba</option>
                    <option value='Mendoza'>Mendoza</option>
                    <option value='Rosario'>Rosario</option>
                </select>
                <button type='submit'>Crear</button>
            </form>
            <Link to='/home'>
            <button>Volver</button>
            </Link>
        </div>
    )
}


