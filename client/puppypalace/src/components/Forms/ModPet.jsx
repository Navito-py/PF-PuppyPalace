import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPetDetail, modifyPet} from '../../redux/actions'
import vipets from "../../media/logoVIPetsTransparent.png"; 
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
                <div className="brand-title-modPet" >VIPets<img className="vipets-logo" src={vipets} alt="vipetslogo" width="100px" height="100px"/></div>
            </Link>
            <div className='containerForm'>
               { pet.name?

            <form classname='form-form' onSubmit={e => handleSubmit(e)}>
                    <label>Nombre: </label>
                    <input type='text' onChange={e => handleOnChange(e)} placeholder={pet.name} name='name'/>
                
                    <label >Tipo: </label>
                    <input type='text' onChange={e => handleOnChange(e)} placeholder={pet.type} name='type'/>
                    <br />
                    <label >Raza: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.breed} name='breed'/>
                    <label >Edad: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.age} name='age'/>
                    <br />
                
                    <label >Altura: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.height} name='height'/>
                
                    <label >Peso: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.weight} name='weight'/>
                
                    <br />
                    <label classname='form-label'>Historial clínico: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.history} name='history'/>
                
                    <label classname='form-label'>Imagen: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.image} name='image'/>
                
                    <br />
                    <label >Vacunas: </label>
                    <input onChange={e => handleChangeVaccines(e)} type='text' placeholder={pet.vaccines} name='vaccines'/>
                
                    <input type={'button'} className='form-btnPets' value={'Add vaccine'} onClick ={(e) => handleSubmitVaccine(e)}/>
                    {vaccines.length>0 && vaccines.map(v =>
                        <div key={v}>
                            <span>{v}</span>
                            <button id={v} className='vac-delete' onClick={(e) => handleDelete(e)}>X</button>
                        </div>)}
                
                            <br />
                    <label>Estado: </label>
                    <input onChange={e => handleOnChange(e)} type='text' placeholder={pet.status} name='status'/>
                
                    <button className='form-btnPets' type='submit'>Modificar</button>
               
            </form> : <p>loading...</p>
               }
               </div>
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