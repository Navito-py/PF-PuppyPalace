import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPetDetail, modifyPet} from '../../redux/actions'
import './ModPet.css';

export default function ModifyPet() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const authToken = sessionStorage.getItem('token')
    let pet = useSelector((state) => state.pet)

    useEffect(() => {
        dispatch(getPetDetail(id))
        console.log(pet)
    },[dispatch, id])

    const [vaccines, setVaccines]=useState([]);
    const [vaccine, setVaccine] = useState('');


    function handleOnChange(e){
        e.preventDefault()
        pet = {
            ...pet,
            [e.target.name] : e.target.value
        }
        console.log(pet)
    }
    function handleSubmit(e){
        e.preventDefault()
         pet ={
            ...pet,
            ['vaccines']: vaccines
        }
        dispatch(modifyPet(id, pet, authToken)) 

    }
    function handleChangeVaccines(e){
        setVaccine(e.target.value);
    }
    function handleSubmitVaccine (e){
        setVaccines([...vaccines, vaccine])
    }
    function handleDelete (e){
        setVaccines(vaccines.filter(v => v !== e.target.id))
    }

    return (
        <div className='form-pet'>
            <Link to='/home/profile'>
                <button>Volver</button>
            </Link>
               { pet.name?
            <form onSubmit={e => handleSubmit(e)}>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={pet.name} name='name'/>
                {/* <input type='text' onChange={e => handleOnChange(e)} placeholder={pet.type} name='type'/>
                <label style={{margin:'10px'}}>{pet.type}</label>
                <label>Raza: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.breed} name='breed'/> */}
                <label>Edad: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.age} name='age'/>
                <label>Altura: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.height} name='height'/>
                <label>Peso: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.weight} name='weight'/>
                <label>Historial clínico: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.history} name='history'/>
                <label>Imagen: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.image} name='image'/>
                <label>Vacunas: </label>
                <input onChange={e => handleChangeVaccines(e)} type='text' placeholder={pet.vaccines} name='vaccines'/>
                <input type={'button'} value={'Add vaccine'} onClick ={(e) => handleSubmitVaccine(e)}/>
                {vaccines.length>0 && vaccines.map(v =>
                    <div key={v}>
                        <span>{v}</span>
                        <button id={v} className='vac-delete' onClick={(e) => handleDelete(e)}>X</button>
                    </div>)}
                <label>Estado: </label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.status} name='status'/>
                <button className='form-btn' type='submit'>Modificar</button>
            </form> : <p>loading...</p>
               }
        </div>
    )
}
// name:"",
//             gender:"",
//             type: "",
//             breed:"",
//             age:"",
//             height:"",
//             weight:"",
//             image:"",
//             history:"",
//             status:"",