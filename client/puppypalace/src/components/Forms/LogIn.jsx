import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { postLogin } from '../../redux/actions'
import { Link } from 'react-router-dom'

export default function LogIn() {

    const dispatch = useDispatch()

    const [data,setData] = useState({
        userName: '',
        password: ''
    })

    function hanleOnChange(e){
        e.preventDefault()
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        console.log(data)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(postLogin(data))
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => hanleOnChange(e)} placeholder='Nombre de usuario' type="text" name="userName"/>
            <input onChange={(e) => hanleOnChange(e)} placeholder='Contraseña' type="password" name="password"/>
            <button type='submit'>Log in</button>
            </form>
            <Link to='/'>
            <button>Inicio</button>
            </Link>
        </div>
    )
}
