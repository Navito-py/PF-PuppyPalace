import React from 'react'
import { useState } from 'react'

export default function LogIn() {
    const [data,setData] = useState({
        email: '',
        password: ''
    })

    function hanleOnChange(e){
        e.preventDefault()
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div>
            <input onChange={(e) => hanleOnChange(e)} placeholder='Email' type="text" name="email"/>
            <input onChange={(e) => hanleOnChange(e)} placeholder='Password' type="password" name="password"/>
            <button onClick={(e) => handleSubmit(e)}>Log in</button>
        </div>
    )
}
