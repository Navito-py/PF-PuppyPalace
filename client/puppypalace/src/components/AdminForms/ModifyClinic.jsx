import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {getDetail, modifyClinic} from '../../redux/actions'


export default function ModifyClinic() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const authToken = sessionStorage.getItem('token')
    let clinicmod = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getDetail(id))
    },[dispatch])


    function handleOnChange(e){
        e.preventDefault()
        clinicmod = {
            ...clinicmod,
            [e.target.name] : e.target.value
        }
        console.log(clinicmod)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(modifyClinic(id, clinicmod, authToken))

    }

    return (
        <div>
            <Link to='/admin/controls/Clinics'>
                <button>Volver</button>
            </Link>
            {
                clinicmod.name?
            <form onSubmit={e => handleSubmit(e)}>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={clinicmod.name} name='name'/>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={clinicmod.address} name='address'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.activeHours} name='activeHours'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.email? clinicmod.email : 'Email no encontrado'} name='email'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.phone} name='phone'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.image} name='image'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.emergency} name='emergency'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.hospitalization} name='hospitalization'/>
                <button type='submit'>Modificar</button>
            </form> : <p>loading...</p>
            }
        </div>
    )
}
