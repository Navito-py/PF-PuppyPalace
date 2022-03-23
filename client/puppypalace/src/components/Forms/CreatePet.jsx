import React from 'react'
import { useState } from 'react'
import { PetSubmit } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';
import './CreatePets.css';
import vipets from "../../media/logoVIPetsTransparent.png";

export default function CreatePet() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
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
        alert("Tu mascota ha sido creada!!!!")
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
        navigate('/home/profile')
    }

    return (
        <div className='container-createpet'>
            <nav className='nav-createPet'>
            <Link to="/home/profile" className="landingLink"><div className="brand-title1" >VIPets<img className="vipets-logo" src={vipets} alt="vipetslogo" width="100px" height="100px"/></div></Link>
            </nav>
            <div className='div-formPet'>
                <form onSubmit={e => handleSubmit(e)} >
                       <div className='n1'>
                            <input onChange={e => handleOnChange(e)} placeholder='Nombre' name='name' type='text'/>
                            <select className='selcts' onChange={e => handleGender(e)}>
                                <option hidden >Genero</option>
                                <option value='Male'>Macho</option>
                                <option value='Female'>Hembra</option>
                            </select>
                            <select className='selcts' onChange={e => handleType(e)}>
                                <option hidden >Tipo</option>
                                <option value='Dog'>Perro</option>
                                <option value='Cat'>Gato</option>
                            </select>
                            <input onChange={e => handleOnChange(e)} placeholder='Raza (opcional)' name='breed' type='text'/>
                       </div>
                       <div className='n1'>
                            <input onChange={e => handleOnChange(e)} placeholder='Edad (años)' name='age' type='text'/>
                            <input onChange={e => handleOnChange(e)} placeholder='Altura (Cm)' name='height' type='text'/>
                            <input onChange={e => handleOnChange(e)} placeholder='Peso (Kg)' name='weight' type='text'/>
                        </div>
                        <div className='n1'>
                            <input onChange={e => handleOnChange(e)} placeholder='Imagen (Url)' name='image' type='text'/>
                            <input onChange={e => handleOnChange(e)} placeholder='Historial' name='history' type='text'/>
                            <select className='selcts' onChange={e => handleStatus(e)}>
                                <option hidden >Estado</option>
                                <option value='Alive'>Vivo</option>
                                <option value='Deceased'>Muerto</option>
                                <option value='Lost'>Perdido</option>
                            </select>
                        </div>
                        <div className='btn4'>
                            <button className='btn-createPet' type='submit' >Crear</button>
                        </div>
                </form>
            </div>
            <div className="break"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
        </div>
    )
}
