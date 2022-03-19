import React from 'react'
import AdminUserCard from './AdminUserCard'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { getAllUsers, deleteUser, adminAUser } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function AdminUsers() {

    const dispatch = useDispatch()
    const authToken = localStorage.getItem('token')
    const users = useSelector(state => state.allUsers)

    useEffect(() => {
        dispatch(getAllUsers(authToken))
    },[dispatch])

    function handleDelete(id){
        dispatch(deleteUser(id, authToken))
    }

    function changeAcountType(id){
        dispatch(adminAUser(id, authToken))
    }

    return (
        <div>
            {
                users?.map(e => {
                    return(
                        <AdminUserCard changeAcount={changeAcountType} isadmin={e.isAdmin} id={e.id} onDelete={handleDelete} name={e.name} username={e.userName} lastname={e.lastName} phone={e.phone} direction={e.direction} image={e.image} email={e.email} />
                    )
                })
            }
        </div>
    )
}
