import React from 'react'
import { useState } from 'react'

export default function Register() {
    const [info, setInfo] = useState({
        username: '',
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        phone: '' ,
        adress: '',
        profilephoto: ''
    })
    
    function hanleOnChange(e){
        e.preventDefault()
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Username' type="text" name="username"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Name' type="text" name="name"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='LastName' type="text" name="lastname"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Email' type="text" name="email"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Password' type="text" name="password"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Confirm password' type="text" name="confirmpassword"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Phone' type="text" name="phone"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Adress (optional)' type="text" name="adress"/>
                <input onChange={(e) => hanleOnChange(e)} placeholder='Profile Photo (optional)' type="text" name="profilephoto"/>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}
