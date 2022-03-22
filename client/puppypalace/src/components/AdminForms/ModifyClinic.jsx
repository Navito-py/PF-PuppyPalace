import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getDetail} from '../../redux/actions'

export default function ModifyClinic() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const clinicmod = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getDetail(id))
        console.log(data)
    },[dispatch, id])

    const [data, setData] = useState(clinicmod)

    function handleOnChange(e){
        e.preventDefault()
        const { name, value } = e.target;
        setData({
            ...data,
            [name] : value
        })
        console.log(data)
    }

    return (
        <div>
            <Link to='/admin/controls/Clinics'>
                <button>Volver</button>
            </Link>
            {
                clinicmod.name?
            <form>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={clinicmod.name} name='name'/>
                <input type='text' onChange={e => handleOnChange(e)} placeholder={clinicmod.address} name='address'/>
                <select>
                    <option hidden>Provincia</option>
                    <option value='Córdoba'>Córdoba</option>
                    <option value='Mendoza'>Mendoza</option>
                    <option value='Santa Fe'>Santa Fe</option>
                </select>
                <select>
                    <option hidden>Cuidad</option>
                    <option value='Córdoba'>Córdoba</option>
                    <option value='Mendoza'>Mendoza</option>
                    <option value='Rosario'>Rosario</option>
                </select>
                <label style={{margin:'10px'}}>{clinicmod.province}</label>
                <label>{clinicmod.city}</label>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.activeHours} name='activeHours'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.email? clinicmod.email : 'No encontrado'} name='email'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.phone} name='phone'/>
                <input onChange={e => handleOnChange(e)} type='text' placeholder={clinicmod.image} name='image'/>
                <button type='submit'>Modificar</button>
            </form> : <p>loading...</p>
            }
        </div>
    )
}
