import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getDetail} from '../../redux/actions';
import { modifyClinic } from '../../redux/actions';
import vipets from "../../media/logoVIPetsTransparent.png";
import './ModifyClinic.css'

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
                <button className='btnAminClinicM'>Volver</button>
            </Link>
            {
                clinicmod.name?
      
            <form className='form-admin-clinic1' onSubmit={e => handleSubmit(e)}>
                <h1>Modificar Clinica</h1>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={clinicmod.name} name='name'/>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={clinicmod.address} name='address'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.activeHours} name='activeHours'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.email? clinicmod.email : 'Email no encontrado'} name='email'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.phone} name='phone'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.image} name='image'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.emergency} name='emergency'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.hospitalization} name='hospitalization'/>
                <button type='submit' className='btnAminClinic'>Modificar</button>
            </form> : <p>loading...</p>
            }
            {/* <img src={vipets} alt="" className='logoVipets'/>*/}
        </div>
    )
}
