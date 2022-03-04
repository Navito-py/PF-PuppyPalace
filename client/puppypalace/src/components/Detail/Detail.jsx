import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../redux/actions'
import { useParams } from 'react-router-dom'

export default function Detail(props) {
    const dispatch = useDispatch()
    const { id } = useParams()
    return (
        <div>
            
        </div>
    )
}
