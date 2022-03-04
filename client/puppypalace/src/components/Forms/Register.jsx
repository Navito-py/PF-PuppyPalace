import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { postUser } from '../../redux/actions'

export default function Register() {
    const dispatch = useDispatch()

    const [info, setInfo] = useState({
        userName: "",
        name: "",
        lastName: "",
        email: "",
        password: "",
        phone: "" ,
        address: "",
        province: "",
        city: "",
        image: ""
    })
    
    function hanleOnChange(e){
        e.preventDefault()
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        })
        console.log(info)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(postUser(info))
        setInfo({
            userName: "",
            name: "",
            lastName: "",
            email: "",
            password: "",
            phone: "" ,
            address: "",
            province: "",
            city: "",
            image: "" 
        })
    }

    function handleSelectProvice(e){
        e.preventDefault()
        setInfo({
           ...info,
            province: e.target.value
        })
    }

    function handleSelectCity(e){
        e.preventDefault()
        setInfo({
           ...info,
            city: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input onChange={(e) => hanleOnChange(e)} required placeholder='Nombre de Usuario' type="text" name="userName"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Nombre' type="text" name="name"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Apellido' type="text" name="lastName"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Email' type="text" name="email"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Contraseña' type="password" name="password"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Telefono' type="number" name="phone"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Direccion (Calle y Altura)' type="text" name="address"/>
                <select onChange={e => handleSelectProvice(e)}>
                    <option hidden selected>Provincia</option>
                    <option value='Mendoza' >Mendoza</option>
                    <option value='Santa Fe' >Santa Fe</option>
                    <option value='Córdoba' >Córdoba</option>
                </select>
                <select onChange={e => handleSelectCity(e)}>
                    <option hidden selected>Ciudad</option>
                    <option value='Mendoza' >Mendoza</option>
                    <option value='Rosario' >Rosario</option>
                    <option value='Córdoba' >Córdoba</option>
                </select>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Foto de perfil (opcional)' type="text" name="image"/>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}
