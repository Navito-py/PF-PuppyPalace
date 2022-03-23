import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPetDetail, modifyPet} from '../../redux/actions'
import './ModPet.css';
import vipets from "../../media/logoVIPetsTransparent.png"; 
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
                <div className="brand-title-modPet" >VIPets<img className="vipets-logo" src={vipets} alt="vipetslogo" width="100px" height="100px"/></div>
            </Link>
               { pet.name?
            <form classname='form-form' onSubmit={e => handleSubmit(e)}>
                <div classname='form-divs'>
                    <label classname='form-label'>Nombre: </label>
                    <input type='text' onChange={e => handleOnChange(e)} placeholder={pet.name} name='name'/>
                
                    <label classname='form-label'>Tipo: </label>
                    <input type='text' onChange={e => handleOnChange(e)} placeholder={pet.type} name='type'/>
                
                    <label classname='form-label'>Raza: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.breed} name='breed'/>
                    <label classname='form-label'>Edad: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.age} name='age'/>
                
                    <label classname='form-label'>Altura: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.height} name='height'/>
                
                    <label classname='form-label'>Peso: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.weight} name='weight'/>
                
                    <label classname='form-label'>Historial clínico: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.history} name='history'/>
                
                    <label classname='form-label'>Imagen: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.image} name='image'/>
                
                    <label classname='form-label'>Vacunas: </label>
                    <input onChange={e => handleChangeVaccines(e)} type='text' placeholder={pet.vaccines} name='vaccines'/>
                
                    <input type={'button'} className='vac-btn' value={'Add vaccine'} onClick ={(e) => handleSubmitVaccine(e)}/>
                    {vaccines.length>0 && vaccines.map(v =>
                        <div key={v}>
                            <span>{v}</span>
                            <button id={v} className='vac-delete' onClick={(e) => handleDelete(e)}>X</button>
                        </div>)}
                
                    <label classname='form-label'>Estado: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.status} name='status'/>
                
                    <button className='form-btn' type='submit'>Modificar</button>
                </div>
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