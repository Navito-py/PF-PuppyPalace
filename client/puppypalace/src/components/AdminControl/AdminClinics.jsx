import React from 'react'
import AdminClinicCard from './AdminClinicCard'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClinics, DeleteClinic, filterByClinicAdmin } from '../../redux/actions'
import './AdminClinics.css'

export default function AdminClinics() {
    const dispatch = useDispatch()
    const authToken = sessionStorage.getItem('token')
    const allClinics = useSelector((state) => state.clinics);
    const [name, setName] = useState('')
    useEffect(() => {
        dispatch(getClinics(authToken))
    }, [dispatch])

    function HandleDelete(cardid){
        dispatch(DeleteClinic(cardid, authToken))
    }

    function handleChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function HandleFilter(e){
        e.preventDefault()
        dispatch(filterByClinicAdmin(name))
    }

    return (
        <div>
            <Link to='/admin/controls'>
                <button>Volver</button>
            </Link>
            <Link to='/admin/controls/Clinics/create'>
                <button>Crear</button>
            </Link>
            <form onSubmit={e => HandleFilter(e)} >
                <input onChange={e => handleChange(e)} type='text' placeholder='Nombre de la Clinica' name='clinic'/>
                <button type='submit'>buscar</button> 
            </form>
            <div className='cardsDiv'>
                {
                    allClinics?.map(e => {
                        return(
                            <AdminClinicCard hours={e.activeHours}  onDelete={HandleDelete} id={e.id} name={e.name} direction={e.address} image={e.image} city={e.city}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
