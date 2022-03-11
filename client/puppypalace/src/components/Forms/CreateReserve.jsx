import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { ReserveSubmit } from '../../redux/actions'
import { Link,  } from 'react-router-dom'
import Reserves from '../Reserves/Reserves'



function validate (info){
    let errors = {}
    if(!info.ammount){errors.name = 'Debe introducir el monto' }
    if(!info.date){errors.date = 'Debe poner una fecha valida'}
    if(!info.hourly){errors.hourly = 'Debe introducir una hora'}
    if(!info.description){errors.description = 'Debe introducir una descripcion'}
    if(!info.city){errors.city = 'Debe introducir una ciudad'}
}



export default function CreateReserve() {
    const dispatch = useDispatch()
    const [error, setError] = useState({})
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
        if(!error.ammount && !error.date && !error.hourly && !error.description && !error.city){
            e.preventDefault();
            setError(validate({
                ... info,
                [e.target.value]: e.target.value
            }))
            info.ammount = parseInt(info.ammount)
            dispatch(ReserveSubmit(info));
            setInfo({
                ammount: '1000',
                date: '',
                hourly: '',
                description: '',
                city: ''
            });
        }else{
            e.preventDefault()
            alert('Por favor complete todas las casillas correctamente')
        }
    }

    return (
        <div>
            <form action="https://mpago.la/1bfm6Un" onSubmit={e => handleSubmit(e)}>
                <input onChange={e => hanleOnChange(e)} type='text' readOnly name='ammount' placeholder='1000$'/>
                <input onChange={e => hanleOnChange(e)} type='date' name='date'/>
                <input onChange={e => hanleOnChange(e)} type='time' name='hourly'/>
                <input onChange={e => hanleOnChange(e)} type='text' name='description' placeholder='Descripcion'/>
                <select onChange={e => handleSelectCity(e)}>
                    <option hidden value=''>Ciudad</option>
                    <option value='Cordoba'>Cordoba</option>
                    <option value='Mendoza'>Mendoza</option>
                    <option value='Rosario'>Rosario</option>
                </select>
                <button type='submit' >Crear</button>
            </form>
            <Link to='/home'>
            <button>Volver</button>
            </Link>
        </div>
    )
}


