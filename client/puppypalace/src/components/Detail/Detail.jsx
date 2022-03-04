import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail, cleanDetails } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import vipets from "../../media/logoVIPetsTransparent.png";


export default function Detail(props) {
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
            {clinicsDetails.length > 0 ?
            <div>
                <p>Nombre: {clinicsDetails.name}</p>
                <p>Imagen: {clinicsDetails.image}</p>
                <p>Direccion: {clinicsDetails.address}</p>
                <p>Provincia: {clinicsDetails.province}</p>
                <p>Ciudad: {clinicsDetails.city}</p>
                <p>Horarios de atencion: {clinicsDetails.activeHours}</p>
                <p>Telefono: {clinicsDetails.phone}</p>
                <p>Correo electronico: {clinicsDetails.email}</p>
                <p>Emergencia: {clinicsDetails.emergency}</p>
                <p>Hospitalizacion: {clinicsDetails.hospitalization}</p>
            </div> : <img src={vipets} alt="noInfo" />
        }
        </div>
    )
}
