import React from 'react'
import { useState } from 'react'
import { PetSubmit } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function CreatePet() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [petdata, setPetdata] = useState({
        name:"",
        gender:"",
        type: "",
        breed:"",
        age:"",
        height:"",
        weight:"",
        image:"",
        history:"",
        status:"",
    })

    function handleOnChange(e){
        e.preventDefault()
        setPetdata({
            ...petdata,
            [e.target.name]: e.target.value
        })
        console.log(petdata)
    }

    function handleStatus(e){
        e.preventDefault()
        setPetdata({
            ...petdata,
            status: e.target.value
        })
    }

    function handleGender(e){
        e.preventDefault()
        setPetdata({
            ...petdata,
            gender: e.target.value
        })
    }

    function handleType(e){
        e.preventDefault()
        setPetdata({
            ...petdata,
            type: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        petdata.weight = parseInt(petdata.weight)
        petdata.age = parseInt(petdata.age)
        petdata.height = parseInt(petdata.height)
        dispatch(PetSubmit(petdata, token))
        setPetdata({
            name:"",
            gender:"",
            type: "",
            breed:"",
            age:"",
            height:"",
            weight:"",
            image:"",
            history:"",
            status:"",
        })
        // navigate('/profile')
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} >
                <input onChange={e => handleOnChange(e)} placeholder='Nombre' name='name' type='text'/>
                <select onChange={e => handleGender(e)}>
                    <option hidden >Genero</option>
                    <option value='Male'>Macho</option>
                    <option value='Female'>Hembra</option>
                </select>
                <select onChange={e => handleType(e)}>
                    <option hidden >Tipo</option>
                    <option value='Dog'>Perro</option>
                    <option value='Cat'>Gato</option>
                </select>
                <input onChange={e => handleOnChange(e)} placeholder='Raza (opcional)' name='breed' type='text'/>
                <input onChange={e => handleOnChange(e)} placeholder='Edad (años)' name='age' type='text'/>
                <input onChange={e => handleOnChange(e)} placeholder='Altura (Cm)' name='height' type='text'/>
                <input onChange={e => handleOnChange(e)} placeholder='Peso (Kg)' name='weight' type='text'/>
                <input onChange={e => handleOnChange(e)} placeholder='Imagen (Url)' name='image' type='text'/>
                <input onChange={e => handleOnChange(e)} placeholder='Historial' name='history' type='text'/>
                <select onChange={e => handleStatus(e)}>
                    <option hidden >Estado</option>
                    <option value='Alive'>Vivo</option>
                    <option value='Deceased'>Muerto</option>
                    <option value='Lost'>Perdido</option>
                </select>
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}
