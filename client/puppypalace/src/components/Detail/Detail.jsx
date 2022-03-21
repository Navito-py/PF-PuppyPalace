import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDetail, cleanDetails } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import Reserves from '../Reserves/Reserves'
import vipets from "../../media/logoVIPetsTransparent.png";
import './Detail.css';
import BookDate from '../Forms/BookDate'
import CreateReserve from '../Forms/CreateReserve'


export default function Detail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const clinicsDetails = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getDetail(id))
        return () => {
            dispatch(cleanDetails())
        }
    }, [dispatch, id])

    return (
       <div> 
            <div className='home-btn'>
                <Link to='/home'>
                    <button className='inicio-detailClinic'><img src="https://cdn-icons-png.flaticon.com/512/5100/5100262.png" alt="Home" height="50px"/></button>
                </Link>
            </div>        
            <div className='container'>

                {clinicsDetails ?
                <div className='card-detail-clinic'>
                    <div className='foto-nombre'>
                    <p><img className='img-clinic' src={clinicsDetails.image} alt="vipetslogo" width="200px" height="200px" /></p>
                    <p className='titleClinic'>{clinicsDetails.name}</p>
                    </div>
                    <div className='foto-nombre'>
                    <p className='p'>{clinicsDetails.address}</p>
                    <p className='p'>{clinicsDetails.province}</p>
                    <p className='p'>{clinicsDetails.city}</p>
                    </div>
                    <div className='foto-nombre'>
                    <p className='p'>Horarios de atencion: {clinicsDetails.activeHours}</p>
                    <p className='p'>Telefono: {clinicsDetails.phone}</p>
                    {/* <p className='p'>Correo electronico: {clinicsDetails.email}</p> */}
                    <img src="https://media.baamboozle.com/uploads/images/67969/1598325054_298007" alt=""  height="50px"/>
                    </div>
                    <div className='foto-nombre'>
                    <p className='p'>Emergencia: {clinicsDetails.emergency}</p>
                    <p className='p'>Hospitalizacion: {clinicsDetails.hospitalization}</p>
                    <Link to='/home/reserves'>
                        <button className="reserve">Reservar</button>
                    </Link>
                    </div>
                    
                </div> : <img src={vipets} alt="noInfo" />

}
            </div>
            {/* <BookDate /> */}
            <CreateReserve />
        </div>
    )
}