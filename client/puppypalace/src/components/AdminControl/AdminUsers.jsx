import React from 'react'
import AdminUserCard from './AdminUserCard'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllUsers, deleteUser, adminAUser, filterByUsername } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './AdminUsers.css'
import vipets from "../../media/logoVIPetsTransparent.png";

export default function AdminUsers() {

    const dispatch = useDispatch()
    const authToken = sessionStorage.getItem('token')
    const users = useSelector(state => state.allUsers)
    
    const [name, setName] = useState('')

    useEffect(() => {
        dispatch(getAllUsers(authToken))
    },[dispatch])

    function handleDelete(id){
        dispatch(deleteUser(id, authToken))
    }

    function changeAcountType(id){
        dispatch(adminAUser(id, authToken))
    }

    function HandleFilter(e){
        e.preventDefault()
        dispatch(filterByUsername(name))
    }


    function handleChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    return (
        <div className='fondo'>
            <Link to='/admin/controls'>
                <button className='back-create'>Volver</button>
            </Link>
            <form onSubmit={e => HandleFilter(e)}>
                <input onChange={e => handleChange(e)} type='text' placeholder='Nombre de usuario' name='username'/>
                <button type='submit' className='back-create'>buscar</button> 
            </form>
            {
                users?.map(e => {
                    return(
                        <AdminUserCard changeAcount={changeAcountType} isadmin={e.isAdmin} id={e.id} onDelete={handleDelete} name={e.name} username={e.userName} lastname={e.lastName} phone={e.phone} direction={e.direction} image={e.image} email={e.email} />
                    )
                })
            }
             <img src={vipets} alt="" className='logoVipets'/>        </div>
    )
}
