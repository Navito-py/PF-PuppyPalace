import React from 'react'
import AdminClinicCard from './AdminClinicCard'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClinics, DeleteClinic } from '../../redux/actions'
import './AdminClinics.css'

export default function AdminClinics() {
    const dispatch = useDispatch()
    const authToken = sessionStorage.getItem('token')
    const allClinics = useSelector((state) => state.clinics);

    useEffect(() => {
        dispatch(getClinics(authToken))
    }, [dispatch])

    function HandleDelete(cardid){
        dispatch(DeleteClinic(cardid, authToken))
    }

    return (
        <div>
            <Link to='/admin/controls'>
                <button>Volver</button>
            </Link>
            <Link to='/admin/controls/Clinics/create'>
                <button>Crear</button>
            </Link>
            <div className='cardsDiv'>
                {
                    allClinics?.map(e => {
                        return(
                            <AdminClinicCard onDelete={HandleDelete} id={e.id} name={e.name} direction={e.address} image={e.image} city={e.city}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
